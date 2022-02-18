import React, { FC } from "react";
import currency from "currency.js";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

interface IPayload {
  name: string;
  value: number;
}

interface ICustomTooltip {
  active: boolean;
  payload: IPayload[];
}

interface IChartsBarData {
  name: string | undefined;
  income: number | null;
  expense: number | null;
}

interface ChartsBarProps {
  data: IChartsBarData[];
}

export const ChartsBar: FC<ChartsBarProps> = ({ data }) => {
  const customTooltip = ({ active, payload }: ICustomTooltip | any) => {
    if (active) {
      return (
        <div
          style={{
            color:
              sessionStorage.getItem("theme") === "light" ? "#000" : "#fff",
            padding: "5px",
            backgroundColor:
              sessionStorage.getItem("theme") === "light" ? "#fff" : "#303030",
            border: "1px solid #cccc",
            borderRadius: "6px",
          }}
        >
          <h4>{payload[0].payload.name}</h4>
          {payload.map(
            (data: { name: string; value: number }, index: number) => {
              return (
                <p key={index}>{`${data.name}: ${currency(
                  data.value
                ).format()}`}</p>
              );
            }
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="99%" height={330}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={customTooltip} />
        <Legend iconType="circle" />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="income" fill="green" />
        <Bar dataKey="expense" fill="red" />
      </BarChart>
    </ResponsiveContainer>
  );
};

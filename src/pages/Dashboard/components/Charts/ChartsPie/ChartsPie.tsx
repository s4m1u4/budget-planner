import React, { FC } from "react";
import currency from "currency.js";
import { COLORS } from "../constants";
import {
  Pie,
  Cell,
  Legend,
  Tooltip,
  PieChart,
  ResponsiveContainer,
} from "recharts";

import { ChartsPieTittle } from "./ChartsPie.styles";

interface IPayload {
  name: string;
  value: number;
}

interface ICustomTooltip {
  active: boolean;
  payload: IPayload[];
}

interface ICustomLabel {
  value: number;
}

interface IChartsPieData {
  name: string | undefined;
  value: number;
}

interface ChartsPieProps {
  title: string;
  data: IChartsPieData[];
}

export const ChartsPie: FC<ChartsPieProps> = ({ title, data }) => {
  const customTooltip = ({ active, payload }: ICustomTooltip | any) => {
    if (active) {
      const amount = payload[0].value;
      return (
        <div
          style={{
            color:
              sessionStorage.getItem("theme") === "light" ||
              sessionStorage.getItem("theme") === null
                ? "#000"
                : "#fff",
            padding: "5px",
            backgroundColor:
              sessionStorage.getItem("theme") === "light" ||
              sessionStorage.getItem("theme") === null
                ? "#fff"
                : "#303030",
            border: "1px solid #cccc",
            borderRadius: "6px",
          }}
        >
          <p>{`${payload[0].name}: ${currency(amount).format()}`}</p>
        </div>
      );
    }
    return null;
  };

  const customLabel = ({ value }: ICustomLabel) => currency(value).format();

  return (
    <div>
      <ChartsPieTittle>{title}</ChartsPieTittle>
      <ResponsiveContainer width="99%" height={300}>
        <PieChart>
          <Pie
            className="test"
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={customLabel}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend iconType="circle" />
          <Tooltip content={customTooltip} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

import React from "react";
import { COLORS } from "../constants";
import { customLabel, customTooltip } from "../helpers";

import {
  Pie,
  Cell,
  Legend,
  Tooltip,
  PieChart,
  ResponsiveContainer,
} from "recharts";
import { ChartsPieTittle } from "./ChartsPie.styles";

export const ChartsPie = ({ title, data }) => {
  return (
    <div>
      <ChartsPieTittle>{title}</ChartsPieTittle>
      <ResponsiveContainer width="99%" height={300}>
        <PieChart>
          <Pie
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

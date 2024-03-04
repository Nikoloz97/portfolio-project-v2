import React from "react";
import { RadialBarChart, RadialBar } from "recharts";

const CustomRadialBarChart = (props) => {
  const data = [
    { name: "Page A", uv: props.percentile, fill: "#70faba" },
    { uv: props.total, opacity: "0" },
  ];
  return (
    <div>
      <RadialBarChart
        width={150}
        height={150}
        innerRadius="50%"
        outerRadius="80%"
        data={data}
      >
        <RadialBar
          background={{ fill: "#2b2b2b" }}
          dataKey="uv"
          animationDuration={2000}
        />
      </RadialBarChart>
    </div>
  );
};

export default CustomRadialBarChart;

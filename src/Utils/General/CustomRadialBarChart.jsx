import React from "react";
import { RadialBarChart, RadialBar } from "recharts";
import "./CustomRadialBarChart.css";

const CustomRadialBarChart = (props) => {
  const stringPercentile = ((props.percentile / props.total) * 100).toFixed(0);
  const intPercentile = parseInt(stringPercentile);
  const ordinalSuffix = () => {
    const finalStringPercentileDigit =
      stringPercentile[stringPercentile.length - 1];
    const finalPercentileDigit = parseInt(finalStringPercentileDigit);
    if (intPercentile > 10 && intPercentile < 20) {
      return "th";
    } else if (finalPercentileDigit === 1) {
      return "st";
    } else if (finalPercentileDigit === 2) {
      return "nd";
    } else if (finalPercentileDigit === 3) {
      return "rd";
    } else {
      return "th";
    }
  };
  const colorFillDeterminer = () => {
    if (intPercentile > 55) {
      return "#70faba";
    } else if (intPercentile <= 55 && intPercentile >= 45) {
      return "orange";
    } else if (intPercentile < 45) {
      return "red";
    }
  };
  const data = [
    { name: "Page A", uv: props.percentile, fill: colorFillDeterminer() },
    { uv: props.total, opacity: "0" },
  ];
  return (
    <div>
      <RadialBarChart
        width={125}
        height={125}
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
      <div className="Percentile-Digit-Display">
        <h4>{`${stringPercentile}${ordinalSuffix()}`}</h4>
      </div>
    </div>
  );
};

export default CustomRadialBarChart;

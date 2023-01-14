import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data1 = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];

function TrendChart(data) {
  console.log(data["data"]);
  return (
    <>
      <LineChart width={900} height={450} data={data["data"]}>
        <Line type="monotone" dataKey="output_left" stroke="#3D5AF1" />
        <Line type="monotone" dataKey="output_right" stroke="#FF7A3C" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </>
  );
}

export default TrendChart;

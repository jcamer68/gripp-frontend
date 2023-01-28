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

function TrendChart(data, dataSelection) {
  console.log(data["data"]);

  //Couldn't get to work... Passed parameter always ended up blank
  console.log(dataSelection);
  return (
    <>
      <h3>Average Output (lbs)</h3>
      <LineChart width={900} height={450} data={data["data"]}>
        <Line type="monotone" dataKey="output_average" stroke="#FF7A3C" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
      </LineChart>

      <h3>Right-Hand Output (lbs)</h3>
      <LineChart width={900} height={450} data={data["data"]}>
        <Line type="monotone" dataKey="output_right" stroke="#22D1EE" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
      </LineChart>

      <h3>Left-Hand Output (lbs)</h3>
      <LineChart width={900} height={450} data={data["data"]}>
        <Line type="monotone" dataKey="output_left" stroke="#3D5AF1" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </>
  );
}

export default TrendChart;

import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

const data1 = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];

function TrendChart(data, dataSelection) {
  console.log(data["data"]);

  //Couldn't get to work... Passed parameter always ended up blank
  console.log(dataSelection);
  return (
    <>
      {/* <h3>Average Output (lbs)</h3>
      <LineChart width={900} height={450} data={data["data"]}>
        <Line type="monotone" dataKey="output_average" stroke="#FF7A3C" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
      </LineChart> */}

      <Box
        bg="white"
        border={"1px"}
        borderColor="gray.200"
        margin={"30"}
        borderRadius="5"
      >
        {" "}
        <Heading color={"#3D4857"} size="md" m={"8"} fontWeight="regular">
          Exerted Grip Strength (lbs) - Right Hand
        </Heading>
        <LineChart width={900} height={450} data={data["data"]}>
          <Line type="monotone" dataKey="output_right" stroke="#22D1EE" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </Box>

      <Box
        bg="white"
        border={"1px"}
        borderColor="gray.200"
        margin={"30"}
        borderRadius="5"
      >
        {" "}
        <Heading color={"#3D4857"} size="md" m={"8"} fontWeight="regular">
          Exerted Grip Strength (lbs) - Left Hand
        </Heading>
        <LineChart width={900} height={450} data={data["data"]}>
          <Line type="monotone" dataKey="output_left" stroke="#3D5AF1" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </Box>
    </>
  );
}

export default TrendChart;

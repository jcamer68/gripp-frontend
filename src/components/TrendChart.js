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
import { Select } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

function TrendChart({ data, chartSelection }) {
  const isRight = chartSelection === "right";
  const isLeft = chartSelection === "left";
  const isBoth = chartSelection === "both";

  return (
    //value after '&&' operator is 'truthy' and evaluates to true automatically
    <>
      {isBoth && (
        <Box
          bg="white"
          border={"1px"}
          borderColor="gray.200"
          margin={"30"}
          borderRadius="5"
        >
          <Heading color={"#3D4857"} size="md" m={"8"} fontWeight="regular">
            Exerted Grip Strength (lbs) - Average
          </Heading>
          <LineChart width={900} height={450} data={data} margin={"0"}>
            <Line type="monotone" dataKey="output_average" stroke="#FF7A3C" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </Box>
      )}

      {isRight && (
        <Box
          bg="white"
          border={"1px"}
          borderColor="gray.200"
          margin={"30"}
          borderRadius="5"
        >
          <Heading color={"#3D4857"} size="md" m={"8"} fontWeight="regular">
            Exerted Grip Strength (lbs) - Right Hand
          </Heading>
          <LineChart width={900} height={450} data={data}>
            <Line type="monotone" dataKey="output_right" stroke="#22D1EE" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </Box>
      )}

      {isLeft && (
        <Box
          bg="white"
          border={"1px"}
          borderColor="gray.200"
          margin={"30"}
          borderRadius="5"
        >
          <Heading color={"#3D4857"} size="md" m={"8"} fontWeight="regular">
            Exerted Grip Strength (lbs) - Left Hand
          </Heading>
          <LineChart width={900} height={450} data={data}>
            <Line type="monotone" dataKey="output_left" stroke="#3D5AF1" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </Box>
      )}
    </>
  );
}

export default TrendChart;

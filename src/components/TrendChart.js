import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Heading } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function TrendChart({ data }) {
  const [chartChoice, setChartChoice] = useState("both");
  const isRight = chartChoice === "right";
  const isLeft = chartChoice === "left";
  const isBoth = chartChoice === "both";

  const handleSelectChange = (e) => {
    setChartChoice(e.target.value); //update state with selected value
  };

  return (
    //value after '&&' operator is 'truthy' and evaluates to true automatically
    <>
      <Box bg="white" border={"1px"} borderColor="gray.200" borderRadius="5">
        {isBoth && (
          <Box>
            <Heading color={"#3D4857"} size="md" m={"8"} fontWeight="regular">
              Exerted Grip Strength (lbs) - Average
            </Heading>
            <ResponsiveContainer width="99%" aspect={2.25}>
              <LineChart width={900} height={450} data={data} margin={"0"}>
                <Line
                  type="monotone"
                  dataKey="output_average"
                  stroke="#FF7A3C"
                />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        )}

        {isRight && (
          <Box>
            <Heading color={"#3D4857"} size="md" m={"8"} fontWeight="regular">
              Exerted Grip Strength (lbs) - Right Hand
            </Heading>
            <ResponsiveContainer width="99%" aspect={2.25}>
              <LineChart width={900} height={450} data={data}>
                <Line type="monotone" dataKey="output_right" stroke="#22D1EE" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        )}

        {isLeft && (
          <Box>
            <Heading color={"#3D4857"} size="md" m={"8"} fontWeight="regular">
              Exerted Grip Strength (lbs) - Left Hand
            </Heading>
            <ResponsiveContainer width="99%" aspect={2.25}>
              <LineChart width={900} height={450} data={data}>
                <Line type="monotone" dataKey="output_left" stroke="#3D5AF1" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        )}
        <Select
          placeholder="Select option"
          onChange={handleSelectChange}
          m={"5"}
          w="50%"
        >
          <option value="right">Right Hand</option>
          <option value="left">Left Hand</option>
          <option value="both">Average</option>
        </Select>
      </Box>
    </>
  );
}

export default TrendChart;

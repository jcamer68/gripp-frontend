import axios from "axios";
import { useEffect, useState } from "react";
import TrendChart from "../components/TrendChart";

import { Heading } from "@chakra-ui/react";

import { Grid, GridItem, Hide, Box } from "@chakra-ui/react";

const Trends = () => {
  const [chartData, setChartData] = useState([]);

  var userId = 2;

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://127.0.0.1:5000/measure/${userId}`,
    })
      .then((response) => response["data"])
      .then((res) => {
        console.log(res["data"]);
        var result = [];
        for (const d of res["data"]) {
          result.push({
            date:
              new Date(d.date).getUTCMonth() +
              1 +
              "/" +
              new Date(d.date).getUTCDate(),
            output_left: d.output_left,
            output_right: d.output_right,
            output_average: (d.output_left + d.output_right) / 2,
          });
        }
        setChartData(result);
      });
  }, []);

  return (
    <>
      <Heading size="lg" color={"#3D4857"} mb="5">
        Trends
      </Heading>

      <Grid h="100vh" templateColumns="repeat(12, 1fr)" mt={"30"}>
        <GridItem colSpan={["12", "8"]} mr={"4"}>
          <TrendChart data={chartData} />
        </GridItem>
        <GridItem colSpan={["12", "4"]} ml={"4"}>
          <Hide below="lg">
            <Box
              bg="white"
              border={"1px"}
              borderColor="gray.200"
              borderRadius="5"
            >
              <Heading
                color={"#3D4857"}
                size="md"
                m={"8"}
                fontWeight="regular"
                align="middle"
              >
                Friends
              </Heading>
            </Box>
          </Hide>
        </GridItem>
      </Grid>
    </>
  );
};

export default Trends;

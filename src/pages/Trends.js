import axios from "axios";
import { useEffect, useState } from "react";
import TrendChart from "../components/TrendChart";

import { Heading } from "@chakra-ui/react";

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
      <div>
        <div>
          <TrendChart data={chartData} />
        </div>
      </div>
    </>
  );
};

export default Trends;

import axios from "axios";
import { useEffect, useState } from "react";
import TrendChart from "../components/TrendChart";

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
          });
        }
        setChartData(result);
      });
  }, []);

  return (
    <div>
      <h4 className="homeCenter">Exerted Grip Strength (lbs)</h4>
      <div>
        <TrendChart data={chartData}></TrendChart>
      </div>
    </div>
  );
};

export default Trends;

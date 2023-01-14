import { DashboardLayoutComponent } from "@syncfusion/ej2-react-layouts";
import Chart from "../components/Chart";
import axios from "axios";
import { useState } from "react";
import TrendChart from "../components/TrendChart";

var userId = 2;

const Trends = () => {
  const [chartData, setChartData] = useState();

  function getData(userid) {
    axios({
      method: "GET",
      url: `http://127.0.0.1:5000/measure/${userid}`,
    })
      .then((response) => {
        console.log("yo");
        const res = response.data;
        var result = [];
        for (const d of res.data) {
          result.push({
            date: d.date,
            output_left: d.output_left,
            output_right: d.output_right,
          });
        }
        setChartData(result);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }

  getData(userId);

  return (
    <div>
      <h4 class="homeCenter">Exerted Grip Strength (lbs)</h4>
      <div>
        <TrendChart data={chartData}></TrendChart>
      </div>
    </div>
  );
};

<section className="section"></section>;

export default Trends;

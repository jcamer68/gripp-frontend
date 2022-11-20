import { DashboardLayoutComponent } from "@syncfusion/ej2-react-layouts";
import Card from "../components/Card";
import Chart from "../components/Chart";
import axios from "axios";
import { useEffect, useState } from "react";

var uid = 1;

function getData(userid) {
  axios({
    method: "GET",
    url: `http://127.0.0.1:5000/measure/${userid}`,
  })
    .then((response) => {
      const res = response.data;
      var result = [];
      for (const d of res.data) {
        result.push({
          date: d.date,
          output_left: d.output_left,
          output_right: d.output_right,
        });
      }
      console.log(result);
      return result;
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    });
}

const Home = () => {
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    setChartData(getData(uid));
  });

  const cellSpacing = [5, 5];
  return (
    <div>
      <div className="control-section">
        <DashboardLayoutComponent
          id="defaultLayout"
          cellSpacing={cellSpacing}
          allowResizing={true}
          columns={5}
        >
          <div
            id="one"
            className="e-panel"
            data-row="0"
            data-col="0"
            data-sizex="2"
            data-sizey="2"
          >
            <span id="close" className="e-template-icon e-clear-icon" />
            <div className="e-panel-container">
              <Chart
                data={getData(uid)}
                name="Output"
                xname="date"
                yname="output_left"
              ></Chart>
            </div>
          </div>
          <div
            id="two"
            className="e-panel"
            data-row="0"
            data-col="2"
            data-sizex="1"
            data-sizey="1"
          >
            <span id="close" className="e-template-icon e-clear-icon" />
            <div className="e-panel-container">
              <Card></Card>
            </div>
          </div>
          <div
            id="three"
            className="e-panel"
            data-row="0"
            data-col="3"
            data-sizex="1"
            data-sizey="1"
          >
            <span id="close" className="e-template-icon e-clear-icon" />
            <div className="e-panel-container">
              <Card></Card>
            </div>
          </div>
          <div
            id="four"
            className="e-panel"
            data-row="1"
            data-col="2"
            data-sizex="2"
            data-sizey="1"
          >
            <span id="close" className="e-template-icon e-clear-icon" />
            <div className="e-panel-container">
              <div className="text-align">3</div>
            </div>
          </div>
        </DashboardLayoutComponent>
      </div>
    </div>
  );
};

<section className="section"></section>;

export default Home;

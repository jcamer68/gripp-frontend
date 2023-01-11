import { DashboardLayoutComponent } from "@syncfusion/ej2-react-layouts";
import Card from "../components/Card";
import Chart from "../components/Chart";
import axios from "axios";
import { useState } from "react";
import ReadData from "./ReadData";

var uid = 2;

const Trends = () => {
  const [chartData, setChartData] = useState();
  const [leftPercentile, setLeftPercentile] = useState();
  const [rightPercentile, setRightPercentile] = useState();
  const [recentLeft, setRecentLeft] = useState();
  const [recentRight, setRecentRight] = useState();
  const [rules, setRules] = useState();

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

  function getRules(measureid) {
    axios({
      method: "GET",
      url: `http://127.0.0.1:5000/measure/rules/${measureid}`,
    })
      .then((response) => {
        const res = response.data;
        setRules(res.data.risks);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }

  function getPercentile(userid) {
    axios({
      method: "GET",
      url: `http://127.0.0.1:5000/user/${userid}`,
    })
      .then((response) => {
        const res = response.data;
        var sex = res.data.sex;
        var age = res.data.age;
        axios({
          method: "GET",
          url: `http://127.0.0.1:5000/measure/percentile?sex=${sex}&age=${age}`,
        })
          .then((response) => {
            const res = response.data;
            var left = [];
            var right = [];
            for (const r of res.data) {
              left.push(r[0]);
              right.push(r[1]);
            }
            left.sort(function (a, b) {
              return Number(a) - Number(b);
            });
            right.sort(function (a, b) {
              return Number(a) - Number(b);
            });

            axios({
              method: "GET",
              url: `http://127.0.0.1:5000/measure/${userid}`,
            })
              .then((response) => {
                const res = response.data;

                var recent_left = res.data[res.data.length - 1].output_left;
                setRecentLeft(recent_left);
                var recent_right = res.data[res.data.length - 1].output_right;
                setRecentRight(recent_right);

                var curr = 0;
                while (left[curr] < recent_left) {
                  curr += 1;
                }

                var percentile_left = (curr / left.length) * 100;

                var curr = 0;
                while (right[curr] < recent_right) {
                  curr += 1;
                }

                var percentile_right = (curr / right.length) * 100;

                setLeftPercentile(Math.round(percentile_left));
                setRightPercentile(Math.round(percentile_right));
              })
              .catch((error) => {
                if (error.response) {
                  console.log(error.response);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                }
              });
          })
          .catch((error) => {
            if (error.response) {
              console.log(error.response);
              console.log(error.response.status);
              console.log(error.response.headers);
            }
          });
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }

  getData(uid);
  getPercentile(uid);
  getRules(2);

  const cellSpacing = [5, 5];
  return (
    <div>
      <h4 class="homeCenter">Exerted Grip Strength (lbs)</h4>
      <div className="control-section">
        <DashboardLayoutComponent
          id="defaultLayout"
          cellSpacing={cellSpacing}
          allowResizing={false}
          columns={5}
        >
          <div
            id="one"
            className="e-panel"
            data-row="1"
            data-col="0"
            data-sizex="5"
            data-sizey="2"
          >
            <span id="close" className="e-template-icon e-clear-icon" />
            <div className="e-panel-container">
              <Chart
                data={chartData}
                name="Output"
                xname="date"
                yname="output_left"
              ></Chart>
            </div>
          </div>
        </DashboardLayoutComponent>
      </div>
    </div>
  );
};

<section className="section"></section>;

export default Trends;

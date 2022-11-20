import { DashboardLayoutComponent } from "@syncfusion/ej2-react-layouts";
import Card from "../components/Card";
import Chart from "../components/Chart";
import axios from "axios";
import { useEffect, useState } from "react";
import ReadData from "./ReadData";

var uid = 2;

const Home = () => {
  const [chartData, setChartData] = useState();
  const [leftPercentile, setLeftPercentile] = useState();
  const [rightPercentile, setRightPercentile] = useState();
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
        setChartData(result)
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
        setRules(res.data.risks)
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
            var left = []
            var right = []
            for (const r of res.data) {
              left.push(r[0])
              right.push(r[1])
            }
            left.sort(function(a, b){return Number(a)-Number(b)})
            right.sort(function(a, b){return Number(a)-Number(b)})

            axios({
              method: "GET",
              url: `http://127.0.0.1:5000/measure/${userid}`,
            })
              .then((response) => {
                const res = response.data;

                var recent_left = res.data[res.data.length - 1].output_left;
                var recent_right = res.data[res.data.length - 1].output_right;

                var curr = 0;
                while (left[curr] < recent_left) {
                  curr += 1;
                }

                var percentile_left = (curr / left.length) * 100

                var curr = 0;
                while (right[curr] < recent_right) {
                  curr += 1;
                }

                var percentile_right = (curr / right.length) * 100

                setLeftPercentile(Math.round(percentile_left))
                setRightPercentile(Math.round(percentile_right))

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

  getData(uid)
  getPercentile(uid)
  getRules(2)

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
          <div
            id="two"
            className="e-panel"
            data-row="0"
            data-col="0"
            data-sizex="1"
            data-sizey="1"
          >
            <span id="close" className="e-template-icon e-clear-icon" />
            <div className="e-panel-container">
              <Card name="Left Percentile" stat={leftPercentile}></Card>
            </div>
          </div>
          <div
            id="three"
            className="e-panel"
            data-row="0"
            data-col="1"
            data-sizex="1"
            data-sizey="1"
          >
            <span id="close" className="e-template-icon e-clear-icon" />
            <div className="e-panel-container">
              <Card name="Right Percentile" stat={rightPercentile}></Card>
            </div>
          </div>
          <div
            id="four"
            className="e-panel"
            data-row="0"
            data-col="2"
            data-sizex="2"
            data-sizey="1"
          >
            <span id="close" className="e-template-icon e-clear-icon" />
            <div className="e-panel-container">
              <b>
                Danger Zones:
              </b>
              <div>
                {JSON.stringify(rules ? rules[0].name : "")}
              </div>
            </div>
          </div>
          <div
            id="five"
            className="e-panel"
            data-row="0"
            data-col="4"
            data-sizex="1"
            data-sizey="1"
          >
            <span id="close" className="e-template-icon e-clear-icon" />
            <div className="e-panel-container">
              <ReadData></ReadData>
            </div>
          </div>
        </DashboardLayoutComponent>
      </div>
    </div>
  );
};

<section className="section"></section>;

export default Home;

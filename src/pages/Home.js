import Card from "../components/Card";
import axios from "axios";
import { useState, useEffect } from "react";
import ReadData from "./ReadData";
import "../App.css";
import React from "react";
import { Box } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

const Home = () => {
  const uid = 2;

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
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }

  // function getRules(measureid) {
  //   axios({
  //     method: "GET",
  //     url: `http://127.0.0.1:5000/measure/rules/${measureid}`,
  //   })
  //     .then((response) => {
  //       const res = response.data;
  //       setRules(res.data.risks);
  //     })
  //     .catch((error) => {
  //       if (error.response) {
  //         console.log(error.response);
  //         console.log(error.response.status);
  //         console.log(error.response.headers);
  //       }
  //     });
  // }

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
        console.log(res);
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

  useEffect(() => {
    getPercentile(uid);
  }, []);

  const cellSpacing = [5, 5];

  return (
    <>
      <Box bg="#FBBA9C" w="100%" p={4} h="200" borderRadius="20">
        <Heading size="lg" align="middle" mt={"30"} mb={"25"}>
          Good Morning, Myles!
        </Heading>
        <Box bg="white" w="100%" p={4} color="#3D4857" borderRadius="20">
          <Heading size="md" align="middle" text>
            Start your day by measuring your grip strength
          </Heading>
        </Box>
      </Box>

      <div>
        <Heading size="lg" color="#3D4857" mt="12" mb="4">
          Your Latest Activities
        </Heading>

        <Box bg={"green.100"} p="20">
          <Card name="Right Percentile" stat={rightPercentile}></Card>
        </Box>

        <Box bg={"blue.100"} p="20">
          <Card name="Left Percentile" stat={leftPercentile}></Card>
        </Box>

        <Box bg={"red.100"} p="20">
          <ReadData
            onrun={() => getData(uid)}
            recent_left={recentLeft}
            recent_right={recentRight}
          ></ReadData>
        </Box>

        {/* <Box>
          {" "}
          <div style={{ fontSize: "30px" }}>
            {JSON.stringify(rules ? rules[0].name : "")}
          </div>
        </Box> */}
      </div>
    </>
  );
};

<section className="section"></section>;

export default Home;

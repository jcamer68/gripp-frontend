import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";

var uid = 2;

const ReadData = ({ onrun, recent_left, recent_right }) => {
  const [leftHand, setLeftHand] = useState();
  const [rightHand, setRightHand] = useState();
  const [status, setStatus] = useState("");

  function calibrate() {
    axios({
      method: "POST",
      url: `http://127.0.0.1:5000/measure/read/2`,
    })
      .then((response) => {
        console.log("Calibrated");
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }

  function readData(hand) {
    axios({
      method: "POST",
      url: `http://127.0.0.1:5000/measure/read/1`,
    })
      .then((response) => {
        const res = response.data;
        if (hand == "left") {
          setLeftHand(res.data);
        } else {
          setRightHand(res.data);
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

  function publish(userid) {
    axios({
      method: "POST",
      url: `http://127.0.0.1:5000/measure/quantitiative`,
      data: {
        userId: userid,
        date: "2022-11-20",
        output_left: Math.round(leftHand),
        output_right: Math.round(rightHand),
      },
    })
      .then((response) => {
        console.log(response);
        setStatus("Success!");
        onrun();
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }

  return (
    <>
      <div>
        <Button colorScheme="blue" onClick={() => readData("left")} m="5">
          Left Hand
        </Button>
        <div style={{ fontSize: "30px" }}>
          {leftHand}{" "}
          <span style={{ fontSize: "15px" }}>
            {recent_left && leftHand
              ? Math.round(((leftHand - recent_left) / recent_left) * 100) +
                "% change"
              : ""}
          </span>
        </div>
        <Button colorScheme="blue" onClick={() => readData("right")} m="5">
          Right Hand
        </Button>

        <div style={{ fontSize: "30px" }}>
          {rightHand}{" "}
          <span style={{ fontSize: "15px" }}>
            {recent_right && rightHand
              ? Math.round(((rightHand - recent_right) / recent_right) * 100) +
                "% change"
              : ""}
          </span>
        </div>
        <Button colorScheme="blue" onClick={() => publish(uid)} m="5">
          Publish
        </Button>
        <Button colorScheme="blue" onClick={() => calibrate()} m="5">
          Calibrate
        </Button>

        <div>{status}</div>
      </div>
    </>
  );
};

export default ReadData;

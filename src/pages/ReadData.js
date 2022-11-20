import React from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from 'react';

var uid = 2;

const ReadData = () => {
    const [leftHand, setLeftHand] = useState()
    const [rightHand, setRightHand] = useState()
    const [status, setStatus] = useState("")

    function readData(hand) {
        axios({
            method: "POST",
            url: `http://127.0.0.1:5000/measure/read/1`,
        })
            .then((response) => {
                const res = response.data;
                if (hand == "left") {
                    setLeftHand(res.data)
                } else {
                    setRightHand(res.data)
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
                "userId": userid,
                "date": "2022-11-20",
                "output_left": Math.round(leftHand),
                "output_right": Math.round(rightHand)
            }
        })
            .then((response) => {
                console.log(response)
                setStatus("Success!")
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
        <div>
            <button onClick={() => readData('left')}>Left Hand</button>
            <button onClick={() => readData('right')}>Right Hand</button>
            <button onClick={() => publish(uid)}>Publish</button>
            <div>
                {leftHand}
            </div>
            <div>
                {rightHand}
            </div>
            <div>
                {status}
            </div>
        </div>
    );
};

export default ReadData;

import React from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from 'react';


const ReadData = () => {
    const [leftHand, setLeftHand] = useState()
    const [rightHand, setRightHand] = useState()

    function readData(hand) {
        axios({
            method: "POST",
            url: `http://127.0.0.1:5000/measure/read/1`,
        })
            .then((response) => {
                console.log(response)
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

    return (
        <div>
            <button onClick={() => readData('left')}>Left Hand</button>
            <button onClick={() => readData('right')}>Right Hand</button>
            {leftHand}{rightHand}
        </div>
    );
};

export default ReadData;

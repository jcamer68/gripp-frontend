import { useState } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Community from "./pages/Community";
import Home from "./pages/Home";
import Trends from "./pages/Trends";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";
import Card from "./components/Card";

function App() {
  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="trends" element={<Trends />}></Route>
            <Route path="community" element={<Community />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </section>
  );

  // // new line start
  // const [profileData, setProfileData] = useState(null);

  // function getData() {
  //   axios({
  //     method: "GET",
  //     url: "http://127.0.0.1:5000/user/1",
  //   })
  //     .then((response) => {
  //       const res = response.data;
  //       console.log(response);
  //       console.log("hi");
  //       console.log(res);
  //       setProfileData({
  //         profile_name: res.data.name,
  //         about_me: res.data.age,
  //       });
  //     })
  //     .catch((error) => {
  //       if (error.response) {
  //         console.log(error.response);
  //         console.log(error.response.status);
  //         console.log(error.response.headers);
  //       }
  //     });
  // }
  // //end of new line

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>

  //       {/* new line start*/}
  //       <p>To get your profile details: </p>
  //       <button onClick={getData}>Click me</button>
  //       {profileData && (
  //         <div>
  //           <p>Profile name: {profileData.profile_name}</p>
  //           <p>About me: {profileData.about_me}</p>
  //         </div>
  //       )}
  //       {/* end of new line */}
  //     </header>
  //   </div>
  // );
}

export default App;

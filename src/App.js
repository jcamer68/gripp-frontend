import React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Community from "./pages/Community";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Trends from "./pages/Trends";
import PageTemplate from "./pages/PageTemplate";
import Error from "./pages/Error";

import ReadData from "./pages/ReadData";
import { createContext, useContext } from 'react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <PageTemplate ChildElement={Home} name="home" />,
  },
  {
    path: "/trends",
    element: <PageTemplate ChildElement={Trends} name="trends" />,
  },
]);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;

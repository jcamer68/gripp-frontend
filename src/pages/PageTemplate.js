import React from "react";

import { Grid, GridItem } from "@chakra-ui/react";

import Sidebar from "../components/Sidebar";

function PageTemplate({ ChildElement, name }) {
  return (
    <Grid h="100vh" templateColumns="repeat(12, 1fr)">
      <GridItem colSpan={2}>
        <Sidebar name={name} />
      </GridItem>
      <GridItem colSpan={10}>
        <ChildElement />
      </GridItem>
    </Grid>
  );
}

export default PageTemplate;

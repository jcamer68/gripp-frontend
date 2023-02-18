import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

function PageTemplate({ ChildElement, name }) {
  return (
    <Grid h="100vh" templateColumns="repeat(12, 1fr)" bg={"#FBFCFD"}>
      <GridItem
        colSpan={2}
        borderRight="1px"
        borderColor="gray.200"
        bg={"white"}
      >
        <Sidebar name={name} />
      </GridItem>
      <GridItem colSpan={10} ml="12" mr="12" mt="4">
        <ChildElement />
      </GridItem>
    </Grid>
  );
}

export default PageTemplate;

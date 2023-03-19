import React, { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

import { useState, useEffect } from "react";
import { auth, db } from '../firebase';
import { doc, getDoc } from "firebase/firestore"; 

function PageTemplate({ ChildElement, name }) {

  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();

  useEffect(async () => {
    const unsub = auth.onAuthStateChanged((authObj) => {
      unsub();
      if (authObj) {
        async function getUserName() {
          const firebaseid = authObj.uid;
          const docSnap = await getDoc(doc(db, "users", firebaseid));
          setFirstname(docSnap.data().firstname);
          setLastname(docSnap.data().lastname);
        }
        getUserName();
      }
    });
  }, []);

  return (
    <Grid h="100vh" templateColumns="repeat(12, 1fr)" bg={"#FBFCFD"}>
      <GridItem
        colSpan={2}
        borderRight="1px"
        borderColor="gray.200"
        bg={"white"}
      >
        <Sidebar name={name} firstname={firstname} lastname={lastname} />
      </GridItem>
      <GridItem colSpan={10} ml="12" mr="12" mt="4">
        <ChildElement />
      </GridItem>
    </Grid>
  );
}

export default PageTemplate;

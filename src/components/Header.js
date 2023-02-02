import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Image, Text, Link as ChakraLink } from "@chakra-ui/react";
import grippLogo from "../images/grippLogo.png";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <Box bg="blue.500" p={5}>
      <Flex maxW="1200px" mx="auto" alignItems="center">
        <Box mr="auto">
          <ChakraLink
            color="white"
            mr={5}
            as={Link}
            to="/"
            style={{
              fontWeight: location.pathname === "/" ? "bold" : "normal",
            }}
          >
            Home
          </ChakraLink>
          <ChakraLink
            color="white"
            mr={5}
            as={Link}
            to="/trends"
            style={{
              fontWeight: location.pathname === "/trends" ? "bold" : "normal",
            }}
          >
            Trends
          </ChakraLink>
          <ChakraLink
            color="white"
            mr={5}
            as={Link}
            to="/community"
            style={{
              fontWeight:
                location.pathname === "/community" ? "bold" : "normal",
            }}
          >
            Community
          </ChakraLink>
        </Box>
        <Image src={grippLogo} alt="Gripp Logo" style={{ height: "50px" }} />
      </Flex>
    </Box>
  );
}
export default Header;

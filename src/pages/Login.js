import React from "react";
import grippLogo from "../images/grippLogo.png";
import background from "../images/gym.jpg";
import {
  Grid,
  GridItem,
  Image,
  Hide,
  Flex,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Button,
  Link,
} from "@chakra-ui/react";
import { LockIcon, EmailIcon } from "@chakra-ui/icons";

function Login() {
  return (
    <Grid h="100vh" templateColumns="repeat(12, 1fr)">
      <GridItem colSpan={["12", "4"]}>
        <Flex direction="column" mt="10" mx="20">
          <Flex mb="">
            <Image
              src={grippLogo}
              alt="Gripp Logo"
              style={{ height: "100%" }}
            />
          </Flex>
          <Text mb="5">
            Real-time information on your grip strength and corresponding
            fitness/health implications
          </Text>
          <form>
            <Stack spacing={4}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<EmailIcon color="gray.500" />}
                />
                <Input type="email" placeholder="Email" />
              </InputGroup>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<LockIcon color="gray.500" />}
                />
                <Input type="password" placeholder="Password" />
              </InputGroup>
              <Link textAlign="right" fontSize="sm" href="/">
                Forgot Password?
              </Link>
              <Link href="/home">
                <Button w="100%" colorScheme="blue">
                  Log In
                </Button>
              </Link>
            </Stack>
          </form>
        </Flex>
      </GridItem>
      <GridItem colSpan={["12", "8"]}>
        <Hide below="sm">
          <Image src={background} alt="Gripp Logo" objectFit="cover" h="100%" />
        </Hide>
      </GridItem>
    </Grid>
  );
}

export default Login;

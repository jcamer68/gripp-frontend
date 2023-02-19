import grippLogo from "../images/grippLogo.png";
import background from "../images/gym.jpg";
import React, {
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
  Divider,
  IconButton,
} from "@chakra-ui/react";
import { LockIcon, EmailIcon } from "@chakra-ui/icons";

import { FaGoogle } from "react-icons/fa";

function Login() {
  return (
    <Grid h="100vh" templateColumns="repeat(12, 1fr)">
      <GridItem colSpan={["12", "4"]}>
        <Flex direction="column" mx="20">
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
              <Divider
                mt={"100"}
                orientation="horizontal"
                borderWidth="1px"
                borderColor="gray.200"
              />
              <Link href="/home">
                <Button w="100%" colorScheme="blue">
                  Sign Up With Email
                </Button>
              </Link>
              <Link href="/home" bg={"gray.100"}>
                <Stack direction={["column", "row"]} spacing="24px">
                  <Button w="100%" colorScheme="white" color={"black"}>
                    <IconButton
                      variant="outline"
                      icon={<FaGoogle />}
                      mr={"3"}
                    ></IconButton>
                    Sign In with Google
                  </Button>
                </Stack>
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

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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { LockIcon, EmailIcon } from "@chakra-ui/icons";
import { auth, db } from '../firebase';
import { useState, useContext } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { NavLink, useNavigate } from 'react-router-dom'
import { doc, setDoc, getDoc } from "firebase/firestore"; 

import { FaGoogle } from "react-icons/fa";

function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/home")
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
    });
  
  }

  const onSignup = async (e) => {
    e.preventDefault()

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          var uid = user.uid;
          setDoc(doc(db, "users", uid), {
            firstname: firstname,
            lastname: lastname
          });
          onClose()
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
      });
  }

  useContext({
    firstname: firstname,
    lastname: lastname
  });

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
                <Input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
              </InputGroup>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<LockIcon color="gray.500" />}
                />
                <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
              </InputGroup>
              <Link textAlign="right" fontSize="sm" href="/">
                Forgot Password?
              </Link>
              <Link href="/home">
                <Button w="100%" colorScheme="blue" onClick={onLogin} >
                  Log In
                </Button>
              </Link>
              <Divider
                mt={"100"}
                orientation="horizontal"
                borderWidth="1px"
                borderColor="gray.200"
              />

              <Button w="100%" colorScheme="blue" onClick={onOpen}>
                Sign Up With Email
              </Button>

              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>User Creation</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <FormControl>
                      <FormLabel>Email address</FormLabel>
                      <Input type="email" onChange={(e) => setEmail(e.target.value)} />
                      <FormHelperText>
                        We'll never share your email.
                      </FormHelperText>
                      <FormLabel>Password</FormLabel>
                      <Input type="password" onChange={(e) => setPassword(e.target.value)} />
                      <FormLabel>First name</FormLabel>
                      <Input onChange={(e) => setFirstname(e.target.value)} />
                      <FormLabel>Last name</FormLabel>
                      <Input onChange={(e) => setLastname(e.target.value)} />

                    </FormControl>
                  </ModalBody>

                  <ModalFooter>
                    <Button variant="ghost" mr={3} onClick={onClose}>
                      Close
                    </Button>
                    <Button colorScheme="blue" onClick={onSignup}>Submit</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>

              <Link href="/home" bg={"gray.100"}>
                <Button
                  leftIcon={<FaGoogle />}
                  w="100%"
                  colorScheme="white"
                  color={"black"}
                >
                  Sign In with Google
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

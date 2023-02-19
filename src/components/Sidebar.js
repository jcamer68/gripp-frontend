import React from "react";

import {
  Flex,
  Stack,
  Avatar,
  Text,
  Divider,
  Button,
  Icon,
  Link,
} from "@chakra-ui/react";
import { FaHome, FaChartLine } from "react-icons/fa";
import Settings from "../components/Settings";

const topButtons = [
  { id: "home", label: "Home", icon: FaHome },
  { id: "trends", label: "Trends", icon: FaChartLine },
];

function ActiveButton({ id, icon, label }) {
  return (
    <Link href={`/${id}`}>
      <Button
        w="100%"
        leftIcon={<Icon as={icon} me={1} />}
        color="blue.600"
        bg="blue.100"
        variant="ghost"
        justifyContent="flex-start"
        fontWeight="bold"
        _hover={{ bg: "#E3F2FD" }}
      >
        {label}
      </Button>
    </Link>
  );
}

function NonActiveButton({ id, icon, label }) {
  return (
    <Link href={`/${id}`}>
      <Button
        w="100%"
        leftIcon={<Icon as={icon} me={1} />}
        colorScheme="blue"
        variant="ghost"
        justifyContent="flex-start"
      >
        {label}
      </Button>
    </Link>
  );
}

function Sidebar({ name }) {
  const buttonItems = topButtons.map(({ id, label, icon }) => {
    console.log(name, id, name === id);
    return id === name ? (
      <ActiveButton key={id} id={id} label={label} icon={icon} />
    ) : (
      <NonActiveButton key={id} id={id} label={label} icon={icon} />
    );
  });

  return (
    <Flex direction="column" mt="5">
      <Avatar
        name="John Cameron"
        size="xl"
        src="https://bit.ly/dan-abramov"
        mb="2"
        mx="4"
      />
      <Text fontSize="3xl" as="b" mx="4">
        Myles MacDonald
      </Text>
      <Text fontSize="sm" color="blue.600" as="b" mx="4">
        REGULAR USER
      </Text>
      <Divider
        orientation="horizontal"
        mt="3"
        borderWidth="1px"
        borderColor="gray.200"
      />

      <Stack spacing={2} mt={2} mx="4">
        {buttonItems}
      </Stack>

      <Divider
        orientation="horizontal"
        mt="175%"
        borderWidth="1px"
        borderColor="gray.200"
      />
      <Settings />
    </Flex>
  );
}

export default Sidebar;

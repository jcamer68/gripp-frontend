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
import {
  FaChalkboardTeacher,
  FaUserEdit,
  FaUserPlus,
  FaWrench,
} from "react-icons/fa";

const buttons = [
  { id: "home", label: "Home", icon: FaChalkboardTeacher },
  { id: "trends", label: "Trends", icon: FaUserEdit },
];

function ActiveButton({ id, icon, label }) {
  return (
    <Link href={`/${id}`}>
      <Button
        w="100%"
        leftIcon={<Icon as={icon} me={1} />}
        color="blue.600"
        bg="blue.100"
        variant="solid"
        justifyContent="flex-start"
        fontWeight="bold"
        _hover={{ bg: "#D6BCFA" }}
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
        variant="outline"
        justifyContent="flex-start"
      >
        {label}
      </Button>
    </Link>
  );
}

function Sidebar({ name }) {
  const buttonItems = buttons.map(({ id, label, icon }) => {
    console.log(name, id, name === id);
    return id === name ? (
      <ActiveButton key={id} id={id} label={label} />
    ) : (
      <NonActiveButton key={id} id={id} label={label} icon={icon} />
    );
  });

  return (
    <Flex direction="column" mt="5" mx="5">
      <Avatar
        name="John Cameron"
        size="xl"
        src="https://bit.ly/dan-abramov"
        mb="2"
      />
      <Text fontSize="3xl" as="b">
        Myles MacDonald
      </Text>
      <Text fontSize="sm" color="blue.600" as="b">
        REGULAR USER
      </Text>
      <Divider orientation="horizontal" mt="3" borderWidth="2px" />
      <Stack spacing={2} mt={2}>
        {buttonItems}
      </Stack>
    </Flex>
  );
}

export default Sidebar;

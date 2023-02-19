import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Icon,
} from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { FaSlidersH } from "react-icons/fa";

import React from "react";

function Settings() {
  const [value, setValue] = React.useState("1");

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        w="100%"
        mt={"3"}
        leftIcon={<Icon as={FaSlidersH} me={1} />}
        colorScheme="gray"
        variant="ghost"
        justifyContent="flex-start"
      >
        Settings
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Settings</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Testing</ModalBody>

          <ModalFooter>
            <ButtonGroup variant="outline" spacing="6">
              <Button colorScheme="blue" mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Settings;

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Icon,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { BiPencil } from "react-icons/bi";
import { FiArrowRight } from "react-icons/fi";
import React from "react";
import { TextField } from "@mui/material";

const ProfileCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex bg={"white"} p={"4"} alignItems={"center"} gap={5} mb={4}>
      <Image src='https://www.nykaa.com/assets/desktop/images/my_account/default_avatar.svg' />
      <VStack alignItems={"flex-start"} w={"100%"}>
        <HStack alignItems={"center"} alignSelf={"flex-end"} onClick={onOpen}>
          <Icon as={BiPencil} />
          <Heading size={"sm"} fontWeight={"normal"}>
            Edit
          </Heading>
        </HStack>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
              <VStack m={4}>
                <Image src='https://www.nykaa.com/assets/desktop/images/my_account/default_avatar.svg' />
                <FormControl>
                  <FormLabel>Full Name</FormLabel>
                  <Input placeholder='Full Name' />
                </FormControl>
                <FormControl isDisabled>
                  <Input placeholder='Phone Number' />
                </FormControl>
                <FormControl isDisabled>
                  <FormLabel>Email</FormLabel>
                  <Input value={"email@email.com"} />
                </FormControl>
                <FormControl>
                  <FormLabel>DOB</FormLabel>
                  <Input type={"date"} />
                </FormControl>
              </VStack>
            </ModalBody>

            <ModalFooter>
              <Button variant='ghost' onClick={onClose}>
                Close
              </Button>
              <Button colorScheme='blue' mr={3}>
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Heading size={"md"}>Full Name</Heading>
        <Text>
          <span style={{ fontWeight: "600" }}>Email:</span> email@email.com{" "}
          <span
            style={{
              fontWeight: "bold",
              color: "green",
              fontSize: "0.65rem",
              border: "1px solid green",
              borderRadius: "50px",
              padding: "2px",
            }}
          >
            Verified
          </span>
        </Text>
        <Text color={"#fc2779"} display={"flex"} alignItems={"center"} gap={2}>
          Add mobile number
          <Icon as={FiArrowRight} />
        </Text>
      </VStack>
    </Flex>
  );
};

export default ProfileCard;

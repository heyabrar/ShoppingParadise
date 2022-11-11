import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Select,
  Spacer,
  Textarea,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { AiFillHome, AiOutlineRight } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import AddressCard from "./AddressCard";

const MyAddresses = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex bg={"white"} p={"4"} alignItems={"center"} gap={5}>
      <VStack align={"flex-start"} w={"full"}>
        <Flex align={"center"} justify={"space-between"} w={"full"}>
          <Flex gap={2} align={"center"}>
            <Icon as={AiFillHome} h={7} w={7} />
            <Heading size={"md"}>My Addresses</Heading>
          </Flex>
          <Spacer />

          <Flex
            alignItems={"center"}
            gap={1}
            cursor={"pointer"}
            onClick={onOpen}
          >
            <Icon as={BiPencil} />
            <Heading size={"sm"} fontWeight={"normal"}>
              Add New Address
            </Heading>
          </Flex>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <ModalBody>
                <VStack m={4}>
                  <FormControl isRequired>
                    <FormLabel>Select Country</FormLabel>
                    <Select>
                      <option value='India'>India</option>
                      <option value='Nepal'>Nepal</option>
                    </Select>
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input placeholder='Name' />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Mobile Number</FormLabel>
                    <InputGroup>
                      <InputLeftAddon children='+91' />
                      <Input type='tel' placeholder='Mobile Number' />
                    </InputGroup>
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Postal Code</FormLabel>
                    <Input placeholder='Postal Code' />
                  </FormControl>
                  <FormControl>
                    <Textarea placeholder='Address' />
                  </FormControl>
                  <Checkbox>Use this as my default Shipping Address</Checkbox>
                </VStack>
              </ModalBody>

              <ModalFooter>
                <Button
                  colorScheme='blue'
                  mr={3}
                  w={"full"}
                  rightIcon={<AiOutlineRight />}
                  bg={"#fc2779"}
                  _hover={{}}
                >
                  Add Address
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
        <AddressCard />
      </VStack>
    </Flex>
  );
};

export default MyAddresses;

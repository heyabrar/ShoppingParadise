import { Flex, Heading, HStack, Icon, Spacer, VStack } from "@chakra-ui/react";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import AddressCard from "./AddressCard";

const MyAddresses = () => {
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
            //   onClick={onOpen}
          >
            <Icon as={BiPencil} />
            <Heading size={"sm"} fontWeight={"normal"}>
              Add New Address
            </Heading>
          </Flex>
        </Flex>
        <AddressCard />
      </VStack>
    </Flex>
  );
};

export default MyAddresses;

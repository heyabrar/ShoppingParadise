import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BiPencil } from "react-icons/bi";
import { ImBin } from "react-icons/im";

const AddressCard = () => {
  return (
    <Flex boxShadow={"lg"} p={4} maxW={"300px"}>
      <VStack align={"flex-start"}>
        <Box bg={"gray.700"} color={"white"} p={2} fontSize={"md"}>
          CityName
        </Box>
        <Text fontWeight={"semibold"}>Name</Text>
        <Text>Full Address, City - Pincode, State Name</Text>
        <Text fontWeight={"semibold"}>+91-9062344454</Text>
        <HStack
          alignSelf={"self-end"}
          gap={4}
          opacity={0.75}
          cursor={"pointer"}
        >
          <Flex align={"center"} gap={1}>
            <Icon as={BiPencil} />
            <Heading size={"sm"} fontWeight={"normal"}>
              Edit
            </Heading>
          </Flex>
          <Flex align={"center"} gap={1}>
            <Icon as={ImBin} />
            <Heading size={"sm"} fontWeight={"normal"}>
              Remove
            </Heading>
          </Flex>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default AddressCard;

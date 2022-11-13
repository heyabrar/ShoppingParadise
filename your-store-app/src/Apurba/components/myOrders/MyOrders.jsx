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
import { IoMdArrowBack } from "react-icons/io";
import { BsFillCartFill } from "react-icons/bs";
import SecurityAlert from "./SecurityAlert";
import { useNavigate } from "react-router-dom";

const MyOrders = () => {
  const navigate = useNavigate();
  return (
    <Flex alignItems={"center"} gap={5} mb={4}>
      <VStack bg={"white"} w={"full"} align={"flex-start"}>
        <HStack
          borderBottom={"1px solid rgba(0,19,37,.16)"}
          p={"15px"}
          mb={"15px"}
          align={"center"}
          w={"full"}
        >
          <Icon as={IoMdArrowBack} h={6} w={6} cursor={"pointer"} />
          <Heading size={"md"}>My Orders</Heading>
        </HStack>
        <SecurityAlert />
        <VStack w={"full"}>
          <Icon as={BsFillCartFill} opacity={".10"} h={40} w={40} />
          <Text fontWeight={"semibold"} py={"4"}>
            No Recent Orders
          </Text>
          <Text
            fontWeight={"semibold"}
            pb={"4"}
            cursor={"pointer"}
            color={"#fc2779"}
            onClick={() => navigate("/")}
          >
            Start Shopping
          </Text>
        </VStack>
      </VStack>
    </Flex>
  );
};

export default MyOrders;

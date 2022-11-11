import { Box, Heading, HStack, Icon } from "@chakra-ui/react";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";

const Order = () => {
  return (
    <Box bg={"white"}>
      <HStack
        borderBottom={"1px solid rgba(0,19,37,.16)"}
        p={"15px"}
        mb={"15px"}
      >
        <Icon as={IoMdArrowBack} />
        <Heading size={"md"}>My Orders</Heading>
      </HStack>
    </Box>
  );
};

export default Order;

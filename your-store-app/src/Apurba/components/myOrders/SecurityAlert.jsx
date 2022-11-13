import { Button, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { FcInfo } from "react-icons/fc";
import { HiOutlineArrowRight } from "react-icons/hi";

const SecurityAlert = () => {
  return (
    <VStack
      alignSelf={"center"}
      w={"95%"}
      p={"4"}
      bg={"rgb(230, 242, 255)"}
      border={"1px solid rgba(222,128,0,.16);"}
      borderRadius={"8px"}
      alignItems={"flex-start"}
    >
      <HStack gap={2}>
        <Icon as={FcInfo} h={8} w={8} color={"red"} />
        <Text>Please verify your phone number for security reasons</Text>
      </HStack>
      <Button
        color={"#fc2779"}
        alignSelf={"flex-end"}
        rightIcon={<HiOutlineArrowRight />}
        variant={"ghost"}
        _hover={{}}
      >
        Add Mobile
      </Button>
    </VStack>
  );
};

export default SecurityAlert;

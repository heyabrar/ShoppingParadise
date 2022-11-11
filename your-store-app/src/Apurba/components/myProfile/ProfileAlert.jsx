import {
  Box,
  Button,
  Container,
  HStack,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { AiFillWarning } from "react-icons/ai";
import { HiOutlineArrowRight } from "react-icons/hi";

const ProfileAlert = () => {
  return (
    <VStack
      mb={"4"}
      p={"4"}
      bg={"linear-gradient(0deg,rgba(222,128,0,.08),rgba(222,128,0,.08)),#fff;"}
      border={"1px solid rgba(222,128,0,.16);"}
      borderRadius={"8px"}
      alignItems={"flex-end"}
    >
      <HStack gap={2}>
        <Icon as={AiFillWarning} h={8} w={8} color={"red"} />
        <Text>
          Your phone number is still unverified! For security reasons, we
          recommend you to verify your mobile number now!
        </Text>
      </HStack>
      <Button rightIcon={<HiOutlineArrowRight />} variant={"ghost"} _hover={{}}>
        Add Mobile
      </Button>
    </VStack>
  );
};

export default ProfileAlert;

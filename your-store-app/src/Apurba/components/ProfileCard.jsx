import {
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BiPencil } from "react-icons/bi";
import { FiArrowRight } from "react-icons/fi";
import React from "react";

const ProfileCard = () => {
  return (
    <Flex bg={"white"} p={"4"} alignItems={"center"} gap={5}>
      <Image src='https://www.nykaa.com/assets/desktop/images/my_account/default_avatar.svg' />
      <VStack alignItems={"flex-start"} w={"100%"}>
        <HStack alignItems={"center"} alignSelf={"flex-end"}>
          <Icon as={BiPencil} />
          <Heading size={"sm"} fontWeight={"normal"}>
            Edit
          </Heading>
        </HStack>
        <Heading size={"md"}>Full Name</Heading>
        <Text>
          <span>Email:</span> email@email.com
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

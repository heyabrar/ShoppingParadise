import { Box, Heading, Icon, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { BsFillCreditCardFill } from "react-icons/bs";

const MyPayments = () => {
  return (
    <Box>
      <VStack bg={"white"} w={"full"}>
        <Heading
          borderBottom={"1px solid #ebebeb"}
          p={"4"}
          w={"full"}
          alignSelf={"flex-start"}
          fontSize={"2xl"}
          fontWeight={"semibold"}
        >
          My Saved Payments
        </Heading>
        <VStack w={"full"} textAlign={"center"}>
          <Icon as={BsFillCreditCardFill} opacity={".10"} h={"44"} w={"44"} />
          <Text fontSize={"xl"} opacity={"0.69"} pb={"4"}>
            You haved not saved any of your <br /> payment modes yet.
          </Text>
          <Text fontSize={"xl"} opacity={"0.69"} pb={"8"}>
            After you make a purchase with Cards,
            <br /> UPI or PayTM they will appear here.
          </Text>
        </VStack>
      </VStack>
    </Box>
  );
};

export default MyPayments;

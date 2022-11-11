import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { RiWallet3Fill } from "react-icons/ri";

const MyWallet = () => {
  return (
    <Flex bg={"white"} p={"8"} alignItems={"center"} gap={5} mb={4}>
      <VStack w={"full"} align={"flex-start"}>
        <HStack lineHeight={".69"} mb={8}>
          <Icon as={RiWallet3Fill} color={"#fc2779"} w={10} h={10} mt={2} />
          <Flex flexDir={"column"}>
            <Heading size={"lg"} fontWeight={"medium"}>
              YourStore Wallet
            </Heading>
            <Text>A purse you carry to shop Beauty</Text>
          </Flex>
        </HStack>
        <VStack
          w={"full"}
          align={"flex-start"}
          lineHeight={".79"}
          borderBottom={"1px solid #ebebeb"}
          pb={4}
        >
          <Text>Wallet Balance:</Text>
          <Text color={"#fc2779"} fontSize={"2xl"} fontWeight={"medium"}>
            ₹ 20
          </Text>
        </VStack>
        <HStack
          justify={"space-between"}
          borderBottom={"1px solid #ebebeb"}
          pb={2}
          w={"full"}
        >
          <Text
            fontSize={"md"}
            textTransform={"uppercase"}
            fontWeight={"semibold"}
          >
            REWARD POINTS (2000)
          </Text>
          <Text fontSize={"xl"} fontWeight={"bold"}>
            ₹ 0
          </Text>
        </HStack>
        <HStack
          justify={"space-between"}
          borderBottom={"1px solid #ebebeb"}
          pb={2}
          w={"full"}
        >
          <Text
            fontSize={"md"}
            textTransform={"uppercase"}
            fontWeight={"semibold"}
          >
            YourStore Cash
          </Text>
          <Text color={"#fc2779"} fontSize={"xl"} fontWeight={"bold"}>
            ₹ 20
          </Text>
        </HStack>
        <Box pt={"8"}>
          <Image src='https://www.nykaa.com/media/wysiwyg/NykaaWallet/wallet_footer_banner_3.png' />
        </Box>
      </VStack>
    </Flex>
  );
};

export default MyWallet;

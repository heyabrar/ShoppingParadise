import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Icon,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { BiPencil } from "react-icons/bi";
import { FiArrowRight } from "react-icons/fi";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const ProfileCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, updateUser } = useContext(AuthContext);

  const [currentUser, updateCurrentUser] = useState(user);

  const handleForm = (e) => {
    e.preventDefault();
    updateUser(currentUser);
    onClose();
  };

  const handleNamechange = (e) => {
    // console.log(e.target.value);
    const newName = e.target.value;
    updateCurrentUser((prev) => {
      return {
        ...prev,
        name: newName,
      };
    });
    // console.log(currentUser);
  };

  return (
    <Flex
      bg={"white"}
      p={"4"}
      alignItems={"center"}
      gap={5}
      mb={4}
      direction={["column", "row"]}
    >
      <Image src='https://www.nykaa.com/assets/desktop/images/my_account/default_avatar.svg' />
      <VStack alignItems={"flex-start"} w={"100%"}>
        <HStack
          alignItems={"center"}
          alignSelf={"flex-end"}
          onClick={onOpen}
          cursor={"pointer"}
        >
          <Icon as={BiPencil} />
          <Heading size={"sm"} fontWeight={"normal"}>
            Edit
          </Heading>
        </HStack>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <form onSubmit={handleForm}>
            <ModalContent>
              <ModalCloseButton />
              <ModalBody>
                <VStack m={4}>
                  <Image src='https://www.nykaa.com/assets/desktop/images/my_account/default_avatar.svg' />
                  <FormControl isRequired>
                    <FormLabel>Full Name</FormLabel>
                    <Input
                      value={currentUser.name}
                      onChange={handleNamechange}
                      placeholder={currentUser.name}
                    />
                  </FormControl>
                  <FormControl isDisabled>
                    <Input placeholder='Phone Number' />
                  </FormControl>
                  <FormControl isDisabled>
                    <FormLabel>Email</FormLabel>
                    <Input value={user.email} />
                  </FormControl>
                  <FormControl>
                    <FormLabel>DOB</FormLabel>
                    <Input type={"date"} />
                  </FormControl>
                </VStack>
              </ModalBody>

              <ModalFooter gap={2}>
                <Button variant='ghost' onClick={onClose}>
                  Close
                </Button>
                <Button
                  type='submit'
                  bg={"#fc2779"}
                  mr={3}
                  color={"white"}
                  _hover={{}}
                >
                  Submit
                </Button>
              </ModalFooter>
            </ModalContent>
          </form>
        </Modal>

        <Heading size={"md"}>{user.name}</Heading>
        <Text>
          <span style={{ fontWeight: "600" }}>Email:</span> {user.email}{" "}
          <span
            style={{
              fontWeight: "bold",
              color: "green",
              fontSize: "0.65rem",
              border: "1px solid green",
              borderRadius: "50px",
              padding: "2px",
            }}
          >
            Verified
          </span>
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

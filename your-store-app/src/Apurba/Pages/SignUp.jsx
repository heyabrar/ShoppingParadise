import {
  Box,
  Button,
  Text,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const formik = useFormik({
    initialValues: { name: "", email: "", password: "", isAdmin: false },

    validate: (values) => {
      values.email.split("@")[1] === "yourstore.com"
        ? (values.isAdmin = true)
        : (values.isAdmin = false);

      // console.log(values);
    },

    onSubmit: (values) => {
      //   alert(JSON.stringify(values, null, 2));
      const user = users.filter((user) => user.email === values.email);
      user.length === 0
        ? users.push(values) &&
          localStorage.setItem("users", JSON.stringify(users))
        : alert("Email already exixts");

      // navigate("/login");
    },
  });
  return (
    <Flex bg='gray.100' align='center' justify='center' h='100vh'>
      <Box bg='white' p={6} rounded='md'>
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4} align='flex-start' maxW={"300px"}>
            <Heading size={"xl"}>Sign Up</Heading>
            <Text
              pb={"15px"}
              mb={"15px"}
              borderBottom={"1px solid rgba(0,19,37,.16)"}
            >
              To quickly find your favourites items, saved addresses and
              payments.
            </Text>
            <Text pb={"15px"} mb={"15px"}>
              Register and earn 2000 reward points
            </Text>
            <FormControl isRequired>
              <FormLabel htmlFor='name'>Full Name</FormLabel>
              <Input
                id='name'
                name='name'
                type='name'
                variant='filled'
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor='email'>Email Address</FormLabel>
              <Input
                id='email'
                name='email'
                type='email'
                variant='filled'
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor='password'>Password</FormLabel>
              <Input
                id='password'
                name='password'
                type='password'
                variant='filled'
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </FormControl>

            <Button
              type='submit'
              bgColor={"#fc2779"}
              color={"white"}
              width='full'
              _hover={{
                bgColor: "#fb5293",
                color: "white",
              }}
            >
              Sign Up
            </Button>
            <Text opacity={"0.64"}>
              By continuing, you agree that you have read and accept our{" "}
              <span style={{ textDecoration: "underline" }}>T&Cs</span> and{" "}
              <span style={{ textDecoration: "underline" }}>
                Privacy Policy.
              </span>
            </Text>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
};

export default SignUp;

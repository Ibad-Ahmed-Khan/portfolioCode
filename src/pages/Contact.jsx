import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  useToast,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import useStore from "../Zustand";

const Contact = () => {
  const toast = useToast();
  const [showPassword, setShowPassword] = useState(false);

  // State for controlled components
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handlePasswordToggle = () => setShowPassword(!showPassword);
  const { color } = useStore();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8myjqny",
        "template_lczid9g",
        e.target,
        "jNmaoAfOL34QO0M_H"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast({
            title: "Form Submitted",
            description: "Thank you for contacting us!",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          // Reset state after successful submission
          setName("");
          setEmail("");
          setPassword("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
          toast({
            title: "Error",
            description: "There was an error submitting the form.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 2 }}
    >
      <VStack align="start" justify="center" pt="4rem" spacing={5} minH="100vh">
        <Text
          fontFamily="Anton, sans-serif"
          fontWeight="400"
          color="blue.300"
          textTransform="uppercase"
        >
          Contact
        </Text>
        <Heading
          fontSize="1.1rem"
          fontFamily="Anton, sans-serif"
          fontWeight="400"
          letterSpacing="1px"
        >
          Don't be shy! Hit me up!
        </Heading>

        <Box minW={{ base: "", md: "30rem", lg: "40rem" }}>
          <form onSubmit={handleSubmit}>
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </FormControl>

            <FormControl id="email" isRequired mt={4}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </FormControl>

            <FormControl id="password" isRequired mt={4}>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
                <InputRightElement>
                  <IconButton
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    color={color}
                    bg="transparent"
                    border="none"
                    _hover={{ bg: "transparent" }}
                    borderLeftRadius="none"
                    icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                    onClick={handlePasswordToggle}
                  />
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <FormControl id="message" isRequired mt={4}>
              <FormLabel>Message</FormLabel>
              <Textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here"
              />
            </FormControl>

            <Button
              type="submit"
              color="#fff"
              bg="#63b3ed"
              _hover={{ bg: "#63b3ed" }}
              _active={{ bg: "#4e8ccf" }}
              mt={4}
              w="full"
            >
              Submit
            </Button>
          </form>
        </Box>
      </VStack>
    </motion.div>
  );
};

export default Contact;

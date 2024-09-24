import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  IconButton,
  Img,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
} from "react-icons/fa";
import { SiTailwindcss, SiChakraui } from "react-icons/si";
import { BiCube } from "react-icons/bi";
import HomeImg from "../components/HomeImg";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Courses from "../components/Courses";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 2 }}
    >
      <Box pt="5rem">
        <VStack
          align="start"
          justify="center"
          spacing="20"
          minH="100vh"
          textAlign={{ base: "center", md: "left" }}
        >
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: "6", md: "20" }}
            textTransform="capitalize"
          >
            <VStack
              align={{ base: "center", md: "start" }}
              justify="space-between"
            >
              <Heading
                display="inline-block"
                fontSize={{ base: "2rem", md: "2.5rem" }}
                style={{
                  fontFamily: "Anton, sans-serif",
                  fontWeight: "400",
                  letterSpacing: "1px",
                }}
              >
                Front-End React Developer
                <Flex
                  display="inline"
                  align="center"
                  justify="center"
                  position="relative"
                  top="0.9rem"
                >
                  <Img
                    display="inline"
                    w="4rem"
                    src="https://cdn.vectorstock.com/i/1000v/01/50/waving-hand-icon-gesture-emoji-vector-37870150.avif"
                    alt="Waving Hand Icon"
                  />
                  <Box
                    position="absolute"
                    bottom="0"
                    left="0"
                    right="0"
                    height="1.2rem" // Adjust height to cover the unwanted line
                    backgroundColor="white" // Match this to your background color to hide the line
                  />
                </Flex>
              </Heading>
              <Text
                display="inline-block"
                color="gray"
                zIndex="2"
                fontSize={{ base: "sm", md: "md" }}
              >
                Assalam o Alaikum, I am Ibad Ahmed Khan. A passionate Front-end
                React Developer based in Lahore, Pakistan.
                <Flex
                  display="inline"
                  align="center"
                  justify="center"
                  position="relative"
                  top="0.9rem"
                >
                  <Img
                    display="inline"
                    w="2rem"
                    src="https://cdn.vectorstock.com/i/1000v/28/82/3d-realistic-colorful-balloon-birthday-vector-26952882.avif"
                    alt="Waving Hand Icon"
                  />
                  <Box
                    position="absolute"
                    bottom="0"
                    left="0"
                    right="0"
                    height="1rem" // Adjust height to cover the unwanted line
                    backgroundColor="white" // Match this to your background color to hide the line
                  />
                </Flex>
              </Text>
              <Flex
                w="full"
                align="center"
                justify={{ base: "center", md: "start" }}
                gap="1rem"
                mt="4"
              >
                <Link
                  to="https://www.linkedin.com/in/ibad-ahmed-khan-a98b48289/"
                  isExternal
                >
                  <FaLinkedin fontSize="1.5rem" />
                </Link>
                <Link to="https://github.com/Ibad-Ahmed-Khan" isExternal>
                  <FaGithub fontSize="1.5rem" />
                </Link>
              </Flex>
            </VStack>
            <motion.section
              whileHover={{ scale: 0.8 }}
              transition={{ ease: "easeInOut", duration: 1 }}
            >
              <Flex w="full" h="full" align="center" justify="center">
                <HomeImg />
              </Flex>
            </motion.section>
          </SimpleGrid>
          <Flex
            w="full"
            align="center"
            justify={{ base: "center", md: "start" }}
            gap="1rem"
            direction={{ base: "column", md: "row" }}
          >
            <Text
              style={{
                fontFamily: "Anton, sans-serif",
                fontWeight: "400",
                letterSpacing: "1px",
              }}
              fontSize={{ base: "lg", md: "xl" }}
            >
              Tech Stack
            </Text>
            <Box w="2px" borderRadius="50%" h="1rem" bg="#000" />
            <Flex gap="2rem" wrap="wrap" justify="center">
              <FaHtml5 fontSize="2rem" color="#E34F26" />
              <FaCss3Alt fontSize="2rem" color="#1572B6" />
              <FaJsSquare fontSize="2rem" color="#F7DF1E" />
              <FaReact fontSize="2rem" color="#61DAFB" />
              <SiTailwindcss fontSize="2rem" color="#38B2AC" />
              <SiChakraui fontSize="2rem" color="#319795" />
            </Flex>
          </Flex>
        </VStack>
        <Flex align="center" justify="center" minH="100vh">
          <About />
        </Flex>
        <Flex align="center" justify="center" minH="100vh">
          <Project />
        </Flex>
        <Flex align="center" justify="center" minH="100vh">
          <Courses />
        </Flex>
        <Flex align="center" justify="center" minH="100vh">
          <Contact />
        </Flex>
      </Box>
    </motion.div>
  );
};

export default Home;

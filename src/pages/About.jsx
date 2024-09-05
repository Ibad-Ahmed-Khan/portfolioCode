import {
  Box,
  Flex,
  Heading,
  Image,
  Img,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  const text = ["frontend-web developer"];
  const [element, setElement] = useState(text.toString("").split(""));

  // setElement();
  console.log(element);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 2 }}
    >
      <Flex
        w="full"
        h="full"
        gap="3rem"
        pt="2rem"
        pb="2rem"
        flexDirection={{
          base: "column-reverse",
          md: "column-reverse",
          lg: "row",
          xl: "row",
        }}
        alignItems="center"
        justify="center"
      >
        <Flex flexDirection="column" w="full" align="center" justify="center">
          <Box pos="relative">
            <Image
              borderRadius="xl"
              boxShadow="lg"
              src="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*Q6Ns1IPkwqXbEUDA"
              objectFit="cover"
              // w="26rem"
              h={{
                base: "10rem",
                md: "10rem",
                lg: "14rem",
                xl: "14rem",
              }}
            />
            <Flex
              align="center"
              justify="center"
              pos="absolute"
              bottom="0"
              right="-15%"
              borderRadius="50%"
              bg="#fff"
              w={{
                base: "6rem",
                md: "6rem",
                lg: "7rem",
                xl: "7rem",
              }}
              h={{
                base: "6rem",
                md: "6rem",
                lg: "7rem",
                xl: "7rem",
              }}
              boxShadow="xl"
            >
              <FaNodeJs />
            </Flex>
          </Box>
        </Flex>
        <VStack
          w="full"
          align={{
            base: "center",
            md: "  center",
            lg: "start",
            xl: "start",
          }}
        >
          <Text
            style={{
              fontFamily: "Anton, sans-serif",
              fontWeight: "400",
            }}
            color={"blue.300"}
            textTransform="uppercase"
            letterSpacing="0"
          >
            ABOUT ME
          </Text>
          <Heading
            fontSize="1.2rem"
            style={{
              fontFamily: "Anton, sans-serif",
              fontWeight: "400",
              letterSpacing: "1px",
            }}
            textAlign={{
              base: "center",
              md: "  center",
              lg: "start",
              xl: "start",
            }}
          >
            A deticated Front-end Developer based in Lahore,Pakistan
            <Flex
              display="inline"
              align="center"
              justify="center"
              position="relative"
              top="0.6rem"
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
          </Heading>
          <Text
            align={{
              base: "center",
              md: "  center",
              lg: "start",
              xl: "start",
            }}
            color="gray"
            fontWeight="200"
          >
            As a frontend web developer, I have a strong foundation in HTML,
            CSS, and JavaScript, particularly ES6, enabling me to create dynamic
            and responsive web applications. My expertise extends to modern
            libraries and frameworks such as React, Chakra UI, and Tailwind CSS,
            which I use to build elegant and functional user interfaces.
            Additionally, I have experience with Zustand for state management in
            React. Over the course of my career, I have developed numerous
            projects that showcase my ability to deliver high-quality,
            user-centered solutions.
          </Text>
        </VStack>
      </Flex>
    </motion.div>
  );
};

export default About;

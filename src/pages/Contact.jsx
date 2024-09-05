import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { BiCurrentLocation, BiMailSend } from "react-icons/bi";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 2 }}
    >
      <VStack
        align={{ base: "center", md: "center", lg: "start", xl: "start" }}
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
          Contact
        </Text>
        <Heading
          fontSize="1.1rem"
          style={{
            fontFamily: "Anton, sans-serif",
            fontWeight: "400",
            letterSpacing: "1px",
          }}
        >
          Don't be shy! Hit me up!
        </Heading>
        <Flex
          flexDirection={{ base: "column", md: "column", lg: "row", xl: "row" }}
          pt="4rem"
          gap="1rem"
        >
          <Flex
            flexDirection={{
              base: "column",
              md: "column",
              lg: "row",
              xl: "row",
            }}
            w="full"
            gap="1rem"
          >
            <Flex
              justify={{
                base: "center",
                md: "center",
                lg: "start",
                xl: "start",
              }}
            >
              <BiCurrentLocation fontSize="2.3rem" />
            </Flex>
            <VStack
              w="full"
              align={{ base: "center", md: "center", lg: "start", xl: "start" }}
              spacing="0"
            >
              <Text
                style={{
                  fontFamily: "Anton, sans-serif",
                  fontWeight: "400",
                  letterSpacing: "1px",
                }}
              >
                Location
              </Text>
              <Text color="gray">Lahore, Pakistan</Text>
            </VStack>
          </Flex>
          <Flex
            flexDirection={{
              base: "column",
              md: "column",
              lg: "row",
              xl: "row",
            }}
            gap="1rem"
            w="full"
          >
            <Flex
              justify={{
                base: "center",
                md: "center",
                lg: "start",
                xl: "start",
              }}
            >
              <BiMailSend fontSize="2.3rem" />
            </Flex>
            <VStack
              w="full"
              align={{ base: "center", md: "center", lg: "start", xl: "start" }}
              spacing="0"
            >
              <Text
                style={{
                  fontFamily: "Anton, sans-serif",
                  fontWeight: "400",
                  letterSpacing: "1px",
                }}
              >
                Mail
              </Text>
              <Text color="gray">ibadahmedkhan90@gmail.com</Text>
            </VStack>
          </Flex>
        </Flex>
      </VStack>
    </motion.div>
  );
};

export default Contact;

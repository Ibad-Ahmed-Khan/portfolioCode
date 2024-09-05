import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

// Animation variants for spinning and scaling
const spinVariants = {
  animate: {
    rotate: [0, 360],
    transition: {
      repeat: Infinity,
      duration: 2,
      ease: "linear",
    },
  },
};

const pulseVariants = {
  animate: {
    scale: [1, 1.3, 1],
    opacity: [0.5, 1, 0.5],
    transition: {
      repeat: Infinity,
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

const Loader = () => {
  return (
    <Flex
      align="center"
      justify="center"
      h="100vh"
      w="100vw"
      position="relative"
      bg="gray.900"
      overflow="hidden"
    >
      {/* Rotating Rings */}
      <Box
        as={motion.div}
        variants={spinVariants}
        animate="animate"
        position="absolute"
        border="4px solid"
        borderColor="rgba(0, 0, 0, 0.2)"
        borderTopColor="rgba(0, 0, 0, 0.5)"
        borderRadius="50%"
        w="120px"
        h="120px"
        opacity={0.7}
      />

      <Box
        as={motion.div}
        variants={spinVariants}
        animate="animate"
        position="absolute"
        border="4px solid"
        borderColor="rgba(0, 0, 0, 0.2)"
        borderTopColor="rgba(0, 0, 0, 0.5)"
        borderRadius="50%"
        w="80px"
        h="80px"
        opacity={0.5}
      />

      {/* Pulsing Circles */}
      <Box
        as={motion.div}
        variants={pulseVariants}
        animate="animate"
        position="absolute"
        display="flex"
        align="center"
        justify="center"
        w="100px"
        h="100px"
      >
        <Box
          as={motion.div}
          variants={pulseVariants}
          animate="animate"
          position="absolute"
          bg="teal.300"
          w="40px"
          h="40px"
          borderRadius="50%"
          opacity={0.8}
        />
        <Box
          as={motion.div}
          variants={pulseVariants}
          animate="animate"
          position="absolute"
          bg="teal.500"
          w="60px"
          h="60px"
          borderRadius="50%"
          opacity={0.6}
        />
      </Box>

      {/* Central Scaling Circle */}
      <Box
        as={motion.div}
        animate={{ scale: [1, 1.4, 1], rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        position="absolute"
        border="4px solid"
        borderColor="teal.600"
        borderTopColor="transparent"
        borderRadius="50%"
        w="60px"
        h="60px"
        opacity={0.8}
      />
    </Flex>
  );
};

export default Loader;

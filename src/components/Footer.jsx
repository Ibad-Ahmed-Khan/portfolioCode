import { Flex, Text, Link, Icon } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import Pointer from "../assets/pointer.png";

const Footer = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      color="#fff"
      bg="#121212"
      p="4"
      direction={{ base: "column", md: "row" }}
    >
      <Text textAlign="center" mb={{ base: 4, md: 0 }}>
        &copy; {new Date().getFullYear()} Ibad Ahmed Khan. All rights reserved.
      </Text>
      <Flex gap="1rem">
        <Link
          href="https://www.linkedin.com/in/ibad-ahmed-khan-a98b48289/"
          isExternal
        >
          <Text cursor={`url(${Pointer}) , auto`}>
            <FaLinkedin fontSize="1.5rem" />
          </Text>
        </Link>
        <Link href="https://github.com/Ibad-Ahmed-Khan" isExternal>
          <Text cursor={`url(${Pointer}) , auto`}>
            <FaGithub fontSize="1.5rem" />
          </Text>
        </Link>
        <Link href="https://twitter.com/yourprofile" isExternal>
          <Text cursor={`url(${Pointer}) , auto`}>
            <FaTwitter fontSize="1.5rem" />
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Footer;

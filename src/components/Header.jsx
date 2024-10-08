import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaHamburger, FaWindowClose } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  const links = [
    { link: "home", to: "/" },
    { link: "about", to: "/about" },
    { link: "project", to: "/project" },
    { link: "courses", to: "/courses" },
    { link: "contact", to: "/contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleHamburger = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds smooth scrolling
    });
  };

  return (
    <SimpleGrid
      pos="fixed"
      top="0"
      zIndex="9999"
      bg="#fff"
      alignItems="center"
      columns="2"
      p="4"
      w="full"
    >
      <Flex align="center">
        <RouterLink to="/" fontWeight="500">
          <Text
            style={{
              fontFamily: "Anton, sans-serif",
              fontWeight: "400",
              letterSpacing: "1px",
            }}
            onClick={scrollToTop}
            fontSize="1rem"
          >
            Ibad Ahmed.dev
          </Text>
        </RouterLink>
      </Flex>

      {/* Desktop version */}
      <Flex
        display={{ base: "none", md: "none", lg: "flex", xl: "flex" }}
        align="center"
        justify="end"
        textTransform="capitalize"
      >
        <Flex w="50%" align="center" justify="space-between">
          {links.map((item, index) => {
            return (
              <RouterLink onClick={scrollToTop} key={index} to={item.to}>
                {item.link}
              </RouterLink>
            );
          })}
        </Flex>
      </Flex>

      {/* Mobile version */}
      <Flex
        display={{ base: "flex", md: "flex", lg: "none", xl: "none" }}
        align="center"
        justify="end"
        textTransform="capitalize"
      >
        <FaHamburger
          onClick={handleHamburger}
          fontSize="1.7rem"
          cursor="pointer"
        />
      </Flex>
      <Box
        transform={isOpen ? "scale(1,1)" : "scale(0,1)"}
        transition="all .4s ease-in-out"
        pos="fixed"
        left="0"
        top="0"
        transformOrigin="left"
        color="#fff"
        bg="#000"
        w="full"
        h="full"
        opacity="0.9"
      >
        <Flex textTransform="capitalize" align="center" justify="end" p="3">
          <FaWindowClose
            onClick={handleHamburger}
            fontSize="1.7rem"
            color="red"
            cursor="pointer"
          />
        </Flex>
        <Flex
          flexDirection="column"
          align="center"
          justify="center"
          textTransform="capitalize"
          gap="2rem"
          h="100vh"
        >
          {links.map((item, index) => {
            return (
              <RouterLink
                onClick={() => {
                  handleHamburger();
                  scrollToTop();
                }}
                key={index}
                to={item.to}
              >
                {item.link}
              </RouterLink>
            );
          })}
        </Flex>
      </Box>
    </SimpleGrid>
  );
};

export default Header;

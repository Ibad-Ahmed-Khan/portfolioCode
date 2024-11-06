import { Box, Flex, SimpleGrid, Text, keyframes } from "@chakra-ui/react";
import { useState } from "react";
import { FaHamburger, FaMoon, FaSun, FaWindowClose } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import Pointer from "../assets/pointer.png";
import useStore from "../Zustand";

const Header = () => {
  const links = [
    { id: 0, link: "home", to: "/" },
    { id: 1, link: "about", to: "/about" },
    { id: 2, link: "project", to: "/project" },
    { id: 3, link: "courses", to: "/courses" },
    { id: 4, link: "contact", to: "/contact" },
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

  const { toggle, handleToggle, handleColor, color, bg } = useStore();
  const newTab = JSON.parse(localStorage.getItem("1"));
  const [tab, setTab] = useState(newTab);
  const handleTab = (index) => {
    localStorage.setItem("1", JSON.stringify(index));
    setTab(index);
  };

  return (
    <SimpleGrid
      pos="fixed"
      top="0"
      w="99vw"
      zIndex="9999"
      alignItems="center"
      columns="2"
      color={color}
      bg={bg}
      transition="all .4s ease-in"
      transformOrigin="left"
      p="4"
    >
      <Flex align="center">
        <RouterLink to="/" fontWeight="500">
          <Text
            cursor={`url(${Pointer}) , auto`}
            style={{
              fontFamily: "Anton, sans-serif",
              fontWeight: "400",
              letterSpacing: "1px",
            }}
            onClick={() => {
              scrollToTop();
              setTab(0);
              localStorage.setItem("1", JSON.stringify(0));
            }}
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
        <Flex w="60%" align="center" justify="space-evenly">
          {links.map((item, index) => {
            return (
              <RouterLink
                onClick={() => {
                  scrollToTop();
                  handleTab(index);
                }}
                key={index}
                to={item.to}
              >
                <Text pos="relative" cursor={`url(${Pointer}) , auto`}>
                  <Box
                    pos="absolute"
                    top="0"
                    transition="all .4s ease-in"
                    w="full"
                    h="3px"
                    bg={color}
                    transform={index == tab ? "scale(1,1)" : "scale(1,0)"}
                  />
                  {item.link}
                </Text>
              </RouterLink>
            );
          })}
          <Flex
            display={{ base: "none", lg: "flex" }}
            align="center"
            justify="center"
            pos="relative"
            borderTop={`3px solid ${color} `}
            transition="all .2s ease-in"
            _hover={{ color: { color }, borderTop: "3px solid #6e72d3" }}
            borderRadius="50%"
          >
            <Box
              as={FaMoon}
              fontSize="1.3rem"
              m="0.4rem"
              onClick={() => {
                handleToggle();
              }}
              transform={toggle ? "scale(0)" : "scale(1)"}
              cursor={`url(${Pointer}) , auto`}
              transition="all .2s ease-in "
            ></Box>
            <Box
              as={FaSun}
              fontSize="1.3rem"
              pos="absolute"
              // left="0"
              onClick={() => {
                handleToggle();
              }}
              transform={toggle ? "scale(1)" : "scale(0)"}
              cursor={`url(${Pointer}) , auto`}
              transition="all .2s ease-in "
            />
          </Flex>
        </Flex>
      </Flex>

      {/* Mobile version */}

      <Flex
        display={{ base: "flex", md: "flex", lg: "none", xl: "none" }}
        align="center"
        justify="end"
        gap="2rem"
        textTransform="capitalize"
      >
        <Flex
          display={{ base: "flex", lg: "none" }}
          align="center"
          justify="center"
          pos="relative"
          borderTop={`3px solid ${color} `}
          transition="all .2s ease-in"
          _hover={{ color: { color }, borderTop: "3px solid #6e72d3" }}
          borderRadius="50%"
        >
          <Box
            as={FaMoon}
            fontSize="1.5rem"
            m="0.4rem"
            // pos="absolute"
            onClick={handleToggle}
            transform={toggle ? "scale(0)" : "scale(1)"}
            cursor={`url(${Pointer}) , auto`}
            transition="all .2s ease-in"
          />
          <Box
            as={FaSun}
            fontSize="1.5rem"
            pos="absolute"
            onClick={handleToggle}
            transform={toggle ? "scale(1)" : "scale(0)"}
            cursor={`url(${Pointer}) , auto`}
            transition="all .2s ease-in"
          />
        </Flex>
        <FaHamburger
          onClick={handleHamburger}
          fontSize="1.7rem"
          cursor={`url(${Pointer}) , auto`}
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
            cursor={`url(${Pointer}) , auto`}
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
                  scrollToTop();
                  handleHamburger();
                  handleTab(index);
                }}
                key={index}
                to={item.to}
              >
                <Text cursor={`url(${Pointer}) , auto`}>
                  <Box
                    transition="all .4s ease-in"
                    w="full"
                    h="3px"
                    bg="#fff"
                    transform={index == tab ? "scale(1,1)" : "scale(1,0)"}
                  />
                  {item.link}
                </Text>
                <Box
                  pos="absolute"
                  left="0"
                  top="0"
                  bg="#000"
                  w="full"
                  h="3px"
                />
              </RouterLink>
            );
          })}
        </Flex>
      </Box>
    </SimpleGrid>
  );
};

export default Header;

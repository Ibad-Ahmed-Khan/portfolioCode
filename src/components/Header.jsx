import { Box, Flex, SimpleGrid, Text, keyframes } from "@chakra-ui/react";
import { useState } from "react";
import { FaHamburger, FaMoon, FaSun, FaWindowClose } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import useStore from "../Zustand";

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

  const { toggle, handleToggle, handleColor, color, bg } = useStore();

  const crazyAnimateBox = keyframes`
  0%{  
    border-top: 2px;
    
  }
  25% { 
    border-right: 2px;
  }
  50% { 
    border-bottom: 2px;
  }
  100% { 
    border-left: 2px;
  }
`;

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
        // border="4px solid red"
      >
        <Flex w="60%" align="center" justify="space-evenly">
          {links.map((item, index) => {
            return (
              <RouterLink onClick={scrollToTop} key={index} to={item.to}>
                <Text
                  _hover={{
                    ".bar": {
                      w: "full",
                    },
                  }}
                >
                  <Box
                    transition="all .2s ease-in"
                    className="bar"
                    bg="#6e72d3"
                    w="0px"
                    h="2px"
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
            _hover={{ color: "#6e72d3", borderTop: "3px solid #6e72d3" }}
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
              cursor="pointer"
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
              cursor="pointer"
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
          _hover={{ color: "#6e72d3", borderTop: "3px solid #6e72d3" }}
          borderRadius="50%"
        >
          <Box
            as={FaMoon}
            fontSize="1.5rem"
            m="0.4rem"
            // pos="absolute"
            onClick={handleToggle}
            transform={toggle ? "scale(0)" : "scale(1)"}
            cursor="pointer"
            transition="all .2s ease-in"
          />
          <Box
            as={FaSun}
            fontSize="1.5rem"
            pos="absolute"
            onClick={handleToggle}
            transform={toggle ? "scale(1)" : "scale(0)"}
            cursor="pointer"
            transition="all .2s ease-in"
          />
        </Flex>
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

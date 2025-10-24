import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  Tooltip,
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
  FaBootstrap,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiChakraui,
  SiNextdotjs,
  SiRedux,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import Pointer from "../assets/pointer.png";
import HomeImg from "../components/HomeImg";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Courses from "../components/Courses";
import { useEffect, useState } from "react";
import useStore from "../Zustand";

const Home = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const totalScrollableHeight = documentHeight - windowHeight;
      const newPercentage = (scrollTop / totalScrollableHeight) * 100;

      setPercentage(Math.round(newPercentage));
      console.log(Math.round(newPercentage));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { color, bg } = useStore();

  // Tech stack data with only available icons
  const techStack = [
    { icon: <FaHtml5 fontSize="2rem" />, name: "HTML5", color: "#E34F26" },
    { icon: <FaCss3Alt fontSize="2rem" />, name: "CSS3", color: "#1572B6" },
    {
      icon: <FaJsSquare fontSize="2rem" />,
      name: "JavaScript",
      color: "#F7DF1E",
    },
    { icon: <FaReact fontSize="2rem" />, name: "React", color: "#61DAFB" },
    {
      icon: <SiNextdotjs fontSize="2rem" />,
      name: "Next.js",
      color: "#000000",
    },
    { icon: <SiRedux fontSize="2rem" />, name: "Redux", color: "#764ABC" },
    {
      icon: <SiTailwindcss fontSize="2rem" />,
      name: "Tailwind CSS",
      color: "#38B2AC",
    },
    {
      icon: <SiChakraui fontSize="2rem" />,
      name: "Chakra UI",
      color: "#319795",
    },
    {
      icon: <FaBootstrap fontSize="2rem" />,
      name: "Bootstrap",
      color: "#7952B3",
    },
    { icon: <TbApi fontSize="2rem" />, name: "REST APIs", color: "#FF6B6B" },
    { icon: <FaGitAlt fontSize="2rem" />, name: "Git", color: "#F05032" },
    { icon: <FaFigma fontSize="2rem" />, name: "Figma", color: "#F24E1E" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 2 }}
    >
      <Box pt="5rem">
        <Box
          pos="fixed"
          top="0"
          left="0"
          zIndex="9999999999999999999999999"
          bg="#6e72d3"
          w={`${percentage}%`}
          h="4px"
          boxShadow={`0 3px 6px ${color} `}
          transition="all .3s ease-in-out"
        />
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
              </Heading>
              <Text
                display="inline-block"
                color="gray"
                zIndex="2"
                fontSize={{ base: "sm", md: "md" }}
              >
                Assalam o Alaikum, I am Ibad Ahmed Khan. A passionate Front-end
                React Developer based in Lahore, Pakistan.
                <br />
                <br />
                Specializing in modern web technologies with expertise in React
                ecosystem, state management, responsive design.
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
                  <Text cursor={`url(${Pointer}) , auto`}>
                    <FaLinkedin fontSize="1.5rem" />
                  </Text>
                </Link>
                <Link to="https://github.com/Ibad-Ahmed-Khan" isExternal>
                  <Text cursor={`url(${Pointer}) , auto`}>
                    <FaGithub fontSize="1.5rem" />
                  </Text>
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

          {/* Enhanced Tech Stack Section */}
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
              Tech Stack & Expertise
            </Text>
            <Box
              w="2px"
              borderRadius="50%"
              h="1rem"
              transition="all .4s ease-in"
              bg={color}
            />
            <Flex gap="1.5rem" wrap="wrap" justify="center" maxW="800px">
              {techStack.map((tech, index) => (
                <Tooltip key={index} label={tech.name} placement="top" hasArrow>
                  <Box
                    cursor="pointer"
                    transition="all 0.3s ease"
                    _hover={{ transform: "scale(1.2)" }}
                    style={{ color: tech.color }}
                  >
                    {tech.icon}
                  </Box>
                </Tooltip>
              ))}
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

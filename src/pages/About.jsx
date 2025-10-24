import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  SimpleGrid,
  Icon,
  Progress,
  HStack,
  Badge,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  FaNodeJs,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaFigma,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiChakraui,
  SiTypescript,
} from "react-icons/si";
import { motion } from "framer-motion";
import useStore from "../Zustand";

const About = () => {
  const { color, bg } = useStore();

  const skills = [
    { name: "React.js", level: 90, icon: FaReact, color: "#61DAFB" },
    { name: "Next.js", level: 85, icon: SiNextdotjs, color: "#000000" },
    { name: "JavaScript", level: 88, icon: FaJs, color: "#F7DF1E" },
    { name: "TypeScript", level: 75, icon: SiTypescript, color: "#3178C6" },
    { name: "HTML5", level: 95, icon: FaHtml5, color: "#E34F26" },
    { name: "CSS3", level: 92, icon: FaCss3Alt, color: "#1572B6" },
    { name: "Tailwind CSS", level: 88, icon: SiTailwindcss, color: "#38B2AC" },
    { name: "Chakra UI", level: 90, icon: SiChakraui, color: "#319795" },
    { name: "Bootstrap", level: 85, icon: FaBootstrap, color: "#7952B3" },
    { name: "Redux", level: 82, icon: SiRedux, color: "#764ABC" },
    { name: "REST APIs", level: 80, icon: FaNodeJs, color: "#339933" },
    { name: "Git", level: 85, icon: FaGitAlt, color: "#F05032" },
    { name: "Figma", level: 78, icon: FaFigma, color: "#F24E1E" },
  ];

  const expertiseAreas = [
    {
      title: "Frontend Development",
      items: ["React.js", "Next.js", "TypeScript", "Responsive Design"],
    },
    {
      title: "State Management",
      items: ["Redux Toolkit", "Zustand", "Context API"],
    },
    {
      title: "Styling & UI/UX",
      items: ["Chakra UI", "Tailwind CSS", "Bootstrap", "Figma"],
    },
    {
      title: "Tools & Technologies",
      items: ["REST APIs", "Git/GitHub", "JWT Auth", "Middleware"],
    },
  ];

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
        pt="5rem"
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
              bg={bg}
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
              transition="all .4s ease-in"
              boxShadow={`0 2px 5px ${color}`}
            >
              <FaNodeJs color={color} size={40} />
            </Flex>
          </Box>

          {/* Skills Progress Section */}
          <Box mt="3rem" w="100%" maxW="500px">
            <Text
              fontSize="xl"
              fontWeight="bold"
              mb="1rem"
              textAlign="center"
              style={{
                fontFamily: "Anton, sans-serif",
                letterSpacing: "1px",
              }}
            >
              Technical Proficiency
            </Text>
            <VStack spacing="4" align="stretch">
              {skills.slice(0, 6).map((skill, index) => (
                <Box key={index}>
                  <Flex justify="space-between" mb="1">
                    <HStack>
                      <Icon as={skill.icon} color={skill.color} />
                      <Text fontSize="sm" fontWeight="medium">
                        {skill.name}
                      </Text>
                    </HStack>
                    <Text fontSize="sm" color="gray.300">
                      {skill.level}%
                    </Text>
                  </Flex>
                  <Progress
                    value={skill.level}
                    size="sm"
                    colorScheme="gray"
                    borderRadius="full"
                    bg="gray.200"
                  />
                </Box>
              ))}
            </VStack>
          </Box>
        </Flex>

        <VStack
          w="full"
          align={{
            base: "center",
            md: "center",
            lg: "start",
            xl: "start",
          }}
          spacing="6"
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
            fontSize="1.8rem"
            style={{
              fontFamily: "Anton, sans-serif",
              fontWeight: "400",
              letterSpacing: "1px",
            }}
            textAlign={{
              base: "center",
              md: "center",
              lg: "start",
              xl: "start",
            }}
          >
            Full-Stack Focused Frontend Developer
          </Heading>

          <Text
            align={{
              base: "center",
              md: "center",
              lg: "start",
              xl: "start",
            }}
            color="gray.300"
            fontWeight="200"
            fontSize="lg"
            lineHeight="1.8"
          >
            I'm a passionate{" "}
            <Badge colorScheme="black" fontSize="0.8em">
              Frontend Developer
            </Badge>{" "}
            with expertise in modern web technologies. I specialize in building
            scalable, responsive, and user-friendly applications using
            <strong> React.js, Next.js, and TypeScript</strong>. My journey
            includes developing complex e-commerce solutions with advanced
            features like authentication, payment integration, and state
            management.
          </Text>

          {/* Expertise Areas */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing="4" w="full">
            {expertiseAreas.map((area, index) => (
              <Box
                key={index}
                p="4"
                borderRadius="lg"
                border="1px solid"
                borderColor="gray.200"
                bg="white"
                boxShadow="sm"
                _hover={{ boxShadow: "md", transform: "translateY(-2px)" }}
                transition="all 0.3s"
              >
                <Text fontWeight="bold" mb="2" color="black">
                  {area.title}
                </Text>
                <Flex flexWrap="wrap" gap="2">
                  {area.items.map((item, itemIndex) => (
                    <Badge key={itemIndex} variant="subtle" fontSize="0.7em">
                      {item}
                    </Badge>
                  ))}
                </Flex>
              </Box>
            ))}
          </SimpleGrid>

          {/* Key Projects Highlight */}
          <Box
            p="4"
            borderRadius="lg"
            bg="green.50"
            borderLeft="4px solid"
            borderColor="black"
            w="full"
          >
            <Text fontWeight="bold" mb="2">
              🚀 Recent Achievement:
            </Text>
            <Text fontSize="sm" color="gray.700">
              Built a complete <strong>Next.js E-commerce platform</strong> with
              authentication, payment integration, and admin dashboard.
              Implemented advanced features including Google OAuth, JWT tokens,
              and responsive design using Bootstrap & SCSS.
            </Text>
          </Box>
        </VStack>
      </Flex>
    </motion.div>
  );
};

export default About;

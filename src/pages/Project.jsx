import {
  Box,
  Flex,
  Heading,
  Image,
  Img,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import FoodPanda from "../assets/foodPanda.png";
import Ecommerce from "../assets/ecommerce.png";
import Crypto from "../assets/crypto.png";
import AdvanceWork from "../assets/advanceWork.png";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";

const Project = () => {
  const projectList = [
    {
      projectName: "FoodPanda",
      summary:
        "Developed a user-friendly web interface for an online food delivery platform. Integrated real-time order tracking, payment processing, and an intuitive menu browsing experience to enhance customer satisfaction.",
      text: "Built using React, Chakra UI, and Firebase for seamless user interaction and real-time database management.",
      sticker:
        "https://cdn.vectorstock.com/i/1000v/21/00/cute-panda-crawling-on-bamboo-tree-vector-50482100.avif",
      img: FoodPanda,
      liveDemo: "https://ibadahmedkhan222222.pages.dev/",
      codelink: "https://github.com/Ibad-Ahmed-Khan/food",
    },
    {
      projectName: "Ecommerce",
      summary:
        "Created a dynamic and responsive e-commerce website with a focus on usability and performance. Implemented features like product search, filtering, and a secure checkout process.",
      text: "Technologies used include React, Redux, and Stripe API for payment processing.",
      img: Ecommerce,
      sticker:
        "https://cdn.vectorstock.com/i/1000x1000/73/70/ecommerce-in-smartphone-vector-45247370.webp",
      liveDemo: "https://ibadahmedkhanecommerce.pages.dev/",
      codelink: "https://github.com/Ibad-Ahmed-Khan/Ecommerce",
    },
    {
      projectName: "Crypto",
      summary:
        "Designed and developed a cryptocurrency dashboard that provides real-time data on market trends, price charts, and portfolio management. Integrated multiple APIs to fetch up-to-date financial data.",
      text: "Utilized React, Chart.js, and various cryptocurrency APIs to build a comprehensive market analysis tool.",
      img: Crypto,
      sticker:
        "https://cdn.vectorstock.com/i/1000x1000/48/35/realistic-golden-bitcoin-vector-21474835.webp",
      liveDemo: "https://crypto-9z7.pages.dev/",
      codelink: "https://github.com/Ibad-Ahmed-Khan/crypto",
    },
    {
      projectName: "Advance Work",
      summary:
        "Engineered an advanced task management application that allows teams to collaborate efficiently. Features include task assignment, progress tracking, and automated reminders.",
      text: "This project was developed using React, Node.js, and MongoDB for a full-stack solution.",
      img: AdvanceWork,
      sticker:
        "https://cdn.vectorstock.com/i/1000v/06/73/handshake-abstract-vector-790673.avif",
      liveDemo: "https://allllllcomponents.pages.dev/",
      codelink: "https://github.com/Ibad-Ahmed-Khan/components",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 2 }}
    >
      <Flex
        pt="2rem"
        pb="5rem"
        flexDirection="column"
        justify="center"
        align={{ base: "center", md: "center", lg: "start", xl: "start" }}
      >
        <Text
          style={{
            fontFamily: "Anton, sans-serif",
            fontWeight: "400",
            letterSpacing: "1px",
          }}
          textTransform="uppercase"
          color="blue.300"
        >
          Portfolio
        </Text>
        <Text
          fontSize="1.2rem"
          textAlign={{ base: "center", md: "center", lg: "start", xl: "start" }}
          style={{
            fontFamily: "Anton, sans-serif",
            fontWeight: "400",
            letterSpacing: "0.5px",
          }}
        >
          Each project is a unique piece of development.
        </Text>
        {projectList.map((project, index) => (
          <Flex
            key={index}
            align="center"
            justify="center"
            transition="all .4s ease-in-out"
            gap="2rem"
            flexDirection={{
              base: "column",
              md: "column",
              lg: index % 2 === 0 ? "row-reverse" : "row",
              xl: index % 2 === 0 ? "row-reverse" : "row",
            }}
          >
            <Flex
              w="20rem"
              h="20rem"
              textAlign="center"
              flexDirection="column"
              align="center"
              justify="center"
              gap="2rem"
            >
              <Heading
                style={{
                  fontFamily: "Anton, sans-serif",
                  fontWeight: "400",
                  letterSpacing: "1px",
                }}
                fontSize="1.3rem"
                textTransform="uppercase"
              >
                {project.projectName}
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
                    src={project.sticker}
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
              <Text color="gray"> {project.summary} </Text>
              <Flex align="center" justify="center" gap="2rem">
                <RouterLink to={project.codelink}>Code</RouterLink>
                <RouterLink to={project.liveDemo}>Live demo</RouterLink>
              </Flex>
            </Flex>
            <RouterLink to={project.liveDemo}>
              <Image
                src={project.img}
                w="22rem"
                objectFit="contain"
                boxShadow="xl"
                borderRadius="xl"
              />
            </RouterLink>
          </Flex>
        ))}
      </Flex>
    </motion.div>
  );
};

export default Project;

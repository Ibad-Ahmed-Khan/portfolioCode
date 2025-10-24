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
import lazmy from "../assets/lazmy.jpeg";
import Crypto from "../assets/crypto.png";
import AdvanceWork from "../assets/advanceWork.png";
import Pointer from "../assets/pointer.png";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaShoppingCart,
  FaBitcoin,
  FaUtensils,
  FaTasks,
  FaLaptopCode,
} from "react-icons/fa";

const Project = () => {
  const projectList = [
    {
      projectName: "NextJS Ecommerce Lazmy",
      summary:
        "Built a e-commerce platform using Next.js with complete user authentication system including Google OAuth and email/password with JWT tokens. Implemented comprehensive product management with dynamic slug-based routing, detailed product pages, shopping cart with quantity control, checkout process with address form, and secure payment integration. Developed custom middleware for enhanced website security and utilized Bootstrap, CSS, SCSS for responsive styling. Managed complete CRUD operations with REST APIs for data handling.",
      text: "Technologies used: Next.js, Bootstrap, SCSS, REST APIs, JWT Authentication, Google OAuth, Middleware Security, Payment Integration",
      img: lazmy,

      sticker: <FaShoppingCart size={24} style={{ color: "#ff7f50" }} />,
      liveDemo: "https://www.lazmy.com/",
      codelink: "",
      isPrivate: true,
    },
    {
      projectName: "Ecommerce",
      summary:
        "Developed a dynamic and responsive e-commerce website utilizing Zustand for global state management, featuring seamless product selection and detailed views with stock-based counters and alerts. Integrated a fully responsive cart page, and a total with a checkout option. All product data is stored in local storage, ensuring persistence after reloads. Enhanced user experience with multiple product images, related items, and polished UI/UX designs, making the site not only functional but user-friendly.",
      text: "Technologies used include React, Redux, and Stripe API for payment processing.",
      img: Ecommerce,

      sticker: <FaLaptopCode size={24} style={{ color: "aqua" }} />,
      liveDemo: "https://ecomemrce.pages.dev/",
      codelink: "https://github.com/Ibad-Ahmed-Khan/redEcomemrce",
      isPrivate: false,
    },
    {
      projectName: "Crypto",
      summary:
        "Designed and developed a cryptocurrency dashboard that provides real-time data on market trends, price charts, and portfolio management. Integrated multiple APIs to fetch up-to-date financial data.",
      text: "Utilized React, Chart.js, and various cryptocurrency APIs to build a comprehensive market analysis tool.",
      img: Crypto,
      sticker: <FaBitcoin size={24} style={{ color: "#ffd700" }} />,
      liveDemo: "https://crypto-9z7.pages.dev/",
      codelink: "https://github.com/Ibad-Ahmed-Khan/crypto",
      isPrivate: false,
    },
    {
      projectName: "FoodPanda",
      summary:
        "Developed a user-friendly web interface for an online food delivery platform. Integrated real-time order tracking, payment processing, and an intuitive menu browsing experience to enhance customer satisfaction.",
      text: "Built using React, Chakra UI, and Firebase for seamless user interaction and real-time database management.",
      img: FoodPanda,
      sticker: <FaUtensils size={24} style={{ color: "#4caf50" }} />,
      liveDemo: "https://ibadahmedkhan222222.pages.dev/",
      codelink: "https://github.com/Ibad-Ahmed-Khan/food",
      isPrivate: false,
    },
    {
      projectName: "Advance Work",
      summary:
        "Engineered an advanced task management application that allows teams to collaborate efficiently. Features include task assignment, progress tracking, and automated reminders.",
      text: "This project was developed using React, Node.js, and MongoDB for a full-stack solution.",
      img: AdvanceWork,
      sticker: <FaTasks size={24} style={{ color: "#2196f3" }} />,
      liveDemo: "https://allllllcomponents.pages.dev/",
      codelink: "https://github.com/Ibad-Ahmed-Khan/components",
      isPrivate: false,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 2 }}
    >
      <Flex
        pt="5rem"
        pb="5rem"
        flexDirection="column"
        justify="center"
        gap="6rem"
        align={{ base: "center", md: "center", lg: "start", xl: "start" }}
      >
        <Flex flexDir="column" align={{ base: "center", lg: "start" }}>
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
            textAlign={{
              base: "center",
              md: "center",
              lg: "start",
              xl: "start",
            }}
            style={{
              fontFamily: "Anton, sans-serif",
              fontWeight: "400",
              letterSpacing: "0.5px",
            }}
          >
            Each project is a unique piece of development.
          </Text>
        </Flex>
        {projectList.map((project, index) => (
          <Flex
            key={index}
            align="center"
            justify="center"
            gap={{ base: "1rem", lg: "3rem" }}
            flexDirection={{
              base: "column",
              md: "column",
              lg: index % 2 === 0 ? "row-reverse" : "row",
              xl: index % 2 === 0 ? "row-reverse" : "row",
            }}
          >
            <Flex
              w="20rem"
              textAlign="center"
              flexDirection="column"
              align="center"
              justify="center"
              gap="1rem"
            >
              <Flex
                align="center"
                justify="center"
                style={{
                  fontFamily: "Anton, sans-serif",
                  fontWeight: "400",
                  letterSpacing: "1px",
                }}
                fontSize="1.2rem"
                textTransform="uppercase"
              >
                {project.projectName}
                <Box ml={2}>{project.sticker}</Box>
              </Flex>
              <Text color="gray"> {project.summary} </Text>
              <Flex align="center" justify="center" gap="2rem">
                {project.isPrivate ? (
                  <Text
                    color="gray.500"
                    fontStyle="italic"
                    cursor="not-allowed"
                  >
                    Code (Private)
                  </Text>
                ) : (
                  <RouterLink target="_blank" to={project.codelink}>
                    <Text cursor={`url(${Pointer}) , auto`}>Code</Text>
                  </RouterLink>
                )}
                <RouterLink target="_blank" to={project.liveDemo}>
                  <Text cursor={`url(${Pointer}) , auto`}>Live demo</Text>
                </RouterLink>
              </Flex>
              {project.isPrivate && (
                <Text fontSize="0.8rem" color="gray.500" fontStyle="italic">
                  * Source code is private property and cannot be shared
                </Text>
              )}
            </Flex>
            <RouterLink target="_blank" to={project.liveDemo}>
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

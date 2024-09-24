import {
  Box,
  Flex,
  Heading,
  Image,
  Img,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import {
  FaLinkedin,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaFileAlt,
} from "react-icons/fa";
import HtmlCourse from "../assets/Courses Imgs/html.jpg"; // Add your HTML course image path
import CssCourse from "../assets/Courses Imgs/css.jpg"; // Add your CSS course image path
import ResumeCourse from "../assets/Courses Imgs/CanvaResume.jpeg"; // Add your Resume course image path
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";

const Courses = () => {
  const coursesList = [
    {
      coursesName: "HTML Course",
      summary:
        "Completed a comprehensive HTML course from Great Learning Academy. Learned fundamental concepts, semantic HTML, and best practices for structuring web content.",
      text: "This course provided a solid foundation for web development using HTML.",
      img: HtmlCourse,
      sticker: <FaHtml5 color="#E44D26" />,
      liveDemo: "#", // Placeholder if there is no live demo
      codelink: "#", // Placeholder if there is no code link
    },
    {
      coursesName: "CSS Course",
      summary:
        "Completed an engaging CSS course from Great Learning Academy. Explored styles, layouts, and responsive design techniques to enhance the visual appeal of web pages.",
      text: "This course enhanced my skills in CSS for better web design.",
      img: CssCourse,
      sticker: <FaCss3Alt color="#1572B6" />,
      liveDemo: "#", // Placeholder if there is no live demo
      codelink: "#", // Placeholder if there is no code link
    },
    {
      coursesName: "Resume Building Course",
      summary:
        "Completed a specialized course on resume building from Coursera. Learned techniques for creating impactful resumes that stand out to employers.",
      text: "This course helped me develop professional resumes to enhance my job applications.",
      img: ResumeCourse,
      sticker: <FaFileAlt color="#7A7A7A" />,
      liveDemo: "#", // Placeholder if there is no live demo
      codelink: "#", // Placeholder if there is no code link
    },
    // Existing projects can be added here if needed
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
          Courses & Certificates
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
          Every course offers valuable insights for your journey in tech.
        </Text>
        {coursesList.map((project, index) => (
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
              <Flex align="center" justify="center" gap="1rem">
                <Heading
                  style={{
                    fontFamily: "Anton, sans-serif",
                    fontWeight: "400",
                    letterSpacing: "1px",
                  }}
                  fontSize="1.3rem"
                  textTransform="uppercase"
                >
                  {project.coursesName}
                </Heading>
                <Box fontSize="2rem">{project.sticker}</Box>
              </Flex>
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

export default Courses;

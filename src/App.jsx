import React, { useState, useEffect } from "react";
import { Box, Flex, Img } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes, redirect } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Courses from "./components/Courses";
import Arrow from "./assets/arrow.png";
import useStore from "./Zustand";

function App() {
  const [loading, setLoading] = useState(true);

  const { toggle, handleToggle, handleColor, color, bg } = useStore();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 2 }}
        >
          <Box>
            <Flex
              flexDirection="column"
              minH="100vh"
              w={{ base: "100vw", lg: "99vw" }}
              style={{
                fontFamily: "Kanit, sans-serif",
                fontWeight: "400",
              }}
              cursor={`url(${Arrow}) , auto`}
            >
              <BrowserRouter>
                <Flex
                  flex="1"
                  align="center"
                  justify="center"
                  flexDirection="column"
                  paddingInline={{ base: "2rem", md: "2rem", lg: "10rem" }}
                  color={color}
                  bg={bg}
                  transition="all .4s ease-in"
                >
                  <Header />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </Flex>
              </BrowserRouter>
              <Footer />
            </Flex>
          </Box>
        </motion.section>
      )}
    </>
  );
}

export default App;

// https://pll.harvard.edu/course/cs50s-web-programming-python-and-javascript

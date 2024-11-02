import React, { useState, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Drawer from "./components/Courses";
import Courses from "./components/Courses";
import useStore from "./Zustand";
import OpeingBar from "./components/OpeingBar";

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
          <Flex
            flexDirection="column"
            minH="100vh"
            w={{ base: "100vw", lg: "99vw" }}
            style={{
              fontFamily: "Kanit, sans-serif",
              fontWeight: "400",
            }}
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
                {/* <OpeingBar /> */}
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
        </motion.section>
      )}
    </>
  );
}

export default App;

import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      {/* header */}
      <div className="sticky top-0 w-full z-[100000]">
        <div>
          <Header />
        </div>
      </div>

      {/* content */}
      <div className="mt-[100px] md:px-[50px] px-[20px] flex flex-col gap-[100px] mb-[100px]">
        <motion.div
          initial={{ opacity: 1, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Section1 />
        </motion.div>
        <motion.div
          initial={{ opacity: 1, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Section2 />
        </motion.div>
        <motion.div
          initial={{ opacity: 1, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >

        </motion.div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default About;

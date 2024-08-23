import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { motion } from "framer-motion";

import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div>
      {/* header */}
      <div className="sticky top-0 w-full z-[100000]">
        <div>
          <Header />
        </div>
      </div>

      {/* content */}
      <motion.div
        initial={{ opacity: 1, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="md:px-[50px] px-[5px] mt-[100px] mb-[100px]"
      >
        <ContactForm />
      </motion.div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Contact;

import React from "react";
import img from "../../../assets/image.jpg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Section3 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex md:flex-row flex-col w-full md:h-[600px] justify-center gap-[50px] items-center">
      <motion.div
        initial={{ opacity: 1, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="md:w-[450px] h-full"
      >
        <img src={img} alt="s3img" className="w-full h-full object-cover" />
      </motion.div>
      <motion.div
        initial={{ opacity: 1, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col gap-[20px]"
      >
        <div>
          <span className="md:text-[35px] text-[25px] text-center md:text-start flex items-center md:items-start justify-center md:justify-start Nu uppercase font-[800] tracking-[5px]">
          Artistry of Ceylon
          </span>
        </div>
        <div className="md:w-[500px] flex flex-col md:gap-[25px] gap-[15px] text-center md:text-start font-[500]">
          <p className="Nu">
          Immerse yourself in the exquisite artistry of "Artystry Hand Made Ceylon," where each piece is a testament to the rich cultural heritage of Sri Lanka. Our collection features meticulously handcrafted items that reflect the island's vibrant traditions and skilled craftsmanship. From intricately designed home decor to elegant accessories, every product is made with passion and precision, ensuring that you receive a truly unique and meaningful item.
          </p>

          <p className="Nu">
          When you choose our handmade creations, you’re not just purchasing a product; you’re embracing a piece of Ceylon’s history and artistry. Each item tells a story of tradition and skill, offering you a tangible connection to the island’s rich legacy. Whether you’re enhancing your own space or searching for a thoughtful gift, "Artystry Hand Made Ceylon" provides you with an opportunity to own something truly special and beautiful. Experience the charm of Ceylonese craftsmanship and bring a touch of timeless elegance into your life today.
          </p>

          {/* contact us */}
          <div>
            <button
              className="button Nu uppercase"
              onClick={() => navigate("/contact")}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Section3;

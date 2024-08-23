import React from "react";
import img from "../../assets/img_3.jpg";

const Section1 = () => {
  return (
    <div className="flex md:flex-row flex-col gap-[25px] justify-center">
      {/* left */}
      <div className="md:w-[500px] w-full md:h-[600px] h-[300px]">
        <img src={img} alt="aboutImg" className="w-full h-full object-cover" />
      </div>

      {/* right */}
      <div className="flex flex-col md:gap-[10px]">
        {/* title */}
        <div className="mb-[50px] flex items-center gap-[10px]">
          <div className="w-[6px] h-[25px] bg-black"></div>
          <h1 className="md:text-[20px] text-[15px] font-[700] text-gray-900 As uppercase tracking-[5px]">
          Our Story of Ceylon Craftsmanship
          </h1>
        </div>

        {/* desc */}
        <div className="md:w-[600px] text-center md:text-start flex flex-col gap-[25px]">
          <p className="Nu font-[500]">
          "Artystry Hand Made Ceylon" is a celebration of Sri Lanka’s rich cultural heritage, brought to life through exquisite handmade crafts. We are passionate about preserving the traditional artistry of Ceylon, where each item is meticulously crafted by skilled artisans using techniques passed down through generations. Our collection is a blend of tradition and creativity, offering you unique pieces that reflect the beauty and diversity of our island’s culture.
          </p>

          <p className="Nu font-[500]">
          Our mission is to share the timeless elegance of Ceylon’s craftsmanship with the world. We believe that every item we create carries a story—a story of dedication, skill, and the vibrant spirit of Sri Lanka. Whether you’re looking for something special for your home, a thoughtful gift, or a piece that connects you to our rich cultural roots, "Artystry Hand Made Ceylon" is here to offer you a truly meaningful and authentic experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section1;

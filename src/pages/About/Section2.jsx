import React from "react";
import img from "../../assets/image2.jpg";

const Section2 = () => {
  return (
    <div className="flex gap-[25px] justify-center md:flex-row-reverse flex-col">
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
            Excellence in Every Detail
          </h1>
        </div>

        {/* desc */}
        <div className="md:w-[600px] text-center md:text-start flex flex-col gap-[25px]">
          <p className="Nu font-[500]">
            At "Artystry Hand Made Ceylon," our products are a testament to the
            highest standards of quality and craftsmanship. Each piece is
            carefully crafted using the finest materials, ensuring durability
            and lasting beauty. Our artisans pour their expertise and passion
            into every detail, creating products that are not only visually
            stunning but also built to stand the test of time.
          </p>

          <p className="Nu font-[500]">
            We take pride in offering you a collection that represents the best
            of Ceylon's handmade artistry. From the intricate designs to the
            meticulous finishing touches, our products embody the essence of
            excellence. When you choose "Artystry Hand Made Ceylon," you're
            choosing quality that you can see, feel, and cherish for years to
            come.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;

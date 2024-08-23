import React from "react";
import img from "../../assets/img_4.jpg";

const Section3 = () => {
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
            Crafting Timeless Creations
          </h1>
        </div>

        {/* desc */}
        <div className="md:w-[600px] text-center md:text-start flex flex-col gap-[25px]">
          <p className="Nu font-[500]">
            Welcome to John Leather Craft, where passion meets tradition in the
            art of leather craftsmanship. Our story is one of dedication,
            perseverance, and a love for creating exquisite leather goods that
            stand the test of time. Founded by john leather craft in 2023, John
            Leather Craft was born out of a deep-seated appreciation for the
            timeless elegance and durability of leather. From humble beginnings
            in a small workshop to our current status as a trusted name in
            artisanal leather goods, our journey has been guided by a singular
            vision: to craft pieces that not only meet but exceed expectations.
          </p>

          <p className="Nu font-[500]">
            At John Leather Craft, our story is a tapestry of passion, skill,
            and dedication. Born out of a lifelong fascination with the art of
            leatherworking, our founder [Your Name] set out to create a brand
            that celebrates the rich heritage of craftsmanship. Each piece
            crafted by John Leather Craft is more than just an accessory; it's a
            testament to the centuries-old tradition of leather artistry. From
            the selection of the finest materials to the intricate
            hand-stitching and finishing touches, every detail is meticulously
            attended to with a singular goal in mind - to create timeless
            creations that evoke emotion and inspire admiration. With a focus on
            quality, authenticity, and attention to detail, we invite you to
            experience the essence of John Leather Craft - where every product
            tells a story and every stitch weaves a memory.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;

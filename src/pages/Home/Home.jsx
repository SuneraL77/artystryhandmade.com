import React, { useEffect } from "react";
import Header from "../../Components/Header/Header";
import HomeSlider from "../../Components/Sliders/HomeSlider";
import NewArrivals from "./NewArrivals/NewArrivals";
import OurStory from "./OurStory/OurStory";
import Section3 from "./Section3/Section3";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import Section5 from "./Section5/Section5";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <div className="sticky top-0 w-full z-[100000]">
        <div className=" w-full">
          <Header />
        </div>
      </div>

      <div>
        <HomeSlider />
      </div>

      <div className="md:px-[50px] px-[20px]">
        {/* New Arrivals */}
        <div className="mt-[100px] mb-[100px]">
          <NewArrivals />
        </div>

        {/* our story */}
        <div className="mt-[100px] mb-[100px]">
          <OurStory />
        </div>

        {/* featured products */}
        <div className="mt-[100px] mb-[100px]">
          <FeaturedProducts />
        </div>

        {/* section 3 */}
        <div className="md:mt-[150px] mt-[100px] mb-[100px]">
          <Section3 />
        </div>

        {/* section 5 */}
        <div className="md:mt-[150px] mt-[100px] mb-[100px]">
          <Section5 />
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Home;

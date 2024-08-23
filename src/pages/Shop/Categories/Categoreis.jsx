import React, { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./categories.css";
import { getCategories } from "../../../functions/category";

const Categoreis = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = async () => {
    setLoading(true);
    const response = await getCategories();
    setCategoryData(response.data);
  };

  return (
    <div className="cat">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
        {categoryData.map((item) => (
          <SwiperSlide key={item.p_id}>
            <CategoryItem item={item} key={item.p_id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categoreis;

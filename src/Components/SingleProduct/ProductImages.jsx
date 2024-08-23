import React, { useState } from "react";

const ProductImages = ({ p }) => {
  const [selectedImg, setSelectedImg] = useState(0);

  return (
    <div className="flex flex-col gap-[20px] items-center">
      <div className="mt-4 w-full md:h-[600px] h-full">
        <img
          src={p.images[selectedImg].imageUrl}
          alt="selectedImg"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex md:gap-[20px] gap-[10px] justify-center items-center">
        <div className="md:w-[120px] w-[60px] md:h-[120px] h-[60px]">
          {p.images.map((image, index) => (
            <img
              key={index}
              src={image.imageUrl}
              alt="subImg"
              className="w-full h-full object-cover cursor-pointer hover:opacity-90"
              onClick={() => setSelectedImg(index)}
            />
          ))}
        </div>
      </div>

      {/* Display the selected image */}
    </div>
  );
};

export default ProductImages;

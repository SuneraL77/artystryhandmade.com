import { Modal, Progress, Rate } from "antd";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import ReviewCard from "./ReviewCard";
import { reviewsData } from "./ReviewsData";
import noProfile from "../../assets/noProfile.jpg";

const ProductDescription = ({
  p,
  setStar,
  comment,
  setComment,
  sendRating,
}) => {
  const [selectedTab, setSelectedTab] = useState(1);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ratevalue, setRateValue] = useState("");
  console.log(ratevalue);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const ratings = p.ratings; // Assuming 'product' is your product object

  // Initialize an object to store the count of ratings for each star value
  const ratingCounts = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  };

  // Assuming 'product' is your product object

  // Initialize variables for total stars and total ratings
  let totalStars = 0;
  let totalRatings = 0;

  // Calculate total stars and total ratings
  ratings.forEach((rating) => {
    totalStars += parseInt(rating.star);
    totalRatings++;
  });

  // Calculate average star rating
  const averageRating = totalStars / totalRatings;

  console.log("Average Rating:", averageRating);

  ratings.forEach((rating) => {
    const star = parseInt(rating.star);
    if (star >= 1 && star <= 5) {
      ratingCounts[star]++;
    }
  });

  console.log(p);
  return (
    <div className="flex  justify-center flex-col gap-[25px]">
      {/* top */}
      <div className="flex gap-[20px] justify-center border-b-[1px] border-solid border-gray-200/60 pb-[25px] w-full">
        <div>
          <span
            className={`Nu text-[18px] ${
              selectedTab === 1 ? "text-red-500" : "text-black"
            } uppercase tracking-[2px] font-[600] cursor-pointer`}
            onClick={() => setSelectedTab(1)}
          >
            Description
          </span>
        </div>
        <div>
          <span
            className={`Nu text-[18px] ${
              selectedTab === 2 ? "text-red-500" : "text-black"
            } uppercase tracking-[2px] font-[600] cursor-pointer`}
            onClick={() => setSelectedTab(2)}
          >
            Reviews
          </span>
        </div>
      </div>

      {/* description | reviews */}
      <div>
        {/* description */}
        {selectedTab === 1 && (
          <div>
            <p className="Nu  font-[500]">{p.description}</p>
          </div>
        )}

        {/* reviews */}
        {selectedTab === 2 && (
          <div>
            {/* status */}
            <div className="flex md:flex-row flex-col md:items-center items-start gap-[25px]">
              <div className="flex flex-col items-start ">
                <div>
                  {averageRating ? (
                    <span className="Nu text-[60px] font-[800]">
                      {averageRating}
                      {"."} {"0"}
                    </span>
                  ) : (
                    <span className="Nu text-[60px] font-[800]">{"0"}</span>
                  )}
                </div>
                <div>
                  <Rate
                    disabled
                    defaultValue={averageRating}
                    allowHalf
                    className="flex gap-[0] text-[#ffd000] text-[30px]"
                  />
                </div>
                <div className="mt-[15px]">
                  <span className="Nu text-[18px] font-[500] text-gray-500">
                    {p.ratings.length} Reviews
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-[7px]">
                {/* 1 */}
                {ratingCounts[5] === 0 ? null : (
                  <div className="flex items-center gap-[10px]">
                    <div className="flex items-center gap-[5px]">
                      <FaStar className="text-[#ffd000] text-[20px]" />
                      <span className="Mont text-[18px] font-[500]">5</span>
                    </div>
                    <div className="w-[200px]">
                      <Progress
                        percent={(ratingCounts[5] / p.ratings.length) * 100}
                        strokeColor={"#ffd000"}
                        className="text-[18px] font-[500] Mont"
                      />
                    </div>
                  </div>
                )}

                {/* 2 */}

                {ratingCounts[4] === 0 ? null : (
                  <div className="flex items-center gap-[10px]">
                    <div className="flex items-center gap-[5px]">
                      <FaStar className="text-[#ffd000] text-[20px]" />
                      <span className="Mont text-[18px] font-[500]">4</span>
                    </div>
                    <div className="w-[200px]">
                      <Progress
                        percent={(ratingCounts[4] / p.ratings.length) * 100}
                        strokeColor={"#ffd000"}
                        className="text-[18px] font-[500] Mont"
                      />
                    </div>
                  </div>
                )}

                {/* 3 */}
                {ratingCounts[3] === 0 ? null : (
                  <div className="flex items-center gap-[10px]">
                    <div className="flex items-center gap-[5px]">
                      <FaStar className="text-[#ffd000] text-[20px]" />
                      <span className="Mont text-[18px] font-[500]">3</span>
                    </div>
                    <div className="w-[200px]">
                      <Progress
                        percent={(ratingCounts[3] / p.ratings.length) * 100}
                        strokeColor={"#ffd000"}
                        className="text-[18px] font-[500] Mont"
                      />
                    </div>
                  </div>
                )}

                {/* 4 */}

                {ratingCounts[2] === 0 ? null : (
                  <div className="flex items-center gap-[10px]">
                    <div className="flex items-center gap-[5px]">
                      <FaStar className="text-[#ffd000] text-[20px]" />
                      <span className="Mont text-[18px] font-[500]">2</span>
                    </div>
                    <div className="w-[200px]">
                      <Progress
                        percent={(ratingCounts[2] / p.ratings.length) * 100}
                        strokeColor={"#ffd000"}
                        className="text-[18px] font-[500] Mont"
                      />
                    </div>
                  </div>
                )}

                {/* 5 */}

                {ratingCounts[1] === 0 ? null : (
                  <div className="flex items-center gap-[10px]">
                    <div className="flex items-center gap-[5px]">
                      <FaStar className="text-[#ffd000] text-[20px]" />
                      <span className="Mont text-[18px] font-[500]">1</span>
                    </div>
                    <div className="w-[200px]">
                      <Progress
                        percent={(ratingCounts[1] / p.ratings.length) * 100}
                        strokeColor={"#ffd000"}
                        className="text-[18px] font-[500] Mont"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Add your review */}
            <div className="mt-[50px]">
              <button className="button Nu" onClick={showModal}>
                Add Review
              </button>
              <Modal
                title="Add Your Review"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={false}
              >
                <div className="mt-[25px] flex md:flex-row flex-col gap-[10px]">
                  <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                    <img
                      src={noProfile}
                      alt="profileImg"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      name="review"
                      id="rw"
                      cols="30"
                      rows="10"
                      placeholder="Type Your Review Here"
                      className="w-full bg-gray-200 outline-none resize-none p-[10px] Nu text-[18px]"
                    ></textarea>
                    <Rate
                      allowHalf
                      defaultValue={2.5}
                      onChange={(value) => setStar(value)}
                      className="text-[#ffd000] text-[25px]"
                    />
                  </div>
                </div>
                <div className="flex justify-end items-end mt-[25px]">
                  <button
                    className="button Nu"
                    onClick={() => {
                      sendRating(p._id);
                      handleOk();
                    }}
                  >
                    Submit
                  </button>
                </div>
              </Modal>
            </div>

            {/* reviews */}
            <div className="mt-[50px] flex flex-col gap-[25px]">
              {p.ratings.map((i) => (
                <ReviewCard item={i} key={i._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDescription;

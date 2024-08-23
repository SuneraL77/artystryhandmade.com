import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { MdPhone } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import logo from "../../assets/logo5.png";

const ContactForm = () => {
  return (
    <div className="flex md:flex-row flex-col md:h-[650px] md:mx-[100px] ">
      <div className="flex-[1] bg-black flex justify-center items-center">
        <div className="p-[20px] text-white">
          <div className="flex flex-col gap-[10px]">
            <div className="flex justify-center">
              <span className="Nu uppercase text-center flex font-[700] tracking-[2px] md:text-[20px] text-[18px]">
                Contact information
              </span>
            </div>
            <div>
              <span className="md:text-[13px] text-[10px] Nu font-[500] uppercase tracking-[2px] text-center flex ">
                For any inquiries or collaboration opportunities, feel free to
                reach out!
              </span>
            </div>
          </div>

          {/* logo */}
          <div className="flex items-center justify-center mt-[50px]">
            <img src={logo} alt="logo" className="w-[230px]"  />
          </div>

          {/* social media */}
          <div className="flex justify-center">
            <div className="mt-[50px] flex flex-col justify-center  gap-[20px]">
              <div className="flex md:flex-row flex-col items-center gap-[10px]">
                <HiLocationMarker className="text-[25px]" />
                <span className="Nu text-[14px] font-[600] tracking-[2px]">
                Kottawa, Sri Lanka
                </span>
              </div>
              <div className="flex md:flex-row flex-col items-center gap-[10px]">
                <MdPhone className="text-[25px]" />
                <span className="Nu text-[16px] font-[600] tracking-[2px] uppercase">
                +94 72 248 2992
                </span>
              </div>
              <div className="flex md:flex-row flex-col items-center gap-[10px]">
                <IoMdMail className="text-[25px]" />
                <span className="Nu text-[16px] font-[600] tracking-[2px]">
                  info@artystryhandmade.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[2] bg-gray-100 p-[25px] flex flex-col justify-center">
        {/* title */}
        <div className="flex items-center justify-center">
          <span className="Mont text-[28px] font-[700] uppercase tracking-[2px]">
            Write us
          </span>
        </div>

        <div className="flex flex-col mt-[50px] gap-[25px]">
          {/* first name | last name */}
          <div className="flex md:flex-row flex-col gap-[25px] w-full ">
            <div className="w-full">
              <input
                type="text"
                placeholder="First Name"
                className="p-[10px] w-full outline-none border-none bg-gray-200 Nu font-[600] text-[18px]"
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="Last Name"
                className="p-[10px] w-full outline-none border-none bg-gray-200 Nu font-[600] text-[18px]"
              />
            </div>
          </div>

          {/* phone number | email address */}
          <div className="flex md:flex-row flex-col gap-[25px] w-full ">
            <div className="w-full">
              <input
                type="text"
                placeholder="Phone Number"
                className="p-[10px] w-full outline-none border-none bg-gray-200 Nu font-[600] text-[18px]"
              />
            </div>
            <div className="w-full">
              <input
                type="email"
                placeholder="Email Address"
                className="p-[10px] w-full outline-none border-none bg-gray-200 Nu font-[600] text-[18px]"
              />
            </div>
          </div>

          {/* message */}
          <div>
            <textarea
              name="msg"
              id="msg"
              cols="30"
              rows="10"
              placeholder="Enter Your Message Here"
              className="p-[10px] w-full outline-none border-none bg-gray-200 Nu font-[600] text-[18px] resize-none h-full "
            ></textarea>
          </div>

          {/* button */}
          <div className="flex md:justify-end">
            <button className="button Nu md:w-[200px] w-full">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

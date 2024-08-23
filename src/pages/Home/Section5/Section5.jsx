import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { IoGiftSharp } from "react-icons/io5";
import { RiSecurePaymentFill } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";
import { motion } from "framer-motion";

const Section5 = () => {
  return (
    <motion.div
      initial={{ opacity: 1, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex md:justify-evenly md:flex-row flex-col justify-center items-center gap-[25px] md:gap-0"
    >
      {/* item 1 */}
      <div className="flex flex-col items-center text-center w-[280px]">
        <TbTruckDelivery className="text-[50px]" />
        <div>
          <div>
            <span className="text-[18px] Mont uppercase font-[700] tracking-[2px]">
              World wide deliver
            </span>
          </div>
          <div>
            <span className="Nu font-[500]">
              Global delivery solutions: Fast, reliable, everywhere.
            </span>
          </div>
        </div>
      </div>

      {/* item 2 */}
      <div className="flex flex-col items-center text-center w-[280px]">
        <IoGiftSharp className="text-[50px]" />
        <div>
          <div>
            <span className="text-[18px] Mont uppercase font-[700] tracking-[2px]">
              Speciel offers
            </span>
          </div>
          <div>
            <span className="Nu font-[500]">
              Exclusive deals: Limited time, unbeatable discounts.
            </span>
          </div>
        </div>
      </div>

      {/* item 3 */}
      <div className="flex flex-col items-center text-center w-[280px]">
        <RiSecurePaymentFill className="text-[50px]" />
        <div>
          <div>
            <span className="text-[18px] Mont uppercase font-[700] tracking-[2px]">
              Secure Payment
            </span>
          </div>
          <div>
            <span className="Nu font-[500]">
              Protected transactions: Safe, encrypted, hassle-free payments.
            </span>
          </div>
        </div>
      </div>

      {/* item 4 */}
      <div className="flex flex-col items-center text-center w-[280px]">
        <MdOutlineSupportAgent className="text-[50px]" />
        <div>
          <div>
            <span className="text-[18px] Mont uppercase font-[700] tracking-[2px]">
              24 Hours Support
            </span>
          </div>
          <div>
            <span className="Nu font-[500]">
              Round-the-clock assistance: Reliable help whenever needed.
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Section5;

import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const TermsAndCondition = () => {
  return (
    <div>
      {/* header */}
      <div className="sticky top-0 w-full z-[100000]">
        <div>
          <Header />
        </div>
      </div>

      {/* content */}
      <div className="md:px-[100px] px-[20px] mt-[50px] mb-[100px]">
        {/* title */}
        <div className="mb-[50px] flex items-center gap-[10px]">
          <div className="w-[6px] h-[25px] bg-black"></div>
          <h1 className="text-[20px] font-[700] text-gray-900 uppercase md:tracking-[5px] As tracking-[3px]">
            Terms and Conditions
          </h1>
        </div>

        {/* sections */}
        <div className="flex flex-col gap-[50px]">
          <div>
            {/* title */}
            <div className="mb-[25px] flex items-center gap-[10px]">
              <div className="w-[6px] h-[25px] bg-black"></div>
              <h1 className="text-[18px] font-[700] text-gray-900 uppercase md:tracking-[5px] tracking-[3px] As">
                Refund & Exchange Policy
              </h1>
            </div>
            <span className="Nu text-[18px] font-[500]">
              At "Artystry Hand Made Ceylon," we take pride in the quality and
              craftsmanship of our handmade products. Your satisfaction is our
              top priority. If you are not completely satisfied with your
              purchase, we're here to help.
            </span>
            <div className="mt-[20px]">
              <span className="Nu text-[18px] font-[500]">
                <strong>Natural Characteristics of Materials:</strong> Please
                note Please note that our products are made from genuine natural
                materials, which may include natural variations such as scars,
                scratch marks, and unique patterns. These characteristics are
                not defects but are part of the natural beauty, making each item
                unique. We carefully select materials to ensure the highest
                quality for your order.
              </span>
            </div>
            <div className="mt-[20px]">
              <span className="Nu text-[18px] font-[500]">
                <strong>Quality Check and Shipping Issues:</strong> We carefully
                inspect your order before shipping to ensure it meets our high
                standards. If your package is damaged during shipping, please
                understand that it is the postal service's responsibility. In
                such cases, we are not able to provide a refund. Instead, return
                the damaged order to us, and we will replace it with a new one
                or repair it.
              </span>
            </div>
            <div className="mt-[20px]">
              <span className="Nu text-[18px] font-[500]">
                <strong>Refund Eligibility:</strong> To be eligible for a
                refund, please ensure that:
                <ul className="list-disc list-inside mt-[10px]">
                  <li>
                    The item must be unused and in the same condition that you
                    received it.
                  </li>
                  <li>The item must be in the original packaging.</li>
                  <li>You have the receipt or proof of purchase.</li>
                </ul>
                Please note, we do not provide refunds for items returned simply
                due to a change of mind.
              </span>
            </div>
            <div className="mt-[20px]">
              <span className="Nu text-[18px] font-[500]">
                <strong>Refund Time Frame:</strong> You can request a refund
                within 30 days of the purchase date. Unfortunately, we cannot
                offer a refund or exchange after this period.
              </span>
            </div>
            <div className="mt-[20px]">
              <span className="Nu text-[18px] font-[500]">
                <strong>Non-Refundable Items:</strong> Certain items are
                non-refundable, including:
                <ul className="list-disc list-inside mt-[10px]">
                  <li>Custom or personalized orders</li>
                  <li>Gift cards</li>
                  <li>Sale items</li>
                </ul>
              </span>
            </div>
            <div className="mt-[20px]">
              <span className="Nu text-[18px] font-[500]">
                <strong>How to Request a Refund:</strong> To request a refund,
                please follow these steps:
                <ul className="list-decimal list-inside mt-[10px]">
                  <li>
                    Contact Us: Send a WhatsApp message to +94 72 248 2992 with
                    your order number, proof of purchase, and reason for the
                    refund.
                  </li>
                  <li>
                    Return the Item: After contacting us, send the item to us.
                    We will provide our address.
                  </li>
                  <li>
                    Inspection and Approval: Once we receive your item, we will
                    inspect it and notify you of the approval or rejection of
                    your refund. If approved, we will determine whether to issue
                    a refund, repair the item, or send a replacement.
                  </li>
                </ul>
              </span>
            </div>
            <div className="mt-[20px]">
              <span className="Nu text-[18px] font-[500]">
                <strong>Refund Processing:</strong> If your return is approved,
                we will initiate a refund to your original method of payment.
                The refund will be processed within 7-10 business days from the
                approval date. Depending on your card issuer’s policies, it may
                take additional time for the credit to appear on your account.
              </span>
            </div>
            <div className="mt-[20px]">
              <span className="Nu text-[18px] font-[500]">
                <strong>Exchanges:</strong> We only replace items if they are
                defective or damaged. If you need to exchange an item for the
                same product, please contact us at info@artystryhandmade.com or
                via WhatsApp at +94 72 248 2992.
              </span>
            </div>
            <div className="mt-[20px]">
              <span className="Nu text-[18px] font-[500]">
                <strong>Contact Us:</strong> If you have any questions about our
                refund policy, please contact us at info@artystryhandmade.com or
                via WhatsApp at +94 72 248 2992.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default TermsAndCondition;

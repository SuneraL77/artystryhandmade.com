import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const PrivacyPolicy = () => {
  return (
    <div>
      {/* header */}
      <div className="sticky top-[-35px] w-full z-[100000]">
        <div>
          <Header />
        </div>
      </div>

      {/* content */}
      <div className="md:px-[100px] px-[20px] mt-[50px] mb-[100px]">
        {/* title */}
        <div className="mb-[50px] flex items-center gap-[10px]">
          <div className="w-[6px] h-[25px] bg-black"></div>
          <h1 className="text-[20px] font-[700] text-gray-900 As uppercase md:tracking-[5px] tracking-[3px]">
            Privacy Policy
          </h1>
        </div>

        {/* sections */}
        <div className="flex flex-col gap-[50px]">
          <div>
            {/* title */}
            <div className="mb-[25px] flex items-center gap-[10px]">
              <div className="w-[6px] h-[25px] bg-black"></div>
              <h1 className="text-[18px] font-[700] text-gray-900 As uppercase md:tracking-[5px] tracking-[3px]">
                Introduction
              </h1>
            </div>
            <span className="Nu text-[18px] font-[500]">
              At Artystry Handmade, we prioritize the privacy and security of
              our users. This Privacy Policy outlines how we collect, use, and
              protect your personal information when you interact with our
              website.
            </span>
          </div>

          <div>
            {/* title */}
            <div className="mb-[25px] flex items-center gap-[10px]">
              <div className="w-[6px] h-[25px] bg-black"></div>
              <h1 className="text-[18px] font-[700] text-gray-900 As uppercase md:tracking-[5px] tracking-[3px]">
                Information We Collect
              </h1>
            </div>
            <span className="Nu text-[18px] font-[500]">
              We may collect personal information such as your name, email
              address, shipping address, and payment details when you place an
              order on our website. Additionally, we may collect non-personal
              information such as your IP address, browser type, and device
              information for analytical purposes.
            </span>
          </div>

          <div>
            {/* title */}
            <div className="mb-[25px] flex items-center gap-[10px]">
              <div className="w-[6px] h-[25px] bg-black"></div>
              <h1 className="text-[18px] font-[700] text-gray-900 As uppercase md:tracking-[5px] tracking-[3px]">
                How We Use Your Information
              </h1>
            </div>

            <div>
              <span className="Nu text-[18px] font-[500]">
                We use the information we collect to process orders, communicate
                with you about your purchase, and provide customer support. We
                may also use your information to improve our products and
                services, personalize your experience on our website, and send
                promotional offers or newsletters with your consent.
              </span>
            </div>
          </div>

          <div>
            {/* title */}
            <div className="mb-[25px] flex items-center gap-[10px]">
              <div className="w-[6px] h-[25px] bg-black"></div>
              <h1 className="text-[18px] font-[700] text-gray-900 As uppercase md:tracking-[5px] tracking-[3px]">
                Data Security
              </h1>
            </div>

            <div>
              <span className="Nu text-[18px] font-[500]">
                We employ industry-standard security measures to protect your
                personal information from unauthorized access, disclosure,
                alteration, or destruction. Your payment information is
                encrypted using secure socket layer technology (SSL) and stored
                securely on our servers.
              </span>
            </div>
          </div>

          <div>
            {/* title */}
            <div className="mb-[25px] flex items-center gap-[10px]">
              <div className="w-[6px] h-[25px] bg-black"></div>
              <h1 className="text-[18px] font-[700] text-gray-900 As uppercase md:tracking-[5px] tracking-[3px]">
                Third-Party Disclosure
              </h1>
            </div>

            <div>
              <span className="Nu text-[18px] font-[500]">
                We do not sell, trade, or otherwise transfer your personal
                information to third parties without your consent, except as
                required by law or to facilitate order fulfillment (e.g.,
                sharing shipping information with our courier partners).
              </span>
            </div>
          </div>

          <div>
            {/* title */}
            <div className="mb-[25px] flex items-center gap-[10px]">
              <div className="w-[6px] h-[25px] bg-black"></div>
              <h1 className="text-[18px] font-[700] text-gray-900 As uppercase md:tracking-[5px] tracking-[3px]">
                Cookies
              </h1>
            </div>

            <div>
              <span className="Nu text-[18px] font-[500]">
                We use cookies and similar technologies to enhance your browsing
                experience, analyze website traffic, and track user
                interactions. You have the option to disable cookies in your
                browser settings, although this may affect certain
                functionalities of our website.
              </span>
            </div>
          </div>

          <div>
            {/* title */}
            <div className="mb-[25px] flex items-center gap-[10px]">
              <div className="w-[6px] h-[25px] bg-black"></div>
              <h1 className="text-[18px] font-[700] text-gray-900 As uppercase md:tracking-[5px] tracking-[3px]">
                Your Rights
              </h1>
            </div>

            <div>
              <span className="Nu text-[18px] font-[500]">
                You have the right to access, update, or delete your personal
                information at any time. You may also opt out of receiving
                promotional communications from us by following the unsubscribe
                instructions included in our emails.
              </span>
            </div>
          </div>

          <div>
            {/* title */}
            <div className="mb-[25px] flex items-center gap-[10px]">
              <div className="w-[6px] h-[25px] bg-black"></div>
              <h1 className="text-[18px] font-[700] text-gray-900 As uppercase md:tracking-[5px] tracking-[3px]">
                Changes to this Policy
              </h1>
            </div>

            <div>
              <span className="Nu text-[18px] font-[500]">
                We reserve the right to update or revise this Privacy Policy
                periodically. Any changes will be posted on this page, and the
                effective date will be updated accordingly. We encourage you to
                review this Policy regularly to stay informed about how we
                collect, use, and protect your information.
              </span>
            </div>
          </div>

          <div>
            {/* title */}
            <div className="mb-[25px] flex items-center gap-[10px]">
              <div className="w-[6px] h-[25px] bg-black"></div>
              <h1 className="text-[18px] font-[700] text-gray-900 As uppercase md:tracking-[5px] tracking-[3px]">
                Changes to this Policy
              </h1>
            </div>

            <div>
              <span className="Nu text-[18px] font-[500]">
                If you have any questions or concerns about our Privacy Policy
                or the handling of your personal information, please contact us
                at info@artystryhandmade.com .
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

export default PrivacyPolicy;

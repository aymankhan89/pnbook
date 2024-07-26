import React from "react";

function HeroSection({
  logoDesciption = "Trusted by 100 SMBs around the globe",
  title = "Elevate Your Business With Professional Accounting Services",
  description = "Unlock your business's potential with our expert accounting services. Our dedicated team ensures precision and reliability, helping you navigate financial complexities effortlessly. Let us handle the numbers while you focus on growth.",
  primaryButtonText = "Get started",
  primaryButtonLink = "#",
  secondaryButtonText = "Get In Touch",
  secondaryButtonLink = "#",
}) {
  return (
    <div className="w-full flex justify-center items-center">
      <section className="bg-[#214651] mt-[56px] w-[90%] rounded-[14px] h-auto lg:h-[600px] flex flex-col lg:flex-row">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 lg:py-16 lg:grid lg:grid-cols-12">
          <div className="flex flex-col col-span-12 lg:col-start-1 lg:col-end-6 items-start lg:items-start">
            <div className="flex flex-col gap-[13px] pb-10">
              <img className="w-[85px] h-[21px]" src="/trustLogos.svg" alt="" />
              <p className="font-[400] text-[15px] text-[#FBFBFB]">
                {logoDesciption}
              </p>
            </div>
            <div className="w-full lg:w-[738px] flex flex-col gap-[25px]">
              <h1 className="text-[32px] lg:text-[45px] font-[500] text-[#F9F9F9] leading-[40px] lg:leading-[60px]">
                {title}
              </h1>
              <p className="font-[400] text-[14px] lg:text-[17px] text-[#FBFBFB]">
                {description}
              </p>
            </div>
            <div className="flex gap-[20px] pt-[30px] lg:pt-[60px]">
              <a
                href={primaryButtonLink}
                className="text-[#214651] border text-[14px] lg:text-[16px] font-[600] h-[42px] w-[121px] rounded-[11px] bg-[#FBFBFB] flex items-center justify-center"
              >
                {primaryButtonText}
              </a>
              <a
                href={secondaryButtonLink}
                className="text-[#FBFBFB] border text-[14px] lg:text-[16px] font-[400] h-[42px] w-[121px] rounded-[11px] flex items-center justify-center"
              >
                {secondaryButtonText}
              </a>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row col-span-12 lg:col-start-8 lg:col-end-13 items-center mt-8 lg:mt-0">
            {/* Mobile Image */}
            <div className="block lg:hidden w-full flex justify-center">
              <img
                className="w-[90%] max-w-[400px] h-auto"
                src="/Subtract.svg" // Mobile image path
                alt="mockup mobile"
              />
            </div>
            {/* Desktop Image */}
            <div className="hidden lg:flex w-full lg:w-auto justify-center">
              <img
                className="w-[90%] max-w-[600px] h-auto"
                src="/herSectionImg.svg" // Desktop image path
                alt="mockup"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;

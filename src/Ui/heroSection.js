import React from "react";

// Define an array of content objects
const heroContent = [
  {
    logoDescription: "Trusted by 100 SMBs around the globe",
    title: (
      <>
        Elevate Your{" "}
        <span className="text-[50px] font-[400] font-[Playfair] italic text-[#FFC17A]">
          Business
        </span>{" "}
        With Professional{" "}
        <span className="text-[50px] font-[400] font-[Playfair] italic text-[#FFC17A]">
          Accounting Services
        </span>
      </>
    ),
    description:
      "Unlock your business's potential with our expert accounting services. Our dedicated team ensures precision and reliability, helping you navigate financial complexities effortlessly. Let us handle the numbers while you focus on growth.",
    primaryButtonText: "Get started",
    primaryButtonLink: "#contact-form", // Scrolls to contact form
    secondaryButtonText: "Get In Touch",
    secondaryButtonLink: "/contact", // Separate contact page
    mobileImage: "/Subtract.svg", // Mobile image path
    desktopImage: "/herSectionImg.svg", // Desktop image path
  },
];

function HeroSection({
  logoDescription,
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  mobileImage,
  desktopImage,
}) {
  return (
    <div className="w-full flex justify-center items-center">
      <section className="bg-[#214651] mt-[56px] w-[90%] rounded-[14px] h-auto lg:h-[600px] flex flex-col lg:flex-row">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 lg:py-16 lg:grid lg:grid-cols-12">
          <div className="flex flex-col col-span-12 lg:col-start-1 lg:col-end-6 items-start lg:items-start">
            <div className="flex flex-col gap-[13px] pb-10">
              <img className="w-[85px] h-[21px]" src="/trustLogos.svg" alt="" />
              <p className="text-[15px] font-[400] text-[#F5F5F5]">
                {logoDescription}
              </p>
            </div>
            <div className="w-full lg:w-[738px] flex flex-col gap-[25px]">
              <h1 className="text-[50px] font-[500] text-[#F5F5F5] leading-[60px]">
                {title}
              </h1>
              <p className="text-[17px] font-[400] text-[#F5F5F5]">
                {description}
              </p>
            </div>
            <div className="flex gap-5 pt-7 lg:pt-14">
              <a
                href={primaryButtonLink}
                className="text-[#214651] border text-sm lg:text-base font-semibold h-[42px] w-[121px] rounded-[11px] bg-[#FBFBFB] flex items-center justify-center"
              >
                {primaryButtonText}
              </a>
              <a
                href={secondaryButtonLink}
                className="text-[#FBFBFB] border text-sm lg:text-base font-normal h-[42px] w-[121px] rounded-[11px] flex items-center justify-center"
              >
                {secondaryButtonText}
              </a>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row col-span-12 lg:col-start-8 lg:col-end-13 items-center mt-8 lg:mt-0">
            {/* Mobile Image */}
            <div className="lg:hidden w-full flex justify-center">
              <img
                className="w-[90%] max-w-[400px] h-auto"
                src={mobileImage}
                alt="mockup mobile"
              />
            </div>
            {/* Desktop Image */}
            <div className="hidden lg:flex w-full lg:w-auto justify-center">
              <img
                className="w-[90%] max-w-[600px] h-auto"
                src={desktopImage}
                alt="mockup"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function App() {
  // Choose the content to be displayed
  const content = heroContent[0];

  return (
    <>
      <HeroSection
        logoDescription={content.logoDescription}
        title={content.title}
        description={content.description}
        primaryButtonText={content.primaryButtonText}
        primaryButtonLink={content.primaryButtonLink}
        secondaryButtonText={content.secondaryButtonText}
        secondaryButtonLink={content.secondaryButtonLink}
        mobileImage={content.mobileImage}
        desktopImage={content.desktopImage}
      />
    </>
  );
}

export default App;

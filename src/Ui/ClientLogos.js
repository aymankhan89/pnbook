import React from "react";

const ClientLogosSection = ({ heading, logos }) => {
  const getHighlightedText = (text) => {
    const parts = text.split(/(Companies Worldwide)/);
    return parts.map((part, index) =>
      part === "Companies Worldwide" ? (
        <span key={index} className="italic text-[#FFC17A]">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="pt-[100px]">
      <div className="bg-[#214651] text-white flex flex-col md:flex-row px-[20px] md:px-[100px] py-[30px] gap-[20px] md:gap-[300px]">
        <div className="flex-1">
          <h2 className="text-[25px] font-[500] w-full md:w-[355px] mb-[20px] md:mb-0">
            {getHighlightedText(heading)}
          </h2>
        </div>
        <div className="grid grid-cols-2 md:flex  md:gap-[45px] justify-start">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-20 w-20"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ClientLogos = () => {
  const mainHeading = "Trusted by Leading Companies Worldwide";
  const Logos = [
    { src: "/Relume.svg", alt: "Relume Logo" },
    { src: "/Webflow.svg", alt: "Webflow Logo" },
    { src: "/Relume.svg", alt: "Relume Logo" },
    { src: "/Webflow.svg", alt: "Webflow Logo" },
    { src: "/Relume.svg", alt: "Relume Logo" },
  ];

  return (
    <div>
      <ClientLogosSection heading={mainHeading} logos={Logos} />
    </div>
  );
};

export default ClientLogos;

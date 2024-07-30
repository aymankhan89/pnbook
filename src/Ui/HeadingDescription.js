import React from "react";

const HeadingDescription = ({ heading, description, highlightedWords }) => {
  const getHighlightedText = (text, highlights) => {
    const parts = text.split(new RegExp(`(${highlights.join("|")})`, "gi"));
    return parts.map((part, index) =>
      highlights.includes(part) ? (
        <span
          key={index}
          className="font-[500] font-[Playfair] italic text-[#214651] text-[18px]  lg:text-[32px]"
        >
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="flex flex-col items-start">
      <div className=" ">
        <div className="flex flex-col gap-[10px]  mb-[30px] md:mb-[55px]">
          <p className="text-[20px] md:text-[32px] tracking-normal text-[#202020] lg:text-[32px] font-[500]">
            {getHighlightedText(heading, highlightedWords)}
          </p>
          <p className="text-[12px]  md:w-[432px] lg:text-[16px] font-[400] text-[#202020] text-left   w-full">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeadingDescription;

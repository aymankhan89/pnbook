import React from "react";

// Card Component definition
const Card = ({ percentage, heading, description, gridColumn, gridRow }) => (
  <div
    className={`bg-[#EBDAD2] p-[32px] rounded-[14px] ${gridColumn} ${gridRow}`}
  >
    <div className="text-left mb-4">
      <div className="text-[35px] font-bold text-[#214651]">{percentage}</div>
    </div>
    <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold text-black text-left mb-2">
      {heading}
    </h2>
    <p className="text-black text-[14px] md:text-[16px] lg:text-[18px] text-left">
      {description}
    </p>
  </div>
);

function AllCards() {
  const cardData = [
    {
      percentage: "30%",
      heading: "Short heading goes here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      gridColumn: "col-start-1 col-end-2",
      gridRow: "row-start-1 row-end-2",
    },
    {
      percentage: "30%",
      heading: "Short heading goes here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      gridColumn: "col-start-2 col-end-3",
      gridRow: "row-start-1 row-end-3",
    },
    {
      percentage: "30%",
      heading: "Short heading goes here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      gridColumn: "col-start-1 col-end-2",
      gridRow: "row-start-2 row-end-4",
    },
    {
      percentage: "30%",
      heading: "Short heading goes here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      gridColumn: "col-start-2 col-end-3",
      gridRow: "row-start-3 row-end-4",
    },
  ];

  const mainHeading = "Trust in Our Expert Accountants";
  const highlightedWords = ["Expert Accountants"];
  const mainDescription =
    "Unlock your business's potential with our expert accounting services. Our dedicated team ensures.";

  const getHighlightedText = (text, highlights) => {
    const parts = text.split(new RegExp(`(${highlights.join("|")})`, "gi"));
    return parts.map((part, index) =>
      highlights.includes(part) ? (
        <span
          key={index}
          className="font-[500] italic text-blue-900 text-[24px] md:text-[28px] lg:text-[32px]"
        >
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="w-full flex justify-center pt-[min(120px,max(70px,8.785vw))]">
      <div className="p-8 w-[90%]">
        <div className="flex flex-col gap-[20px] mb-[55px]">
          <p className="text-[24px] md:text-[28px] lg:text-[32px] font-[500]">
            {getHighlightedText(mainHeading, highlightedWords)}
          </p>
          <p className="text-[14px] md:text-[16px] lg:text-[18px] font-[400] text-[#202020] text-left mb-8 w-full md:w-[462px]">
            {mainDescription}
          </p>
        </div>
        {/* Mobile 2x2 grid with specified grid positions */}
        <div className="grid grid-cols-2 grid-rows-3 gap-[20px] md:hidden">
          {cardData.map((card, index) => (
            <Card
              key={index}
              percentage={card.percentage}
              heading={card.heading}
              description={card.description}
              gridColumn={card.gridColumn}
              gridRow={card.gridRow}
            />
          ))}
        </div>
        {/* Desktop layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
          {cardData.map((card, index) => (
            <Card
              key={index}
              percentage={card.percentage}
              heading={card.heading}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllCards;

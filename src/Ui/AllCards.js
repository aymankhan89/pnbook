import React from "react";
import HeadingDescription from "./HeadingDescription";

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
  const Card = ({ percentage, heading, description, gridColumn, gridRow }) => (
    <div
      className={`bg-[#EBDAD2] p-4 rounded-[14px] ${gridColumn} ${gridRow} md:p-[32px]`}
    >
      <div className="text-left mb-2 md:mb-4">
        <div className="text-[24px] md:text-[35px] font-bold text-[#214651]">
          {percentage}
        </div>
      </div>
      <h2 className="text-[14px] md:text-[16px] lg:text-[18px] font-semibold text-black text-left mb-2">
        {heading}
      </h2>
      <p className="text-black text-[12px] md:text-[14px] lg:text-[16px] text-left">
        {description}
      </p>
    </div>
  );
  return (
    <div className="w-full flex flex-col items-center pt-[min(60px,max(40px,5vw))]">
      <div className="p-4 md:p-8 w-[90%] md:w-[80%]">
        <HeadingDescription
          heading={mainHeading}
          description={mainDescription}
          highlightedWords={highlightedWords}
        />
        {/* Mobile 2x2 grid with specified grid positions */}
        <div className="grid grid-cols-2 grid-rows-2 gap-[10px] md:hidden">
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

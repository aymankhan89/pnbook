import React from "react";

// ServicesImg Component
const ServicesImg = () => (
  <div
    className="bg-[url('/public/whyimg.svg')] bg-cover bg-center "
    style={{ width: "350px", height: "450px" }}
  ></div>
);

const Card = ({ heading, description }) => (
  <div className="">
    <div>
      <h3 className="text-[22px] font-[500] text-[#214651] mb-1">{heading}</h3>
      <p className="text-[#202020] font-[400] text-[15px]">{description}</p>
    </div>
  </div>
);

const Whysec = () => {
  const cardData = [
    {
      heading: "Comprehensive Financial Tracking",
      description:
        "Maintain clear financial records with detailed tracking of income and expenses. Easily monitor cash flow, identify spending patterns, and make informed financial decisions with ProficientNow Books.",
    },
    {
      heading: "Automated Invoicing and Payments",
      description:
        "Generate professional invoices and set automatic payment reminders. Streamline your accounts receivable process, improve cash flow, and reduce manual tracking errors with ProficientNow Books.",
    },
    {
      heading: "Real-Time Financial Insights",
      description:
        "Access real-time reporting and analytics to gain insights into your financial health. Identify trends, forecast performance, and make strategic decisions for growth and profitability with ProficientNow Books.",
    },
  ];

  const mainHeading = "How We Make Finances Easy";
  const highlightedWords = [" Finances Easy"];
  const mainDescription =
    "Unlock your business's potential with our expert accounting services. Our dedicated.";

  const getHighlightedText = (text, highlights) => {
    const parts = text.split(new RegExp(`(${highlights.join("|")})`, "gi"));
    return parts.map((part, index) =>
      highlights.includes(part) ? (
        <span key={index} className="font-[500] italic text-[#214651]">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="pt-[120px]  text-black flex w-full justify-center items-center">
      <div className="relative w-[85%] flex">
        <div className="flex-1 ">
          <div className="pb-[60px]">
            <p className="text-[35px] font-[500] mb-4 w-[457px]">
              {getHighlightedText(mainHeading, highlightedWords)}
            </p>
            <p className="text-[17px] font-[400] mb-8 w-[384px]">
              {mainDescription}
            </p>
          </div>
          <div className="flex flex-col gap-[65px] w-[572px]">
            {cardData.map((card, index) => (
              <Card
                key={index}
                heading={card.heading}
                description={card.description}
              />
            ))}
          </div>
        </div>
        <div className="mt-[200px]">
          <ServicesImg />
        </div>
      </div>
    </div>
  );
};

export default Whysec;

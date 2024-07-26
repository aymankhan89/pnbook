import React from 'react';

// Custom SVG Icon Component
const CustomIcon = (props) => (
  <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="13.5" cy="13.5" r="13.5" fill="#EFB16B"/>
    <path d="M8.87529 13.2263C8.62435 13.227 8.37873 13.2987 8.16685 13.4332C7.95497 13.5677 7.7855 13.7594 7.67803 13.9862C7.57057 14.213 7.5295 14.4655 7.55959 14.7147C7.58968 14.9638 7.68969 15.1993 7.84805 15.394L11.2239 19.5294C11.3443 19.6789 11.4986 19.7975 11.674 19.8753C11.8494 19.9532 12.0408 19.9881 12.2324 19.9771C12.6422 19.9551 13.0121 19.7359 13.248 19.3755L20.2605 8.08177C20.2617 8.0799 20.2629 8.07802 20.2641 8.07618C20.3299 7.97515 20.3086 7.77494 20.1727 7.64917C20.1354 7.61463 20.0914 7.58809 20.0435 7.57119C19.9955 7.5543 19.9446 7.54739 19.8939 7.55091C19.8432 7.55443 19.7937 7.56829 19.7486 7.59165C19.7034 7.61501 19.6635 7.64736 19.6313 7.68672C19.6288 7.68981 19.6262 7.69286 19.6236 7.69586L12.5513 15.6864C12.5244 15.7169 12.4917 15.7416 12.4552 15.7593C12.4186 15.7769 12.3789 15.7872 12.3383 15.7894C12.2978 15.7916 12.2572 15.7857 12.219 15.7721C12.1807 15.7584 12.1456 15.7373 12.1155 15.71L9.76838 13.5741C9.5246 13.3506 9.20599 13.2266 8.87529 13.2263Z" fill="white"/>
  </svg>
);

// ServicesImg Component
export const ServicesImg = () => (
  <div className="absolute inset-0 bg-[url('/public/servicesImg.svg')] bg-cover bg-center ">
    <div className="absolute inset-0 bg-[#214651] opacity-[87%]"></div>
  </div>
);

const Card = ({ percentage, heading, description }) => (
  <div className="  flex gap-[18px]">
    <div className="">
      <CustomIcon />
    </div>
    <div>
      <h2 className="text-[20px] font-[500] text-[#F9F9F9] text-left mb-2">{heading}</h2>
      <p className="text-[#F9F9F9] font-[400] text-[14px] text-left">{description}</p>
    </div>
  </div>
);

const Services = () => {
  const cardData = [
    {
    
      heading: "Comprehensive Bookkeeping",
      description: "Detailed tracking and recording of all financial transactions, ensuring accuracy and up-to-date financial records."
    },
    {
    
      heading: "Financial Reporting",
      description: "Detailed tracking and recording of all financial transactions, ensuring accuracy and up-to-date financial records."
    },
    {
    
      heading: "Tax Preparation and Compliance",
      description: "Assistance with tax filing and compliance, including preparation of tax returns and ensuring adherence to relevant tax regulations."
    },
    {
    
      heading: "Payroll Management",
      description: "Detailed tracking and recording of all financial transactions, ensuring accuracy and up-to-date financial records."
    }
  ];

  const mainHeading = "Our Expert Services Tailored to Your Business Needs";
  const highlightedWords = [" Expert Services","Business"];
  const mainDescription = "Discover our diverse range of professional services, expertly designed to address your unique business needs and drive growth and efficiency.";

  const getHighlightedText = (text, highlights) => {
    const parts = text.split(new RegExp(`(${highlights.join('|')})`, 'gi'));
    return parts.map((part, index) =>
      highlights.includes(part)
        ? <span key={index} className="font-[500] italic text-[#FFC17A] text-[40px]">{part}</span>
        : part
    );
  };

  return (
    <div className='pt-[120px]'>
    <div className='relative w-full flex justify-center  '>
      <ServicesImg />
      <div className="relative p-8 flex px-[30px] py-[128px] ">
        <div className="flex-1 flex flex-col justify-center  text-left text-white z-10">
          <p className="text-[40px] font-[500] mb-4 w-[565px]">
            {getHighlightedText(mainHeading, highlightedWords)}
          </p>
          <p className="text-[17px] font-[400] mb-8 w-[506px] ">
            {mainDescription}
          </p>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-[60px] ">
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
        </div>

  );
};

export default Services;

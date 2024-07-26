import React from 'react';


const ClientLogosSection = ({ heading, logos }) => {
  console.log("logos", logos)
  const getHighlightedText = (text) => {
    const parts = text.split(/(Companies Worldwide)/);
    return parts.map((part, index) =>
      part === 'Companies Worldwide' ? (
        <span key={index} className=" italic text-[#FFC17A]">{part}</span>
      ) : (
        part
      )
    );
  };
  console.log(logos)
  console.log(heading)

  return (
    <div className='pt-[100px]'>
    <div className="bg-[#214651] text-white  flex px-[100px]  py-[30px] gap-[300px]   ">
        <div>
      <h2 className="text-[25px] font-[500] flex-1 w-[355px] ">{getHighlightedText(heading)}</h2>
      </div>
      <div className="flex gap-[45px] ">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={`${logo.src}`}
            alt={logo.alt}
            className="h-20 w-20 "
          />
        ))}
      </div>
    </div>
    </div>
  );
};


const ClientLogos = () => {
  const mainHeading = 'Trusted by Leading Companies Worldwide';
  const Logos = [
    { src: '/Relume.svg', alt:"asdn" },
    { src: '/Webflow.svg', alt:"asdn" },
    { src: '/Relume.svg', alt:"asdn" },
    { src: '/Webflow.svg', alt:"asdn" },
    { src: '/Relume.svg', alt:"asdn" },
    
  ];

  return (
    <div>
      <ClientLogosSection heading={mainHeading} logos={Logos} />
    </div>
  );
};

export default ClientLogos;

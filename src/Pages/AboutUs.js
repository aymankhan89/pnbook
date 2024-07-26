import React, { useEffect, useState } from "react";
import Navbar from "../Ui/navbar";
import AllCards from "../Ui/AllCards";
import ClientLogos from "../Ui/ClientLogos";
import Whysec from "../Ui/Whysec";
import Testimonial from "../Ui/Testimonial";
import Footer from "../Ui/Footer";
import VisionMission from "../Ui/VisionMission";
// import maskGroup from './path/to/your/image.png'; // Update the path to your image

const MissionSection = () => {
  const [content, setContent] = useState({});

  useEffect(() => {
    // Replace this with your actual fetch call
    const fetchContent = async () => {
      const data = {
        title: "Discover Our Mission, Values, and More",
        buttonText: "Get in touch",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. 
                      Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit 
                      non nulla in amet pellentesque. Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. 
                      Amet pellentesque sit pulvinar lorem mi a, euismod risus rhoncus. Elementum ullamcorper nec, habitasse vulputate. 
                      Eget dictum quis est sed egestas tellus, a lectus. Quam ullamcorper in fringilla arcu aliquet fames arcu. 
                      Lacinia eget faucibus urna, nam risus nec elementum cras porta. Sed elementum, sed dolor purus dolor dui. Ut dictum nulla pulvinar.`,
      };
      setContent(data);
    };

    fetchContent();
  }, []);

  const mainHeading = "Discover Our Mission, Values, and More";
  const highlightedWords = ["Mission, Values,"];

  const getHighlightedText = (text, highlights) => {
    const parts = text.split(new RegExp(`(${highlights.join("|")})`, "gi"));
    return parts.map((part, index) =>
      highlights.includes(part) ? (
        <span
          key={index}
          className="font-[500] italic text-[#214651] text-[32px]"
        >
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Navbar />

      <div className=" p-8 grid grid-cols-2 md:grid-cols-2 gap-8  items-start w-[90%] pt-[min(120px,max(70px,8.785vw))]">
        <div className="space-y-4 w-[305px]">
          <p className="text-[32px] font-[500]">
            {getHighlightedText(mainHeading, highlightedWords)}
          </p>
          <button className="bg-[#214651] text-white px-6 py-2 rounded-[15px]">
            {content.buttonText}
          </button>
        </div>
        <div>
          <p className="text-lg text-gray-700">{content.description}</p>
        </div>
        <div className="col-start-1 col-end-3 pt-[min(110px,max(60px,7.785vw))] ">
          <img
            src="/AboutUsImg.svg"
            alt="Mission"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      <AllCards />
      <div className="w-full">
        <ClientLogos />
      </div>
      <Whysec />
      <VisionMission />
      <Testimonial />

      <div className="w-[100%]">
        <Footer />
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className="App">
      <MissionSection />
    </div>
  );
};

export default AboutUs;

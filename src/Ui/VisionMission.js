import PropTypes from "prop-types";

const VisionMission = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row pt-[min(120px,max(70px,8.785vw))]  items-start justify-center w-full px-[1.25rem] box-border max-w-full text-left text-[2.813rem] text-color-neutral-white font-playfair-display lg:pb-[4.625rem] mq825:pb-[3rem] ${className}`}
    >
      <div className="w-full  items-start w justify-start gap-[7.812rem] mq450:gap-[1rem] mq825:gap-[1.938rem] mq1425:gap-[3.875rem]">
        <div className="self-stretch flex flex-col md:flex md:flex-row    items-start justify-start gap-[3.125rem]  ">
          <div className=" rounded-[15px] px-[29px] py-[27px] bg-[#214651] text-[#F5F5F5] md:flex  items-center justify-between md:py-[5.062rem] md:px-[3.125rem] box-border   gap-[1.25rem]  mq825:grid grid-cols-  mq825:items-center ">
            <h1 className="m-0  relative  tracking-[0.01em] text-center md:text-left  italic font-medium font-inherit shrink-0 text-[35px] md:text-[45px] mq825:text-center">
              Our Vision
            </h1>
            <div className="lg:w-[27rem] flex  items-start justify-start pt-[0.375rem]  box-border text-[0.938rem] font-text-regular-normal mq825:w-full mq825:text-[0.875rem] mq825:text-center">
              <div className="self-stretch relative tracking-[0.01em] text-[15px]  md:w-full text-center md:text-left md:text-[15px] leading-[1.688rem] mq825:leading-[1.5rem]">
                Access real-time reporting and analytics to gain insights into
                your financial health. Identify trends, forecast performance,
                and make strategic decisions for growth and profitability with
                ProficientNow Books.
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-[15px] px-[29px] py-[27px] bg-[#EBFFC1] text-[#214651] flex flex-col md:flex-row items-center    box-border md:py-[5.062rem] md:px-[3.125rem]    gap-[1.25rem] text-darkslategray-100  ">
            <h1 className="m-0 md: relative  tracking-[0.01em] text-center md:text-left  italic font-medium font-inherit shrink-0 text-[35px] md:text-[45px] mq825:text-center">
              Our Mission{" "}
            </h1>
            <div className="lg:w-[27rem] flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem] box-border text-[0.938rem] font-text-regular-normal  mq825:text-[0.875rem] mq825:text-center">
              <div className="self-stretch relative tracking-[0.01em] text-[15px] w-[284px] md:w-full text-center md:text-left md:text-[15px] leading-[1.688rem] mq825:leading-[1.5rem]">
                Access real-time reporting and analytics to gain insights into
                your financial health. Identify trends, forecast performance,
                and make strategic decisions for growth and profitability with
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

VisionMission.propTypes = {
  className: PropTypes.string,
};

export default VisionMission;

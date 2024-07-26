import PropTypes from "prop-types";

const VisionMission = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row pt-[min(120px,max(70px,8.785vw))]   items-start justify-center w-full px-[1.25rem]  box-border max-w-full text-left text-[2.813rem] text-color-neutral-white font-playfair-display lg:pb-[4.625rem] lg:box-border mq825:pb-[3rem] mq825:box-border ${className}`}
    >
      <div className="w-[] flex flex-col items-start justify-start gap-[7.812rem] max-w-full mq450:gap-[1rem] mq825:gap-[1.938rem] mq1425:gap-[3.875rem]">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[3.125rem] max-w-full mq825:gap-[1.563rem]">
          <div className="flex-1 rounded-[15px] bg-[#214651] text-[#F5F5F5]  flex flex-row items-start justify-between py-[5.062rem] px-[3.125rem] box-border min-w-[31.5rem] max-w-full gap-[1.25rem] mq825:flex-wrap mq825:pl-[1.563rem] mq825:pr-[1.563rem] mq825:box-border mq825:min-w-full">
            <h1 className="m-0 w-[7.875rem] relative text-inherit tracking-[0.01em] inline-block italic font-medium font-inherit shrink-0 mq450:text-[1.688rem] mq825:text-[2.25rem]">
              Our Vision
            </h1>
            <div className="w-[27rem] flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem] box-border max-w-full text-[0.938rem] font-text-regular-normal">
              <div className="self-stretch relative tracking-[0.01em] leading-[1.688rem]">
                Access real-time reporting and analytics to gain insights into
                your financial health. Identify trends, forecast performance,
                and make strategic decisions for growth and profitability with
                ProficientNow Books.
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-[15px] bg-[#EBFFC1] text-[#214651] flex flex-row items-start justify-between py-[5.062rem] px-[3.125rem] box-border min-w-[31.5rem] max-w-full gap-[1.25rem] text-darkslategray-100 mq825:flex-wrap mq825:pl-[1.563rem] mq825:pr-[1.563rem] mq825:box-border mq825:min-w-full">
            <h1 className="m-0 w-[9.688rem] relative text-inherit tracking-[0.01em] inline-block italic font-medium font-inherit shrink-0 min-w-[9.688rem] mq450:text-[1.688rem] mq825:text-[2.25rem] mq825:flex-1">
              Our Mission
            </h1>
            <div className="w-[27rem] flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem] box-border min-w-[27rem] max-w-full text-[0.938rem] font-text-regular-normal mq825:flex-1 mq825:min-w-full">
              <div className="self-stretch relative tracking-[0.01em] leading-[1.688rem]">
                Access real-time reporting and analytics to gain insights into
                your financial health. Identify trends, forecast performance,
                and make strategic decisions for growth and profitability with
                ProficientNow Books.
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

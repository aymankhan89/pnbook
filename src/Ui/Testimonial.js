import Container from "./Container";
// import PropTypes from "prop-types";

const Testimonial = ({ className = "" }) => {
  return (
    <div className="flex justify-center items-center pt-[min(120px,max(70px,8.785vw))]">
      {" "}
      <div
        className={`self-stretch flex flex-row w-[80%] items-start justify-center pt-[0rem] px-[1.25rem] pb-[0.881rem] box-border max-w-full text-left text-[2rem] text-gray-400 font-text-regular-normal ${className}`}
      >
        <div className="w-[100rem] flex flex-col items-start justify-start gap-[4.375rem] max-w-full mq450:gap-[1.063rem] mq900:gap-[2.188rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[5rem] max-w-full mq450:gap-[1.25rem] mq900:gap-[2.5rem]">
            <div className="flex flex-col items-start justify-start gap-[1.25rem] max-w-full">
              <h1 className="m-0 relative text-inherit tracking-[0.01em] font-inherit mq450:text-[1.188rem] mq900:text-[1.625rem]">
                <span>
                  <span className="font-medium text-[#202020]">
                    Trusted by Our
                  </span>
                  <span className="font-text-regular-normal">{` `}</span>
                </span>
                <i className="font-medium text-[#214651]">Happy Customers</i>
              </h1>
              <div className="w-[27.188rem] relative text-[1rem] tracking-[0.01em] text-[#202020] leading-[1.688rem] inline-block max-w-full">
                Unlock your business's potential with our expert accounting
                services. Our dedicated team ensures.
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[1.25rem] text-[1rem] text-text-primary mq1725:flex-wrap">
              <Container avatarImage="/avatar-image@2x.png" />
              <Container avatarImage="/avatar-image-1@2x.png" />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between gap-[1.25rem] mq450:flex-wrap">
            <div className="flex flex-row items-start justify-start py-[1.25rem] px-[0rem] gap-[0.437rem]">
              <div className="h-[0.406rem] w-[0.406rem] relative rounded-[50%] bg-black" />
              <div className="h-[0.406rem] w-[0.406rem] relative rounded-[50%] bg-[#D9D9D9]" />
              <div className="h-[0.406rem] w-[0.406rem] relative rounded-[50%] bg-[#D9D9D9]" />
              <div className="h-[0.406rem] w-[0.406rem] relative rounded-[50%] bg-[#D9D9D9]" />
            </div>
            <div className="flex flex-row items-start justify-start gap-[0.937rem]">
              <div className="w-[3rem] rounded-mini box-border flex flex-row items-center justify-center py-[0.625rem] px-[0.687rem] border-[1px] border-solid border-text-primary">
                <img
                  className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/icon.svg"
                />
              </div>
              <div className="w-[3rem] rounded-mini box-border flex flex-row items-center justify-center py-[0.625rem] px-[0.687rem] border-[1px] border-solid border-text-primary">
                <img
                  className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                  alt=""
                  src="/icon-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

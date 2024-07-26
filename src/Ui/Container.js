import PropTypes from "prop-types";

const Container = ({ className = "", avatarImage }) => {
  return (
    <div
      className={`w-[39rem] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[2rem] max-w-full text-left text-[1rem] text-text-primary font-text-regular-normal mq900:gap-[1rem] ${className}`}
    >
      <div className="overflow-hidden flex flex-row items-start justify-start gap-[0.375rem]">
        <img
          className="h-[1.181rem] w-[1.25rem] relative min-h-[1.188rem]"
          alt=""
          src="/rating-star.svg"
        />
        <img
          className="h-[1.181rem] w-[1.25rem] relative min-h-[1.188rem]"
          alt=""
          src="/rating-star.svg"
        />
        <img
          className="h-[1.181rem] w-[1.25rem] relative min-h-[1.188rem]"
          alt=""
          src="/rating-star.svg"
        />
        <img
          className="h-[1.181rem] w-[1.25rem] relative min-h-[1.188rem]"
          alt=""
          src="/rating-star.svg"
        />
        <img
          className="h-[1.181rem] w-[1.25rem] relative min-h-[1.188rem]"
          alt=""
          src="/rating-star.svg"
        />
      </div>
      <div className="self-stretch relative leading-[140%] text-[#202020]">{`"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. `}</div>
      <div className="flex flex-row items-center justify-start gap-[1.25rem] max-w-full mq900:flex-wrap text-[#202020]">
        <img
          className="h-[3.5rem] w-[3.5rem] relative rounded-[50%] object-contain"
          loading="lazy"
          alt=""
          src={avatarImage}
        />
        <div className="flex flex-col items-start justify-start">
          <div className="relative leading-[150%] font-semibold inline-block min-w-[7rem]">
            Name Surname
          </div>
          <div className="relative leading-[150%]">Position, Company name</div>
        </div>
        <div className="h-[3.875rem] w-[0.063rem] relative box-border border-r-[1px] border-solid border-text-primary mq900:w-full mq900:h-[0.063rem]" />
        <img
          className="h-[3.5rem] w-[8.75rem] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/logos.svg"
        />
      </div>
    </div>
  );
};



export default Container;

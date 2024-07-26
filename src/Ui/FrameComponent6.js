import PropTypes from "prop-types";

const FrameComponent6 = ({ className = "", placeholderImage }) => {
  return (
    <div
      className={`w-[26.688rem] shrink-0 flex flex-col items-start justify-start gap-[1.5rem] max-w-full text-left text-[0.875rem] text-text-primary font-text-regular-normal ${className}`}
    >
      <img
        className="self-stretch h-[17.313rem] relative rounded-[15px] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src={placeholderImage}
      />
      <div className="w-[21.438rem] flex flex-col items-start justify-start gap-[1.5rem] max-w-full">
        <div className="flex flex-row items-center justify-start gap-[1rem]">
          <div className="rounded-8xs bg-lavender flex flex-row items-start justify-start py-[0.25rem] px-[0.5rem]">
            <div className="relative bg-[#E4E7FF] rounded-[5px] leading-[150%]  px-[8px] py-[4px] font-medium inline-block min-w-[3.563rem]">
              Category
            </div>
          </div>
          <div className="relative text-[0.813rem] leading-[1.25rem] inline-block min-w-[3.875rem]">
            5 min read
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] text-[1.25rem]">
          <div className="self-stretch relative font-semibold mq450:text-[1rem]">
            Blog title heading will go here
          </div>
          <div className="self-stretch relative text-[0.938rem] leading-[150%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros.
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-[0.875rem] text-[1rem]">
          <div className="relative leading-[150%] inline-block min-w-[4.813rem]">
            Read more
          </div>
          <img
            className="h-[0.75rem] w-[0.75rem] relative"
            alt=""
            src="/vector-10.svg"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
  placeholderImage: PropTypes.string,
};

export default FrameComponent6;

import PropTypes from "prop-types";

const ArticleRow = ({ className = "", placeholderImage }) => {
  return (
    <div
      className={`w-[29.313rem] flex flex-col items-start justify-start gap-[1.875rem] max-w-full text-left text-[0.875rem] text-text-primary font-text-regular-normal ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[1.437rem] max-w-full">
        <div className="self-stretch h-[19.438rem] flex flex-col items-start justify-start gap-[1.25rem]">
          <img
            className="self-stretch flex-1 relative rounded-mini max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src={placeholderImage}
          />
          <div className="flex flex-row items-center justify-start gap-[1rem]">
            <div className="rounded-[5px] bg-[#E4E7FF] flex flex-row items-start justify-start py-[0.25rem] px-[0.5rem]">
              <div className="relative leading-[150%] text-[#000000] font-medium inline-block min-w-[3.563rem]">
                Category
              </div>
            </div>
            <div className="relative text-[0.813rem] text-[#202020] leading-[1.25rem] inline-block min-w-[3.875rem]">
              5 min read
            </div>
          </div>
        </div>
        <div className="w-[21.438rem] flex flex-col items-start justify-start gap-[0.75rem] max-w-full text-[1.25rem]">
          <div className="self-stretch relative text-[#000000] font-semibold mq450:text-[1rem]">
            Blog title heading will go here
          </div>
          <div className="self-stretch relative text-[0.938rem] leading-[150%] text-[#000000] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros.
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-[0.875rem] text-[1rem]">
        <div className="relative leading-[150%] text-[#202020] inline-block min-w-[4.813rem]">
          Read more
        </div>
        <img
          className="h-[0.75rem] w-[0.75rem] relative"
          alt=""
          src="/vector-10.svg"
        />
      </div>
    </div>
  );
};

ArticleRow.propTypes = {
  className: PropTypes.string,
  placeholderImage: PropTypes.string,
};

export default ArticleRow;

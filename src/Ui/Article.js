import ArticleRow from "./ArticleRow";
// import PropTypes from "prop-types";

const Article = ({ className = "" }) => {
  return (
   <div className="w-full flex justify-center"> <div
      className={` self-stretch flex flex-row items-start justify-center pt-[100px] w-[90%] pb-[0.875rem] pr-[1.25rem] pl-[1.312rem] box-border max-w-full text-left text-[2rem] text-gray-400 font-text-regular-normal ${className}`}
    >
      <div className="w-[100.063rem] flex flex-col items-start justify-start gap-[3.75rem] max-w-full mq900:gap-[1.875rem]">
        <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-[1.25rem] mq900:flex-wrap">
          <div className="flex flex-col items-start justify-start gap-[1.25rem] max-w-full">
            <div className="flex flex-col items-start justify-start py-[0rem] px-[0rem]">
              <h1 className="m-0 w-[31.5rem] relative text-inherit tracking-[0.01em] inline-block font-inherit mq450:text-[1.188rem] mq900:text-[1.625rem]">
                <span className=" text-[#202020]">{`Our Latest `}</span>
                <i className="font-medium font-playfair-display text-[#214651]">
                  Articles
                </i>
              </h1>
            </div>
            <div className="w-[29rem] relative text-[1rem] text-[#202020] tracking-[0.01em] leading-[1.688rem] inline-block max-w-full">
              Unlock your business's potential with our expert accounting
              services. Our dedicated team ensures.
            </div>
          </div>
          <button className="cursor-pointer py-[0.625rem] px-[1.062rem] bg-[transparent] w-[5.938rem] rounded-mini box-border flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-darkslategray-100 hover:bg-slategray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-slategray-100">
            {/* <a className="[text-decoration:none] relative text-[1rem] tracking-[0.01em] leading-[1.2rem] font-semibold font-text-regular-normal text-darkslategray-100 text-center inline-block min-w-[3.625rem]">
              View all
            </a> */}
          </button>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[1.25rem] text-[0.875rem] text-text-primary mq1725:flex-wrap">
          <ArticleRow placeholderImage="/placeholder-image@2x.png" />
          <ArticleRow placeholderImage="/placeholder-image-1@2x.png" />
          <ArticleRow placeholderImage="/placeholder-image-2@2x.png" />
        </div>
      </div>
    </div>
    </div>
  );
};

// Article.propTypes = {
//   className: PropTypes.string,
// };

export default Article;

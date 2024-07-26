import ArticleRow from "./ArticleRow";
// import PropTypes from "prop-types";

const Article = ({ className = "" }) => {
  return (
    <div className="w-full flex justify-center">
      <div
        className={`flex flex-col items-start justify-center pt-[100px] pb-[0.875rem] px-[1.312rem] max-w-full text-left text-[2rem] text-gray-400 font-text-regular-normal ${className}`}
      >
        <div className="flex flex-col gap-[3.75rem] max-w-full w-full md:gap-[1.875rem]">
          <div className="flex flex-col md:flex-row items-start justify-between gap-[1.25rem] flex-wrap">
            <div className="flex flex-col gap-[1.25rem] max-w-full">
              <h1 className="text-inherit tracking-[0.01em] font-inherit text-[#202020] text-[1.188rem] md:text-[1.625rem]">
                <span className="text-[#202020]">Our Latest </span>
                <i className="font-medium font-playfair-display text-[#214651]">
                  Articles
                </i>
              </h1>
              <p className="text-[1rem] text-[#202020] tracking-[0.01em] leading-[1.688rem] max-w-full">
                Unlock your business's potential with our expert accounting
                services. Our dedicated team ensures.
              </p>
            </div>
            <button className="cursor-pointer py-[0.625rem] px-[1.062rem] bg-transparent w-[5.938rem] rounded-mini border-[1px] border-solid border-darkslategray-100 hover:bg-slategray-200 hover:border-slategray-100">
              {/* Uncomment and update the button text if needed */}
              {/* <a className="text-[1rem] font-semibold text-darkslategray-100 text-center inline-block min-w-[3.625rem]">
                View all
              </a> */}
            </button>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-[1.25rem] text-[0.875rem] text-text-primary flex-wrap">
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

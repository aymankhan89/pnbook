import PropTypes from "prop-types";

const GroupComponent3 = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch shadow-[0px_4px_24px_-1px_rgba(0,_0,_0,_0.2)] [backdrop-filter:blur(50px)] rounded-mini [background:linear-gradient(90.26deg,_rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4))] flex flex-row items-end justify-between pt-[0.125rem] pb-[0.687rem] pr-[1.25rem] pl-[3.125rem] box-border top-[0] z-[99] sticky max-w-full gap-[1.25rem] text-left text-[1rem] text-text-primary font-text-regular-normal mq1400:pl-[1.563rem] mq1400:box-border ${className}`}
    >
      <div className="h-[4.063rem] w-[111.875rem] relative shadow-[0px_4px_24px_-1px_rgba(0,_0,_0,_0.2)] [backdrop-filter:blur(50px)] rounded-mini [background:linear-gradient(90.26deg,_rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4))] hidden max-w-full" />
      <div className="w-[7.5rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.487rem] box-border">
        <img
          className="w-[1.656rem] h-[1.725rem] relative object-contain z-[1]"
          loading="lazy"
          alt=""
          src="/mask-group@2x.png"
        />
      </div>
      <div className="w-[24.188rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.756rem] box-border max-w-full">
        <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
          <div className="w-[10.625rem] flex flex-col items-start justify-start pt-[1.306rem] px-[0rem] pb-[0rem] box-border">
            <div className="self-stretch h-[1.188rem] relative">
              <a className="[text-decoration:none] absolute top-[0rem] left-[0rem] text-[inherit] inline-block min-w-[2.75rem] z-[1]">
                Home
              </a>
              <a className="[text-decoration:none] absolute top-[0rem] left-[6.5rem] text-[inherit] inline-block min-w-[4.125rem] whitespace-nowrap z-[1]">
                About Us
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[1.181rem] text-darkslategray-100">
            <div className="w-[2.688rem] h-[0.125rem] relative box-border z-[2] border-t-[2px] border-solid border-darkslategray-100" />
            <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[2.563rem] z-[1]">
              Blogs
            </a>
          </div>
          <div className="flex flex-col items-start justify-start pt-[1.306rem] px-[0rem] pb-[0rem]">
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[3.5rem] z-[1]">
              Contact
            </a>
          </div>
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-[0.75rem] px-[2.187rem] bg-darkslategray-100 rounded-mini overflow-hidden flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-slategray-100">
        <a className="[text-decoration:none] relative text-[1rem] font-medium font-text-regular-normal text-color-neutral-white text-left inline-block min-w-[4.938rem]">
          Contact Us
        </a>
      </button>
    </header>
  );
};

GroupComponent3.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent3;

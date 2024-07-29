import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Footer = ({ className = "" }) => {
  const navigate = useNavigate();

  return (
    <div className="pt-[200px]">
      <footer
        className={`self-stretch rounded-t-[15px] bg-[#214651] flex flex-col items-center justify-start pt-[6.25rem] px-[1.25rem] pb-[1.875rem] box-border md:gap-[9.5rem] gap-[105px] max-w-full text-left text-[5.625rem] text-whitesmoke font-text-regular-normal ${className}`}
      >
        <div className="w-full flex flex-col md:flex-row items-start justify-between max-w-full text-[#F3F0E9] gap-[1.25rem] md:gap-[2rem]">
          <div className="w-full md:w-[50.25rem] flex flex-col items-start justify-start gap-[4.062rem] max-w-full md:gap-[2rem]">
            <h1 className="m-0 self-stretch text-inherit tracking-[0.01em] md:leading-[7.188rem] font-medium text-linen-100 text-left md:text-left text-[2.5rem] md:text-[5.625rem]">
              <p className="m-0">PROFICIENTNOW</p>
              <p className="m-0">BOOKS</p>
            </h1>
            <div className="w-full md:w-[22.25rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[2.187rem] box-border gap-[1.062rem] text-[1.063rem]">
              <div className="self-stretch text-left md:text-left">
                Join the Insider Crew
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[0.437rem] text-[1rem] text-color-neutral-neutral">
                <div className="flex-1 rounded-[15px] bg-gray-100 box-border flex flex-row items-center py-[0.812rem] px-[0.75rem] gap-[0.5rem] min-h-[2.625rem] border-[1px] border-solid border-gainsboro-100">
                  <input
                    className="w-full border-none outline-none font-text-regular-normal text-[0.75rem] bg-transparent h-[0.875rem] text-color-neutral-neutral text-left p-0"
                    placeholder="Enter your email address"
                    type="text"
                  />
                </div>
                <button>
                  <img
                    className="h-[2.5rem] w-[2.875rem] rounded-6xs"
                    loading="lazy"
                    alt=""
                    src="/text-input.svg"
                  />
                </button>
              </div>
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-[1.5rem] text-[1rem]">
              <div className="self-stretch">info@proficientnow.com</div>
              <div className="self-stretch">+1 (872) 305-0790</div>
              <div className="self-stretch leading-[1.438rem]">
                650 Warrenville Road, Ste 100 Lisle - IL 60532
              </div>
            </div>
          </div>
          <div className="w-full mt-11 md:w-[33.313rem] flex flex-col items-start justify-start gap-[2rem] text-[2.188rem] text-linen-100 font-playfair-display">
            <div className="w-full flex flex-col items-start gap-[2rem]">
              <div className="w-full flex flex-col items-start gap-[2rem]">
                <div
                  className="w-full flex flex-row items-center gap-[1.563rem] cursor-pointer"
                  onClick={() => navigate("/")}
                >
                  <div className="relative tracking-[0.01em] font-medium inline-block min-w-[2.25rem] text-[1.313rem] md:text-[1.75rem]">
                    01
                  </div>
                  <h1 className="m-0 relative text-[2.063rem] md:text-[3.438rem] tracking-[0.01em] font-normal">
                    Home
                  </h1>
                </div>
                <div className="w-full h-[0.063rem] box-border border-t-[1px] border-solid border-linen-200" />
              </div>
              <div
                className="w-full flex flex-row items-center gap-[1.563rem] cursor-pointer"
                onClick={() => navigate("/aboutus")}
              >
                <div className="relative tracking-[0.01em] font-medium inline-block min-w-[2.5rem] text-[1.313rem] md:text-[1.75rem]">
                  02
                </div>
                <h1 className="m-0 relative text-[2.063rem] md:text-[3.438rem] tracking-[0.01em] font-normal">
                  About Us
                </h1>
              </div>
            </div>
            <div className="w-full h-[0.063rem] box-border border-t-[1px] border-solid border-linen-200" />
            <div
              className="w-full flex flex-row items-center gap-[1.563rem] cursor-pointer"
              onClick={() => navigate("/about")}
            >
              <div className="relative tracking-[0.01em] font-medium inline-block min-w-[2.438rem] text-[1.313rem] md:text-[1.75rem]">
                03
              </div>
              <h1 className="m-0 relative text-[2.063rem] md:text-[3.438rem] tracking-[0.01em] font-normal">
                Blogs
              </h1>
            </div>
            <div className="w-full h-[0.063rem] box-border border-t-[1px] border-solid border-linen-200" />
            <div
              className="w-full flex flex-row items-center gap-[1.563rem] cursor-pointer"
              onClick={() => navigate("/contact")}
            >
              <div className="relative tracking-[0.01em] font-medium inline-block min-w-[2.5rem] text-[1.313rem] md:text-[1.75rem]">
                04
              </div>
              <h1 className="m-0 relative text-[2.063rem] md:text-[3.438rem] tracking-[0.01em] font-normal">
                Contact
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full flex sm:grid  md:flex-row items-center gap-[1.25rem] text-[0.813rem] text-gray-500">
          <div className="flex flex-col  md:flex-row items-center justify-between w-full  md:gap-[2.25rem] order-2 md:order-1">
            <div className="flex flex-row items-center justify-center md:justify-start gap-[0.5rem]">
              <div className="flex flex-col items-center pt-[0.062rem] px-[0rem] pb-[0rem]">
                <img
                  className="w-[0.813rem] h-[0.813rem] relative overflow-hidden"
                  loading="lazy"
                  alt=""
                  src="/copyright-1.svg"
                />
              </div>
              <div className="relative">ProficientNow Books 2024</div>
            </div>
            <div className="flex flex-row items-center justify-center md:justify-start gap-[2.25rem]">
              <a className="[text-decoration:none] relative text-[inherit]">
                Privacy Policy
              </a>
              <div className="relative">{`Terms & Conditions`}</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;

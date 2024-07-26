import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Footer = ({ className = "" }) => {
  const navigate = useNavigate();

  return (
    <div className="pt-[200px]">
      <footer
        className={`self-stretch rounded-t-[15px] bg-[#214651] flex flex-col items-center justify-start pt-[6.25rem] px-[1.25rem] pb-[1.875rem] box-border gap-[9.5rem] max-w-full text-left text-[5.625rem] text-whitesmoke font-text-regular-normal mq450:gap-[1.188rem] mq450:pt-[2.625rem] mq450:box-border mq900:gap-[2.375rem] mq1325:gap-[4.75rem] mq1325:pt-[4.063rem] mq1325:pb-[1.25rem] mq1325:box-border ${className}`}
      >
        <div className="w-[100rem] flex flex-row items-start justify-between max-w-full text-[#F3F0E9] gap-[1.25rem] mq1725:flex-wrap">
          <div className="w-[50.25rem] flex flex-col items-start justify-start gap-[4.062rem] min-w-[50.25rem] max-w-full mq450:gap-[1rem] mq900:gap-[2rem] mq900:min-w-full mq1725:flex-1">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[0.01em] leading-[7.188rem] font-medium font-inherit text-linen-100 mq450:text-[1.688rem] mq450:leading-[2.875rem] mq900:text-[2.813rem] mq900:leading-[4.313rem]">
              <p className="m-0">PROFICIENTNOW</p>
              <p className="m-0">BOOKS</p>
            </h1>
            <div className="w-[22.25rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[2.187rem] box-border gap-[1.062rem] max-w-full text-[1.063rem]">
              <div className="self-stretch relative">Join the Insider Crew</div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[0.437rem] text-[1rem] text-color-neutral-neutral mq450:flex-wrap">
                <div className="h-[2.5rem] flex-1 flex flex-row items-start justify-start min-w-[12.313rem]">
                  <div className="flex-1 rounded-6xs bg-gray-100 box-border flex flex-row items-start justify-start py-[0.812rem] px-[0.75rem] gap-[0.5rem] min-h-[2.625rem] shrink-0 border-[1px] border-solid border-gainsboro-100">
                    <div className="h-[0rem] w-[33.5rem] relative leading-[150%] hidden shrink-0 max-w-full">
                      Placeholder
                    </div>
                    <input
                      className="w-full [border:none] [outline:none] font-text-regular-normal text-[0.75rem] bg-[transparent] h-[0.875rem] flex-1 relative text-color-neutral-neutral text-left inline-block min-w-[10.438rem] p-0 z-[1]"
                      placeholder="Enter your email address"
                      type="text"
                    />
                  </div>
                </div>
                <img
                  className="h-[2.5rem] w-[2.875rem] relative rounded-6xs"
                  loading="lazy"
                  alt=""
                  src="/text-input.svg"
                />
              </div>
            </div>
            <div className="w-[14.313rem] flex flex-col items-start justify-start gap-[1.5rem] text-[1rem]">
              <div className="self-stretch relative whitespace-nowrap">
                info@proficientnow.com
              </div>
              <div className="self-stretch relative">+1 (872) 305-0790</div>
              <div className="self-stretch relative leading-[1.438rem]">
                650 Warrenville Road, Ste 100 Lisle - IL 60532
              </div>
            </div>
          </div>
          <div className="w-[33.313rem] flex flex-col items-start justify-start gap-[2rem] min-w-[33.313rem] max-w-full text-[2.188rem] text-linen-100 font-playfair-display mq900:gap-[1rem] mq900:min-w-full mq1725:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] gap-[2rem] mq900:gap-[1rem]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[2rem] mq900:gap-[1rem]">
                <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] gap-[2rem] mq900:gap-[1rem]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[2rem] mq900:gap-[1rem]">
                    <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] gap-[2rem] mq900:gap-[1rem]">
                      <div
                        className="w-[14.688rem] flex flex-row items-center justify-between gap-[1.25rem] cursor-pointer"
                        onClick={() => navigate("/")}
                      >
                        <div className="relative tracking-[0.01em] font-medium inline-block min-w-[2.25rem] mq450:text-[1.313rem] mq900:text-[1.75rem]">
                          01
                        </div>
                        <h1 className="m-0 relative text-[3.438rem] tracking-[0.01em] font-normal font-text-regular-normal mq450:text-[2.063rem] mq900:text-[2.75rem]">
                          Home
                        </h1>
                      </div>
                      <div className="self-stretch h-[0.063rem] relative box-border border-t-[1px] border-solid border-linen-200" />
                    </div>
                    <div
                      className="flex flex-row items-center justify-center gap-[3.125rem] mq450:gap-[1.563rem] cursor-pointer"
                      onClick={() => navigate("/aboutus")}
                    >
                      <div className="relative tracking-[0.01em] font-medium inline-block min-w-[2.5rem] mq450:text-[1.313rem] mq900:text-[1.75rem]">
                        02
                      </div>
                      <h1 className="m-0 relative text-[3.438rem] tracking-[0.01em] font-normal font-text-regular-normal mq450:text-[2.063rem] mq900:text-[2.75rem]">
                        About Us
                      </h1>
                    </div>
                  </div>
                  <div className="self-stretch h-[0.063rem] relative box-border border-t-[1px] border-solid border-linen-200" />
                </div>
                <div
                  className="w-[14.375rem] flex flex-row items-center justify-between gap-[1.25rem] cursor-pointer"
                  onClick={() => navigate("/about")}
                >
                  <div className="relative tracking-[0.01em] font-medium inline-block min-w-[2.438rem] mq450:text-[1.313rem] mq900:text-[1.75rem]">
                    03
                  </div>
                  <h1 className="m-0 relative text-[3.438rem] tracking-[0.01em] font-normal font-text-regular-normal mq450:text-[2.063rem] mq900:text-[2.75rem]">
                    Blogs
                  </h1>
                </div>
              </div>
              <div className="self-stretch h-[0.063rem] relative box-border border-t-[1px] border-solid border-linen-200" />
            </div>
            <div
              className="w-[17.875rem] flex flex-row items-center justify-between gap-[1.25rem] cursor-pointer"
              onClick={() => navigate("/contact")}
            >
              <div className="relative tracking-[0.01em] font-medium inline-block min-w-[2.5rem] mq450:text-[1.313rem] mq900:text-[1.75rem]">
                04
              </div>
              <h1 className="m-0 relative text-[3.438rem] tracking-[0.01em] font-normal font-text-regular-normal mq450:text-[2.063rem] mq900:text-[2.75rem]">
                Contact
              </h1>
            </div>
          </div>
        </div>
        <div className="w-[100rem] flex flex-row items-start justify-between gap-[1.25rem] max-w-full text-[0.813rem] text-gray-500 mq900:flex-wrap">
          <div className="flex flex-row items-start justify-start gap-[0.5rem]">
            <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
              <img
                className="w-[0.813rem] h-[0.813rem] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/copyright-1.svg"
              />
            </div>
            <div className="relative">ProficientNow Books 2024</div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[2.25rem]">
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[5.063rem]">
              Privacy Policy
            </a>
            <div className="relative inline-block min-w-[7.125rem]">{`Terms & Conditions`}</div>
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

import PropTypes from "prop-types";

const ContactUs = ({ className = "" }) => {
  return (
    <div className="w-full flex justify-center pt-[100px] ">  <div
      className={`self-stretch border rounded-[15px] bg-[#214651] w-[90%] flex flex-row items-start justify-between py-[4.375rem] px-[5.937rem] box-border max-w-full gap-[1.25rem] text-left text-[2rem] text-sandybrown font-playfair-display mq900:py-[1.813rem] mq900:px-[1.438rem] mq900:box-border mq1325:py-[2.813rem] mq1325:px-[2.938rem] mq1325:box-border mq1725:flex-wrap mq1725:justify-center ${className}`}
    >
      <div className="w-[25.063rem] text-[#F5F5F5] flex flex-col items-start justify-start gap-[3.125rem] max-w-full mq450:gap-[1.563rem]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem]">
          <h1 className="m-0 self-stretch relative text-inherit font-inherit mq450:text-[1.188rem] mq900:text-[1.625rem]">
            <i className="font-medium text-[#FFC17A]">Contact</i>
            <span className="font-medium font-text-regular-normal text-whitesmoke">
              {" "}
              us
            </span>
          </h1>
          <div className="self-stretch relative text-[1rem] tracking-[0.01em] leading-[1.688rem] font-text-regular-normal text-whitesmoke">
            Unlock your business's potential with our expert accounting
            services.
          </div>
        </div>
        <div className="flex flex-col items-start justify-start py-[0.5rem] px-[0rem] box-border gap-[1rem] max-w-full text-[1rem] text-whitesmoke font-text-regular-normal">
          <div className="w-[13.25rem] flex flex-row items-center justify-between gap-[1rem]">
            <img
              className="h-[1.375rem] w-[1.375rem] relative overflow-hidden shrink-0"
              alt=""
              src="/icon--envelope.svg"
            />
            <div className="relative leading-[150%] whitespace-nowrap">
              info@proficientnow.com
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-[1rem]">
            <img
              className="h-[1.375rem] w-[1.375rem] relative overflow-hidden shrink-0"
              alt=""
              src="/icon--phone.svg"
            />
            <div className="relative leading-[150%]">+1 (872) 350-0790</div>
          </div>
          <div className="flex flex-row items-center justify-center gap-[1rem]">
            <img
              className="h-[1.375rem] w-[1.375rem] relative overflow-hidden shrink-0"
              alt=""
              src="/icon--map.svg"
            />
            <div className="relative leading-[150%]">
              650 Warrenville Road, Ste 100 Lisle - IL 60532
            </div>
          </div>
        </div>
      </div>
      <div className="w-[38.5rem] text-[#F5F5F5] flex flex-col items-start justify-start gap-[2.312rem] max-w-full text-[1rem] text-whitesmoke font-text-regular-normal mq900:gap-[1.125rem]">
        <div className="w-[37.5rem] flex flex-row items-start justify-start gap-[2.5rem] max-w-full mq900:flex-wrap mq900:gap-[1.25rem]">
          <div className="h-[4.5rem] w-[17.5rem] flex flex-col items-start justify-start gap-[0.5rem]">
            <div className="self-stretch relative leading-[150%] shrink-0">
              First name
            </div>
            <div className="self-stretch rounded-[15px] bg-gray-100 box-border flex flex-row items-start justify-start py-[0.625rem] px-[0.937rem] gap-[0.5rem] min-h-[2.625rem] shrink-0 text-color-neutral-neutral border-[1px] border-solid border-gainsboro-100">
              <div className="h-[0rem] w-[33.5rem] relative leading-[150%] hidden shrink-0 max-w-full">
                Placeholder
              </div>
              <input
                className="w-[7.5rem] [border:none] [outline:none] font-text-regular-normal text-[0.813rem] bg-[transparent] h-[1.25rem] relative leading-[150%] text-gray-200 text-left inline-block p-0"
                placeholder="Enter your first name"
                type="text"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem] min-w-[11.375rem]">
            <div className="self-stretch relative leading-[150%]">
              Last name
            </div>
            <input
              className="w-full [border:none] [outline:none] bg-gray-100 self-stretch h-[2.5rem] rounded-[15px] flex flex-row items-start justify-start py-[0.625rem] px-[0.937rem] box-border font-text-regular-normal text-[0.813rem] text-gray-200 min-w-[10.5rem]"
              placeholder="Enter your last name"
              type="text"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[2.062rem] box-border gap-[0.5rem] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[1rem] pl-[0rem] box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[2.312rem] max-w-[103%] shrink-0 mq900:gap-[1.125rem]">
              <div className="w-[17.5rem] flex flex-col items-start justify-start gap-[0.5rem]">
                <div className="self-stretch relative leading-[150%]">
                  Email
                </div>
                <input
                  className="w-full [border:none] [outline:none] bg-gray-100 self-stretch h-[2.5rem] rounded-[15px] flex flex-row items-start justify-start py-[0.625rem] px-[0.937rem] box-border font-text-regular-normal text-[0.813rem] text-gray-200 min-w-[10.5rem]"
                  placeholder="Enter your email address"
                  type="text"
                />
              </div>
              <div className="self-stretch relative leading-[150%]">
                Choose a topic
              </div>
            </div>
            <div className="w-[17.5rem] flex flex-col items-start justify-start gap-[0.5rem] ml-[-18.5rem]">
              <div className="self-stretch relative leading-[150%]">
                Phone number
              </div>
              <input
                className="w-full [border:none] [outline:none] bg-gray-100 self-stretch h-[2.5rem] rounded-[15px] flex flex-row items-start justify-start py-[0.625rem] px-[0.937rem] box-border font-text-regular-normal text-[0.813rem] text-gray-200 min-w-[10.5rem]"
                placeholder="Enter your phone number"
                type="text"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[2.375rem] box-border max-w-full text-[0.938rem] text-gray-200">
            <div className="flex-1 rounded-[15px] bg-gray-100 flex flex-row items-start justify-between py-[0.687rem] pr-[0.75rem] pl-[0.937rem] box-border max-w-full gap-[1.25rem]">
              <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
                <div className="relative leading-[1.438rem] inline-block min-w-[5.125rem]">
                  Select one...
                </div>
              </div>
              <img
                className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                alt=""
                src="/icon--chevrondown.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] max-w-full">
            <div className="relative leading-[150%]">
              Which best describes you?
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                <div className="w-[38.5rem] flex flex-col items-start justify-start gap-[2.5rem] max-w-full mq900:gap-[1.25rem]">
                  <div className="flex flex-col items-start justify-start gap-[0.875rem]">
                    <div className="flex flex-col items-start justify-start gap-[0.875rem]">
                      <div className="flex flex-row items-start justify-start gap-[0.75rem]">
                        <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
                          <input
                            className="cursor-pointer m-0 w-[1.125rem] h-[1.125rem] relative rounded-81xl bg-color-neutral-white overflow-hidden shrink-0"
                            type="radio"
                            name="radioGroup-1"
                          />
                        </div>
                        <div className="relative leading-[150%] inline-block min-w-[5.188rem]">
                          First choice
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[0.75rem]">
                        <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
                          <input
                            className="cursor-pointer m-0 w-[1.125rem] h-[1.125rem] relative rounded-81xl bg-color-neutral-white overflow-hidden shrink-0"
                            type="radio"
                            name="radioGroup-1"
                          />
                        </div>
                        <div className="relative leading-[150%] inline-block min-w-[5.5rem]">
                          Third choice
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.75rem]">
                      <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
                        <input
                          className="cursor-pointer m-0 w-[1.125rem] h-[1.125rem] relative rounded-81xl bg-color-neutral-white overflow-hidden shrink-0"
                          type="radio"
                          name="radioGroup-1"
                        />
                      </div>
                      <div className="relative leading-[150%] inline-block min-w-[5.25rem]">
                        Fifth choice
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch relative leading-[150%]">
                    Message
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[0.75rem] ml-[-18.5rem]">
                  <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
                    <div className="flex flex-col items-start justify-start gap-[1.25rem]">
                      <input
                        className="cursor-pointer m-0 w-[1.125rem] h-[1.125rem] relative rounded-[15px] bg-color-neutral-white overflow-hidden shrink-0"
                        type="radio"
                        name="radioGroup-2"
                      />
                      <input
                        className="cursor-pointer m-0 w-[1.125rem] h-[1.125rem] relative rounded-[15px] bg-color-neutral-white overflow-hidden shrink-0"
                        type="radio"
                        name="radioGroup-2"
                      />
                      <input
                        className="cursor-pointer m-0 w-[1.125rem] h-[1.125rem] relative rounded-81xl bg-color-neutral-white overflow-hidden shrink-0"
                        type="radio"
                        name="radioGroup-2"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[0.875rem]">
                    <div className="relative leading-[150%] inline-block min-w-[6.563rem]">
                      Second choice
                    </div>
                    <div className="relative leading-[150%] inline-block min-w-[6.125rem]">
                      Fourth choice
                    </div>
                    <div className="relative leading-[150%] inline-block min-w-[2.438rem]">
                      Other
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[11.25rem] rounded-[15px] bg-gray-100 flex flex-col items-start justify-start p-[0.937rem] box-border relative text-[0.938rem] text-gray-200">
                <img
                  className="w-[0.125rem] h-[0.125rem] absolute !m-[0] right-[0.313rem] bottom-[0.363rem] object-contain"
                  alt=""
                  src="/line-1.svg"
                />
                <img
                  className="w-[0.375rem] h-[0.375rem] absolute !m-[0] right-[0.313rem] bottom-[0.375rem] object-contain z-[1]"
                  alt=""
                  src="/line-2.svg"
                />
                <div className="relative leading-[1.438rem] rounded-[15px]">
                  Type your message...
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-[0.75rem] px-[1.125rem] bg-gray-100 rounded-[15px] flex flex-row items-start justify-start hover:bg-gainsboro-200">
          <div className="relative text-[1rem] tracking-[0.01em] font-semibold font-text-regular-normal text-[#214651] text-center inline-block min-w-[3.313rem]">
            Submit
          </div>
        </button>
      </div>
    </div>
    </div>
  );
};

ContactUs.propTypes = {
  className: PropTypes.string,
};

export default ContactUs;

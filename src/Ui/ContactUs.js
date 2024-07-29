import PropTypes from "prop-types";

const ContactUs = ({ className = "" }) => {
  return (
    <div className="w-full flex justify-center pt-[100px]">
      <div
        className={`self-stretch border rounded-[15px] md:px-[95px]  md:py-[75px] bg-[#214651] w-[90%] flex flex-col md:flex-row items-start p-[24px] box-border max-w-full gap-[1.25rem] text-left text-[2rem] text-sandybrown font-playfair-display ${className}`}
      >
        <div className="w-full text-[#F5F5F5] flex flex-col items-start gap-[3.125rem]">
          <div className="self-stretch flex flex-col items-start gap-[1.25rem]">
            <h1 className="m-0 self-stretch text-inherit font-inherit text-[2rem] leading-[1.5] md:text-[1.625rem]">
              <i className="font-medium text-[#FFC17A]">Contact</i>
              <span className="font-medium text-whitesmoke"> us</span>
            </h1>
            <div className="self-stretch text-[1rem] tracking-[0.01em] leading-[1.688rem] font-text-regular-normal text-whitesmoke">
              Unlock your business's potential with our expert accounting
              services.
            </div>
          </div>
          <div className="flex flex-col items-start gap-[1rem] text-[1rem] text-whitesmoke font-text-regular-normal">
            <div className="flex flex-row items-center gap-[1rem]">
              <img
                className="h-[1.375rem] w-[1.375rem]"
                alt=""
                src="/icon--envelope.svg"
              />
              <div className="leading-[150%]">info@proficientnow.com</div>
            </div>
            <div className="flex flex-row items-center gap-[1rem]">
              <img
                className="h-[1.375rem] w-[1.375rem]"
                alt=""
                src="/icon--phone.svg"
              />
              <div className="leading-[150%]">+1 (872) 350-0790</div>
            </div>
            <div className="flex flex-row items-center gap-[1rem]">
              <img
                className="h-[1.375rem] w-[1.375rem]"
                alt=""
                src="/icon--map.svg"
              />
              <div className="leading-[150%]">
                650 Warrenville Road, Ste 100 Lisle - IL 60532
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-[#F5F5F5] flex flex-col gap-[2.312rem] text-[1rem] text-whitesmoke font-text-regular-normal">
          <div className="w-full flex flex-col gap-[1.25rem]">
            <div className="flex flex-col gap-[1.25rem] md:flex-row">
              <div className="flex-1 flex flex-col gap-[0.5rem]">
                <div className="leading-[150%]">First name</div>
                <input
                  className="w-full border-none outline-none bg-gray-100 h-[2.5rem] rounded-[15px] p-[0.625rem] text-gray-200"
                  placeholder="Enter your first name"
                  type="text"
                />
              </div>
              <div className="flex-1 flex flex-col gap-[0.5rem]">
                <div className="leading-[150%]">Last name</div>
                <input
                  className="w-full border-none outline-none bg-gray-100 h-[2.5rem] rounded-[15px] p-[0.625rem] text-black"
                  placeholder="Enter your last name"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[0.5rem]">
              <div className="leading-[150%]">Email</div>
              <input
                className="w-full border-none outline-none bg-gray-100 h-[2.5rem] rounded-[15px] p-[0.625rem] text-black "
                placeholder="Enter your email address"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-[0.5rem]">
              <div className="leading-[150%]">Phone number</div>
              <input
                className="w-full border-none outline-none bg-gray-100 h-[2.5rem] rounded-[15px] p-[0.625rem] text-black "
                placeholder="Enter your phone number"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-[0.5rem]">
              <div className="leading-[150%]">Choose a topic</div>
              <div className="w-full rounded-[15px] bg-gray-100 flex flex-row items-center py-[0.687rem] pr-[0.75rem] pl-[0.937rem] gap-[1.25rem]">
                <div className="flex-1">Select one...</div>
                <img
                  className="h-[1.5rem] w-[1.5rem]"
                  alt=""
                  src="/icon--chevrondown.svg"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[1rem]">
              <div className="leading-[150%]">Which best describes you?</div>
              <div className="flex flex-col gap-[0.5rem]">
                <div className="flex flex-row items-center gap-[0.75rem]">
                  <input
                    className="cursor-pointer w-[1.125rem] h-[1.125rem]"
                    type="radio"
                    name="radioGroup-1"
                  />
                  <div className="leading-[150%]">First choice</div>
                </div>
                <div className="flex flex-row items-center gap-[0.75rem]">
                  <input
                    className="cursor-pointer w-[1.125rem] h-[1.125rem]"
                    type="radio"
                    name="radioGroup-1"
                  />
                  <div className="leading-[150%]">Third choice</div>
                </div>
                <div className="flex flex-row items-center gap-[0.75rem]">
                  <input
                    className="cursor-pointer w-[1.125rem] h-[1.125rem]"
                    type="radio"
                    name="radioGroup-1"
                  />
                  <div className="leading-[150%]">Fifth choice</div>
                </div>
              </div>
            </div>
            <div className="h-[11.25rem] rounded-[15px] bg-gray-100 flex flex-col p-[0.937rem]  text-black">
              {/* <div className="relative leading-[1.438rem] rounded-[15px]">
                Type your message...
              </div> */}
              <input
                className="w-full border-none outline-none bg-gray-100 rounded-[15px] p-[0.625rem] text-gray-200"
                placeholder=" Type your message..."
                type="text"
              />
            </div>
          </div>
          <button className="cursor-pointer border-none py-[0.75rem] px-[1.125rem] w-[95px] bg-gray-100 rounded-[15px] hover:bg-gainsboro-200">
            <div className="text-[1rem] font-semibold text-[#214651] text-center">
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

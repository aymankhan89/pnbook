// import GroupComponent3 from "../components/GroupComponent3";
import FrameComponent6 from "../Ui/FrameComponent6";
import Footer from "../Ui/Footer";
import Navbar from "../Ui/navbar";

const BlogsPage = () => {
  return (
    <div>
      <Navbar />

      <div className="w-full pt-[min(120px,max(70px,8.785vw))] relative bg-linen-100 overflow-hidden flex flex-col items-start justify-start  px-[0rem] pb-[0.012rem] box-border gap-[16rem] leading-[normal] tracking-[normal] lg:gap-[8rem] mq825:gap-[4rem]">
        <main className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[4.062rem] box-border max-w-full  lg:box-border">
          <section className=" text-[#202020] flex-1 flex flex-col items-start justify-start gap-[9.375rem] max-w-full text-left text-[2rem]  font-text-regular-normal mq825:gap-[2.313rem] mq450:gap-[1.188rem] mq1400:gap-[4.688rem]">
            <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
              <div className="w-[100.063rem] flex flex-col items-start justify-start gap-[6.25rem] max-w-full mq825:gap-[3.125rem] mq450:gap-[1.563rem]">
                <div className="w-[82rem] flex flex-col items-start justify-start gap-[3.75rem] max-w-full shrink-0 mq825:gap-[1.875rem]">
                  <div className="w-[31rem] flex flex-col items-start justify-start gap-[1.25rem] max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem]">
                      <h1 className="m-0 h-[2.688rem] relative text-inherit tracking-[0.01em] inline-block font-inherit mq825:text-[1.625rem] mq450:text-[1.188rem]">
                        <span>
                          <span className="font-medium">Our Latest</span>
                          <span className="font-text-regular-normal">{` `}</span>
                        </span>
                        <i className="font-medium font-playfair-display text-[#214651]">
                          Articles
                        </i>
                      </h1>
                    </div>
                    <div className="w-[29rem] relative text-[1rem] tracking-[0.01em] leading-[1.688rem] inline-block max-w-full">
                      Unlock your business's potential with our expert
                      accounting services. Our dedicated team ensures.
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[6.625rem] max-w-full text-[0.875rem] text-text-primary mq825:gap-[3.313rem] mq450:gap-[1.625rem] mq1400:flex-wrap">
                    <img
                      className="h-[29.988rem] flex-1   rounded-[15px] max-w-full overflow-hidden object-cover min-w-[25rem] mq825:min-w-full"
                      loading="lazy"
                      alt=""
                      src="/BlogsImg.svg"
                    />
                    <div className="w-[36.938rem] flex flex-col items-start justify-start py-[1.25rem] px-[0rem] box-border gap-[1.625rem] min-w-[36.938rem] max-w-full mq825:min-w-full mq1400:flex-1">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[1.125rem] max-w-full">
                        <div className="flex flex-row items-center justify-start gap-[1rem]">
                          <div className="rounded-8xs bg-lavender flex flex-row items-start justify-start py-[0.25rem] px-[0.5rem]">
                            <div className="relative bg-[#E4E7FF] rounded-[5px] leading-[150%] font-medium px-[8px] py-[4px] inline-block min-w-[3.563rem]">
                              Category
                            </div>
                          </div>
                          <div className="relative text-[#202020] font-[400] text-[0.813rem] leading-[1.25rem] inline-block min-w-[3.875rem]">
                            5 min read
                          </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem] max-w-full text-[1.875rem]">
                          <h2 className="m-0 self-stretch relative text-inherit leading-[130%] font-medium font-inherit mq825:text-[1.5rem] mq825:leading-[1.938rem] mq450:text-[1.125rem] mq450:leading-[1.438rem]">
                            Blog title heading will go here
                          </h2>
                          <div className="w-[32.5rem] relative text-[1rem] leading-[1.5rem] inline-block max-w-full">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse varius enim in eros.
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-center gap-[0.875rem] text-[1rem]">
                        <div className="relative font-[500] leading-[150%] inline-block min-w-[4.813rem]">
                          Read more
                        </div>
                        <img
                          className="h-[0.75rem] w-[0.75rem] relative"
                          loading="lazy"
                          alt=""
                          src="/vector-10.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[7.687rem] max-w-full shrink-0 text-[1rem] text-text-primary mq825:gap-[1.938rem] mq450:gap-[0.938rem] mq1400:gap-[3.813rem]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[7.687rem] max-w-full mq825:gap-[1.938rem] mq450:gap-[0.938rem] mq1400:gap-[3.813rem]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[4rem] max-w-full mq825:gap-[2rem] mq450:gap-[1rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.187rem] max-w-full mq825:flex-wrap">
                        <button className="cursor-pointer py-[0.375rem] px-[0.937rem] bg-[transparent] w-[5.5rem] rounded-[15px] box-border flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-[#214651] hover:bg-slategray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-slategray-100">
                          <div className="relative text-[1rem] leading-[150%] font-medium font-text-regular-normal text-[#214651] text-left inline-block min-w-[3.5rem]">
                            View all
                          </div>
                        </button>
                        <div className="flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                          <div className="relative leading-[150%] inline-block min-w-[5.688rem]">
                            Tax planning
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                          <div className="relative leading-[150%] inline-block min-w-[7.5rem]">
                            Industry updates
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                          <div className="relative leading-[150%]">{`Compliance & regulations`}</div>
                        </div>
                      </div>
                      <div className="w-[100.063rem] overflow-x-auto flex flex-row items-center justify-between gap-[1.25rem] max-w-full">
                        <FrameComponent6 placeholderImage="/placeholder-image-1@2x.png" />
                        <FrameComponent6 placeholderImage="/placeholder-image-2@2x.png" />
                        <FrameComponent6 placeholderImage="/placeholder-image@2x.png" />
                      </div>
                    </div>
                    <div className="w-[100.063rem] overflow-x-auto flex flex-row items-center justify-between gap-[1.25rem] max-w-full">
                      <FrameComponent6 placeholderImage="/Placeholder Image4.svg" />
                      <FrameComponent6 placeholderImage="/Placeholder Image5.svg" />
                      <FrameComponent6 placeholderImage="/Placeholder Image6.svg" />
                    </div>
                  </div>
                  <div className="w-[100.063rem] overflow-x-auto flex flex-row items-center justify-between gap-[1.25rem] max-w-full">
                    <FrameComponent6 placeholderImage="/placeholder-image-1@2x.png" />
                    <FrameComponent6 placeholderImage="/placeholder-image-2@2x.png" />
                    <FrameComponent6 placeholderImage="/placeholder-image@2x.png" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default BlogsPage;

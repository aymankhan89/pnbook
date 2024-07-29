import { useState } from "react";

const testimonials = [
  {
    id: 1,
    text: "The project exceeded all our expectations! The team’s innovative ideas and meticulous execution brought our concept to life. Their responsiveness and ability to address our concerns promptly made working together a breeze. We’re very pleased with the final result and the positive impact it’s had on our business. Will definitely be working with them again!",
    avatarImages: ["/avtar3.svg"],
    name: "John Doe",
    position: "CEO, Company A",
    logo: "/webflows.svg",
    rating: 3,
  },
  {
    id: 2,
    text: "Working with this team was a game-changer for our business. Their innovative approach and attention to detail exceeded our expectations. From the initial consultation to project completion, their professionalism and dedication shone through. We’ve seen remarkable results and couldn’t be happier with the outcome. Highly recommended for anyone looking to elevate their brand!",
    avatarImages: ["/avtar4.svg"],
    name: "Jane Smith",
    position: "CTO, Company B",
    logo: "/webflows.svg",
    rating: 4,
  },
  {
    id: 3,
    text: "Exceptional service and outstanding results! The team transformed our vision into reality with impressive skill and creativity. Their commitment to quality and customer satisfaction is evident in every aspect of their work. The project was completed on time and within budget, and we’ve received numerous compliments on the final product. Truly a pleasure to work with!",
    avatarImages: ["/avatar-image-1@2x.png"],
    name: "Alice Johnson",
    position: "CMO, Company C",
    logo: "/webflows.svg",
    rating: 5,
  },
  {
    id: 4,
    text: "A fantastic experience from start to finish. The team demonstrated exceptional expertise and delivered a top-notch solution that met all our needs. Their proactive communication and problem-solving skills made the process smooth and stress-free. We are thrilled with the results and appreciate their dedication to excellence. Highly recommend their services to others!",
    avatarImages: ["/avatar-image@2x.png"],
    name: "Bob Brown",
    position: "COO, Company D",
    logo: "/webflows.svg",
    rating: 2,
  },
  {
    id: 5,
    text: "Working with this team was a game-changer for our business. Their innovative approach and attention to detail exceeded our expectations. From the initial consultation to project completion, their professionalism and dedication shone through. We’ve seen remarkable results and couldn’t be happier with the outcome. Highly recommended for anyone looking to elevate their brand!",
    avatarImages: ["/avtar4.svg"],
    name: "Jane Smith",
    position: "CTO, Company B",
    logo: "/webflows.svg",
    rating: 4,
  },
  {
    id: 6,
    text: "Working with this team was a game-changer for our business. Their innovative approach and attention to detail exceeded our expectations. From the initial consultation to project completion, their professionalism and dedication shone through. We’ve seen remarkable results and couldn’t be happier with the outcome. Highly recommended for anyone looking to elevate their brand!",
    avatarImages: ["/avtar4.svg"],
    name: "Jane Smith",
    position: "CTO, Company B",
    logo: "/webflows.svg",
    rating: 4,
  },
];

const Testimonial = ({ className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalTestimonials = testimonials.length;
  const testimonialsPerPage = 2; // Number of testimonials per page for desktop
  const testimonialsPerPageMobile = 1; // Number of testimonials per page for mobile

  const handleNext = () => {
    if (currentIndex + testimonialsPerPage < totalTestimonials) {
      setCurrentIndex(
        (prevIndex) => (prevIndex + testimonialsPerPage) % totalTestimonials
      );
    }
  };

  const handlePrev = () => {
    if (currentIndex - testimonialsPerPage >= 0) {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - testimonialsPerPage + totalTestimonials) %
          totalTestimonials
      );
    }
  };

  const currentTestimonials = [
    testimonials[currentIndex % totalTestimonials],
    testimonials[(currentIndex + 1) % totalTestimonials],
  ];

  const currentTestimonialsMobile = [testimonials[currentIndex]];

  const isNextDisabled =
    currentIndex + testimonialsPerPage >= totalTestimonials;
  const isPrevDisabled = currentIndex === 0;

  return (
    <div className="relative flex justify-center items-center pt-[min(120px,max(70px,8.785vw))]">
      <div
        className={`self-stretch flex flex-row items-start justify-center w-full  pb-[0.881rem] box-border max-w-full text-left text-[2rem] text-gray-400 font-text-regular-normal ${className}`}
      >
        <div className="flex flex-col w-[80%] gap-[5rem] max-w-full">
          <div className="flex flex-col items-start justify-start gap-[1.25rem] max-w-full">
            <h1 className="m-0 text-inherit tracking-[0.01em] font-inherit text-[#202020]">
              <span className="font-medium">Trusted by Our </span>
              <i className="font-medium text-[#214651]">Happy Customers</i>
            </h1>
            <div className=" md:w-[27.188rem] text-[1rem] text-[#202020] leading-[1.688rem]">
              Experience unmatched quality and expertise. We're here to help you
              succeed and grow
            </div>
          </div>
          <div className="flex  grid gap-[2rem] max-w-full">
            {/* Display testimonials based on screen size */}
            <div className="block md:hidden">
              {currentTestimonialsMobile.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start justify-start gap-[2rem] text-left text-[1rem] text-text-primary font-text-regular-normal"
                >
                  <div className="overflow-hidden flex flex-row items-start justify-start gap-[0.375rem]">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <img
                        key={starIndex}
                        className="h-[1.181rem] w-[1.25rem] relative min-h-[1.188rem]"
                        alt={`Star ${starIndex + 1}`}
                        src="/rating-star.svg"
                      />
                    ))}
                  </div>
                  <div className="self-stretch relative leading-[140%] text-[#202020]">
                    {testimonial.text}
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[1.25rem] max-w-full text-[#202020]">
                    {testimonial.avatarImages.map((image, imgIndex) => (
                      <img
                        key={imgIndex}
                        className="h-[3.5rem] w-[3.5rem] relative rounded-[50%] object-contain"
                        loading="lazy"
                        alt={`Avatar ${imgIndex + 1}`}
                        src={image}
                      />
                    ))}
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[150%] font-semibold inline-block min-w-[7rem]">
                        {testimonial.name}
                      </div>
                      <div className="relative leading-[150%]">
                        {testimonial.position}
                      </div>
                    </div>
                    <div className="h-[3.875rem] w-[0.063rem] relative box-border border-r-[1px] border-solid border-black" />
                    <img
                      className="h-[3.5rem] w-[8.75rem] relative overflow-hidden"
                      loading="lazy"
                      alt=""
                      src={testimonial.logo}
                    />
                  </div>
                </div>
              ))}
            </div>
            {/* Desktop view */}
            <div className="hidden md:grid md:grid-cols-2 gap-[2rem] max-w-full">
              {currentTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start justify-start gap-[2rem] text-left text-[1rem] text-text-primary font-text-regular-normal"
                >
                  <div className="overflow-hidden flex flex-row items-start justify-start gap-[0.375rem]">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <img
                        key={starIndex}
                        className="h-[1.181rem] w-[1.25rem] relative min-h-[1.188rem]"
                        alt={`Star ${starIndex + 1}`}
                        src="/rating-star.svg"
                      />
                    ))}
                  </div>
                  <div className="self-stretch relative leading-[140%] text-[#202020]">
                    {testimonial.text}
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[1.25rem] max-w-full text-[#202020]">
                    {testimonial.avatarImages.map((image, imgIndex) => (
                      <img
                        key={imgIndex}
                        className="h-[3.5rem] w-[3.5rem] relative rounded-[50%] object-contain"
                        loading="lazy"
                        alt={`Avatar ${imgIndex + 1}`}
                        src={image}
                      />
                    ))}
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[150%] font-semibold inline-block min-w-[7rem]">
                        {testimonial.name}
                      </div>
                      <div className="relative leading-[150%]">
                        {testimonial.position}
                      </div>
                    </div>
                    <div className="h-[3.875rem] w-[0.063rem] relative box-border border-r-[1px] border-solid border-black" />
                    <img
                      className="h-[3.5rem] w-[8.75rem] relative overflow-hidden"
                      loading="lazy"
                      alt=""
                      src={testimonial.logo}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Pagination for both desktop and mobile */}
          <div className="flex flex-row items-center justify-between mt-[2rem]">
            {/* Pagination Circles */}
            <div className="flex gap-[7px] items-center mr-[2rem]">
              {[
                ...Array(
                  Math.ceil(totalTestimonials / testimonialsPerPageMobile)
                ),
              ].map((_, index) => (
                <div
                  key={index}
                  className={`h-[0.5rem] w-[0.5rem] rounded-full mb-[0.5rem] ${
                    index ===
                    Math.floor(currentIndex / testimonialsPerPageMobile)
                      ? "bg-black"
                      : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
            {/* Pagination Buttons */}
            <div className="flex gap-[1rem]">
              <button
                onClick={handlePrev}
                disabled={isPrevDisabled}
                className={`border p-[12px] border-[#000000] rounded-[15px] ${
                  isPrevDisabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <img
                  src="/icon.svg"
                  alt="Previous"
                  className="w-[24px] h-[24px]"
                />
              </button>
              <button
                onClick={handleNext}
                disabled={isNextDisabled}
                className={`border p-[12px] border-[#000000] rounded-[15px] ${
                  isNextDisabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <img
                  src="/icon-1.svg"
                  alt="Next"
                  className="w-[24px] h-[24px]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

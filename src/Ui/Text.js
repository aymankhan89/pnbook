import React from "react";
import { tv } from "tailwind-variants";
import { cn } from "../../lib/utils";

const TextVariants = tv({
  base: "",
  variants: {
    variant: {
      default: "",
      tablecell: "text-[min(0.82vw,14px)] font-normal",
      Heading: "text-[min(1.2vw,25px)] font-bold text-[#3E5CCE]", // Hero section center text
      SubHeading: "text-[min(0.72vw,14px)] font-normal",
      body: "text-[min(0.8vw,16px)] font-semibold",
      updateFormtitle: "text-[min(0.8vw,16px)] font-normal",
      updatesubtitle: "text-[min(0.72vw,14px)] font-normal text-[#A1A1A1]",
      caption: "text-[min(0.62vw,12px)] font-medium",
      smallText: "text-[min(0.6vw,10px)]",
      Description: "text-md ", // Footer variants
      smallHeading: "text-md text-",
      questionText: "text-[18px] font-[500] text-[#3E5CCE]",
      answerText: "font-[400] text-[15px] text-[#323232]",
      questionCount: "font-[500] text-[15px] text-[#3E5CCE]",
      timerText: "font-[500] text-[18px]",
      lessonCardsMheading: "font-[500] text-[18px]",
      subHeading: "font-[500] text-[13px] text-[#323232]",
      timeText: "font-[500] text-[13px] text-[#71717A] text-opacity-[90]",
      pageTitle: "font-[500] text-[25px] text-[#3E5CCE]",
      cardNumbers: "font-[600] text-[30px] text-[#3E5CCE]",
      cardDiscription: "font-[500] text-[20px] text-[#09090B]",
      navbarNormalState: "font-[500] text-[15px] text-[#71717A]",
      navbarActiveState: "font-[500] text-[15px] text-[#3E5CCE]",
      navbarDisabledState:
        "font-[500] text-[15px] text-[#71717A] text-opacity-[20]",
      cardHeading: "text-[16px] font-[500]",
      cardDescription: "text-[14px] font-[400] text-[#71717A] ",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const Text = ({ children, className, variant, ...props }) => {
  return (
    <p className={cn(TextVariants({ variant }), className)} {...props}>
      {children}
    </p>
  );
};

export default Text;

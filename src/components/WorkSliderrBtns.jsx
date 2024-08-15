"use client";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderrBtns = ({ containerStyles, btnStyles, iconStyles }) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles}>
        <PiCaretLeftBold
          onClick={() => swiper.slidePrev()}
          className={iconStyles}
        />
      </button>
      <button className={btnStyles}>
        <PiCaretRightBold
          onClick={() => swiper.slideNext()}
          className={iconStyles}
        />
      </button>
    </div>
  );
};

export default WorkSliderrBtns;

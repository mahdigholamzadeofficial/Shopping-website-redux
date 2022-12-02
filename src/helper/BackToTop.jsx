import React from "react";
import { SlArrowUp } from "react-icons/sl";
const BackToTop = () => {
  const clickHandler = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
    navigator.vibrate(100);
  };
  return (
    <button
      onClick={clickHandler}
      className="z-20 rounded-full fixed bottom-5 text-white hover:opacity-90 transition duration-500 ease text-2xl right-5 bg-primary p-4 overflow-hidden"
    >
      <div className="flex flex-col relative ">
        <span className="absolute top-0 animate-[backToTopAni_2000ms_ease-in-out_infinite]">
          <SlArrowUp />
        </span>
        <span className="absolute top0 animate-[backToTopAni_2000ms_ease-in-out_infinite_400ms]">
          <SlArrowUp />
        </span>
        <span>
          <SlArrowUp />
        </span>
      </div>
    </button>
  );
};

export default BackToTop;

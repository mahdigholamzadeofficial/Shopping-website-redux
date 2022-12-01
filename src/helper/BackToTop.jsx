import React from "react";
import { BsChevronDoubleUp } from "react-icons/bs";
const BackToTop = () => {
  const clickHandler = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      onClick={clickHandler}
      className="z-20 rounded-full fixed bottom-5 text-white hover:opacity-90 transition duration-500 ease text-2xl font-bold right-5 bg-primary p-5"
    >
      <BsChevronDoubleUp />
    </button>
  );
};

export default BackToTop;

import React from "react";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[calc(100vh-50px)] relative bg-error-404 bg-center bg-contain lg:bg-cover  bg-no-repeat	">
      {/* <img src={notFound} className="w-[1000px] md:w-full h-full" alt="" /> */}
      <div className="absolute top-0 right-0 h-full w-full flex items-end justify-center bg-primary bg-opacity-30  ">
        <button
          onClick={() => navigate("/", { replace: true })}
          className="py-5 px-7 bg-primary text-white mb-4 border border-2 border-white hover:opacity-80 transition duration-400 ease-in-out"
        >
          Back to home
        </button>
      </div>
    </div>
  );
};

export default NotFound;

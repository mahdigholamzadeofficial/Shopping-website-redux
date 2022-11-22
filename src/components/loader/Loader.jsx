import React from "react";
import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <div
      style={{ minHeight: "100vh" }}
      className="flex justify-center items-center"
    >
      <Oval height={100} width={100} color="rgb(9,16,62)" ariaLabel="loading" />
    </div>
  );
};

export default Loader;

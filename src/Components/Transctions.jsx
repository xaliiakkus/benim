import React from "react";
import ProjectCart from "./ProjectCart";
const Transctions = () => {
  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col md:p-12 py-12 px-4">
        <h3 className="text-white text-3xl text-center my-2">Projects</h3>
        <h3 className="text-white text-3xl text-center my-2">
          You Can Access The Projects I Wrote By Saying Go Reportstory
        </h3>

        <div className="flex flex-wrap justify-center items-center mt-10">
          <ProjectCart />
        </div>
      </div>
    </div>
  );
};
export default Transctions;

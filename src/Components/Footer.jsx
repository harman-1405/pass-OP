import React from "react";

const footer = () => {
  return (
    <div className="bg-purple-100 flex flex-col justify-centre items-center">
      <div>
        <div className="logo font-bold text-purple-950 text-xl">
          <span className="text-purple-400">&lt;</span>
          Pass
          <span className="text-purple-400">OP/&gt;</span>
        </div>
      </div>
      <div className="flex justify-center items-center">
        Created with <img className="w-5 mx-2" src="/icons/heart.png" alt="Love" /> by Harman{" "}
      </div>
    </div>
  );
};

export default footer;

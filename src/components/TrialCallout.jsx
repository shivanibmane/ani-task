import React from "react";

const TrialCallout = () => {
  return (
    <div className="flex flex-col items-center mt-10 gap-7 overflow-hidden ">
      <h1 className="text-7xl sm:text-9xl  bg-gradient-to-t from-[#E2E8F8] to-[#858992] bg-clip-text text-transparent opacity-10 hover:shadow-lg my-10 ">
        ad
        <span className="font-semibold bg-gradient-to-t from-[#E2E8F8] to-[#858992] bg-clip-text text-transparent">
          Task
        </span>
        .ai
      </h1>
      <div className="relative flex flex-col items-center gap-5">
        <div
          className="absolute sm:w-0 sm:h-0 w-96 -top-6
       border-l-[200px] border-l-transparent
       border-b-[400px] border-b-[#7687B5]
       border-r-[200px] border-r-transparent blur-2xl shadow-sm opacity-50"
        ></div>
      </div>

      <div className=" text-center w-full ">
        <h2 className="text-xl sm:text-2xl desktop:text-3xl font-semibold ">
          Are you ready to boost
          <br />
          <span className="w-10 sm:w-10/12 bg-gradient-to-r text-transparent bg-clip-text from-lightbule via-lightbule to-gray-300 rounded-md">
            your Digital Presence?
          </span>
        </h2>
      </div>
      <div className="flex flex-col gap-7 mx-auto py-10">
        <button className="relative overflow-hidden py-2.5 px-8 text-sm font-medium focus:outline-none rounded-full  focus:ring-gray-100 dark:bg-[#4e5b7e] dark:text-white dark:hover:text-gray-400  text-[]">
          <span className="relative z-10 ">Start Free Trail</span>
          <span className="absolute -bottom-4 blur-lg left-0 w-4/12 h-5 bg-[#95979e] mx-14 rounded-full"></span>
        </button>
        <button className="hidden lg:hidden desktop:block relative overflow-hidden py-2.5 px-8 me-2 text-sm font-medium focus:outline-none bg-white rounded-full border border-gray-200  focus:ring-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-gray-400 ">
          <span className="relative z-10 ">Schedule a Call</span>
          <span className="absolute -bottom-4 blur-lg left-0 w-4/12 h-5 bg-gray-400 mx-14 rounded-full"></span>
        </button>
      </div>
    </div>
  );
};

export default TrialCallout;

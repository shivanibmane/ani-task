import React from "react";

const SectionTitle = ({
  sectionName,
  sectionTitle,
  sectionTitleSapn,
  sectionDesc,
}) => {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center mt-20 gap-4 ">
        <div className="absolute top-32 w-96 h-40 bg-lightbule blur-3xl"></div>
        <span className="text-xs font-medium me-2 px-5 py-2 border border-darkgray rounded-full bg-gradient-to-b  from-[#282828] to-bglistdark bg-opacity-10">
          {sectionName}
        </span>
        <div className="flex w-full items-center desktop:px-10  ">
          <span className="sm:w-3/12 outline-none h-0.5 bg-gradient-to-l from-lightbule via-darkgray to-darkgray rounded-md" />
          <div className=" text-center w-full">
            <h2 className="text-xl sm:text-2xl desktop:text-3xl font-semibold ">
              {sectionTitle}
              <br />
              <span className="w-10 sm:w-10/12 bg-gradient-to-r text-transparent bg-clip-text from-lightbule via-lightbule to-gray-300 rounded-md">
                {sectionTitleSapn}
              </span>
            </h2>
          </div>
          <span className=" sm:w-3/12 outline-none h-0.5 bg-gradient-to-r from-lightbule via-darkgray to-darkgray  rounded-md" />
        </div>
        <p className="text-center text-xs sm:text-sm px-5 z-50 ">
          {sectionDesc}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;

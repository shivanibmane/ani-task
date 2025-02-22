import React from "react";

const FeatureWrapper = ({ children }) => {
  return (
    <div className="relative w-[352px] h-[593px] overflow-hidden border border-lightbule border-t-1.5 border-r-2 border-b-1.5 rounded-lg  bg-gradient-to-tl from-bglistlight via-lightblue to-bglistdark">
      <div className="absolute w-10 h-10 -left-5 top-0 rounded-full bg-gray-300 blur-2xl"></div>
      {children}
    </div>
  );
};

export default FeatureWrapper;

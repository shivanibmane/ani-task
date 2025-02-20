import React from "react";

const LogoWrapper = ({ children }) => {
  return (
    <div className="relative w-20 h-20 border border-lightbule border-t-1.5 border-r-2 border-b-1.5 hover:shadow-lightbule my-4 hover:shadow-md hover:-translate-y-3 duration-200 ease-in-out rounded-lg bg-darkgray flex items-center justify-center">
      {children}
    </div>
  );
};

export default LogoWrapper;

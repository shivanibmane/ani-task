import React from "react";

const Footer = () => {
  return (
    <>
      <div class="border-t bo border-gray-900 flex flex-col items-center">
        <div className="flex justify-center gap-4 py-5">
          <a href="">Home</a>
          <a href="">Resources</a>
          <a href="">Pricing</a>
          <a href="">Contact Us</a>
        </div>
        <div>
          <h1 className="text-4xl sm:text-7xl">
            ad
            <span className="font-semibold ">Task</span>
            .ai
          </h1>
        </div>
      </div>
    </>
  );
};

export default Footer;

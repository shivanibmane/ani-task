import React from "react";
import { logos } from "./constant";
import LogoWrapper from "./LogoWrapper";
import { socialMediaLogos } from "./constant";

const Logos = () => {
  return (
    <div className="w-full flex flex-col items-center space-y-7 ">
      <div className="w-full sm:block sm:w-9/12 overflow-hidden my-10 mx-auto animated-loop-scroll ">
        <div className="flex items-center space-x-10 animate-loop-scroll">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className={`w-[${logo.width}] h-[${logo.height}]`}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col space-y-4 items-center ">
        <h1>Adtask AI works with :</h1>
        <div className="grid grid-cols-3 sm:flex sm:space-x-10 space-x-2 ">
          {socialMediaLogos.map((socialMediaLogo) => (
            <div>
              <LogoWrapper>
                <img
                  src={socialMediaLogo.src}
                  alt={socialMediaLogo}
                  key={socialMediaLogo}
                />
              </LogoWrapper>
              <p className="text-center text-sm my-4">{socialMediaLogo.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Logos;

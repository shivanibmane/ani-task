import React from "react";
import amazon from "../assets/logos/amazon.png";
import cocacola from "../assets/logos/cocacola.png";
import google from "../assets/logos/google.png";
import intel from "../assets/logos/intel.png";
import salesforce from "../assets/logos/salesforce.png";
import sony from "../assets/logos/sony.png";
import workday from "../assets/logos/workday.png";

const Logos = () => {
  return (
    <>
      <div className=" sm:block sm:w-9/12 overflow-hidden my-10  mx-auto animated-loop-scroll">
        <div className="flex items-center  space-x-10 animate-loop-scroll">
          <img src={workday} alt="workday" className="w-[68px] h-[68px]" />
          <img src={google} alt="google" className="w-[90px] h-[90px]" />
          <img
            src={salesforce}
            alt="salesforce"
            className="w-[90px] h-[90px]"
          />
          <img src={amazon} alt="amazon" className="w-[90px] h-[46px]" />
          <img src={sony} alt="sony" className="w-[90px] h-[90px]" />
          <img src={cocacola} alt="cocacola" className="w-[90px] h-[28px]" />
          <img src={intel} alt="intel" className="w-[90px] h-[60px]" />
          <img src={workday} alt="workday" className="w-[68px] h-[68px]" />
          <img src={google} alt="google" className="w-[90px] h-[90px]" />
          <img
            src={salesforce}
            alt="salesforce"
            className="w-[90px] h-[90px]"
          />
          <img src={amazon} alt="amazon" className="w-[90px] h-[46px]" />
          <img src={sony} alt="sony" className="w-[90px] h-[90px]" />
          <img src={cocacola} alt="cocacola" className="w-[90px] h-[28px]" />
          <img src={intel} alt="intel" className="w-[90px] h-[60px]" />
        </div>
      </div>
    </>
  );
};

export default Logos;

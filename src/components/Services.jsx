import React from "react";
import SectionTitle from "./SectionTitle";
import point from "../assets/point.svg";
import { services } from "./constant";

const Services = () => {
  return (
    <div className="flex flex-col">
      <SectionTitle
        sectionName="SERVICES"
        sectionTitle="Innovative Services"
        sectionTitleSapn="for Growth."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 desktop:grid desktop:grid-cols-3 mx-auto py-10">
        {services.map((service) => (
          <div>
            <div className="relative w-72 h-72 flex flex-col items-center justify-center">
              <span className="absolute flex top-0 right-9 w-9/12 h-0.5 rounded-lg bg-lightbule"></span>
              <span className="absolute flex bottom-0 right-9 w-9/12 h-0.5 bg-lightbule"></span>
              <span className="absolute w-0.5 left-0 h-60 top-6 bg-lightbule"></span>
              <span className="absolute w-0.5 right-0 h-60 top-6 bg-lightbule"></span>
              <div className="absolute top-16 flex flex-col items-center gap-4">
                <img src={service.img} alt="" className="w-16 h-16 " />
                <h1 className="text-md font-semibold bg-gradient-to-r text-transparent bg-clip-text from-lightbule via-lightbule to-gray-300 rounded-md">
                  {service.title}
                </h1>
              </div>
              <p className="absolute bottom-4 px-3 text-center text-sm py-4">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

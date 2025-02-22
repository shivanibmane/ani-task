import React from "react";
import FeatureWrapper from "./FeatureWrapper";
import SectionTitle from "./SectionTitle";
import avatar from "../assets/avatar.svg";
import LogoWrapper from "./LogoWrapper";
import setting_lg from "../assets/setting-lg.svg";
import setting_sm from "../assets/setting-sm.svg";
import pie_chart from "../assets/piechart.svg";
const Features = () => {
  return (
    <div className="flex flex-col mx-auto">
      <SectionTitle />
      <div className="flex flex-col desktop:grid-cols-3 sm:grid sm:grid-cols-2 gap-7 mx-auto mt-10">
        <FeatureWrapper>
          <div className="relative grid grid-flow-row justify-center max-h-full py-24">
            <div className="absolute w-96 h-96 border rounded-full border-gray-600 top-14 -left-4 opacity-30 animate-ping ease-in-out bg-slate-200"></div>
            <div className="absolute w-96 h-96 border rounded-full border-gray-600 top-14 -left-4 opacity-10"></div>
            <div className="absolute w-64 h-64 rounded-full border-gray-600 top-28 left-12 flex items-center justify-center overflow-hidden">
              <span className="absolute w-3 h-3 bg-slate-300 rounded-full z-10"></span>
              <span className="absolute w-32 h-32 border-gray-600 rounded-full animate-ping border"></span>
              <img
                src={avatar}
                alt="avatar"
                className="absolute bottom-6 appear"
              />
              <img
                src={avatar}
                alt="avatar"
                className="absolute animate-pulse top-6"
              />
              <img src={avatar} alt="avatar" className="absolute right-6" />
              <img src={avatar} alt="avatar" className="absolute left-6" />
              <div className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#333B4F_20deg,transparent_50deg)] opacity-50"></div>
            </div>
          </div>
          <div className="absolute bottom-0 w-full px-5 py-4 space-y-1 ">
            <h1 className="text-lg bg-gradient-to-r font-semibold text-transparent bg-clip-text from-gray-300 to-lightbule rounded-md">
              Reach Target Audience
            </h1>
            <p className="font-extralight text-md">
              Intelligent Agents to Optimize your Reach Pinpoint the perfect
              audience with precision. Our AI-driven targeting ensures every
              message resonates where it matters most.
            </p>
          </div>
        </FeatureWrapper>
        <div className="sm:hidden w-[352px] h-[593px] desktop:w-[352px] desktop:h-[593px] desktop:flex desktop:flex-col flex flex-col gap-5 items-center desktop:order-none order-last ">
          <FeatureWrapper>
            <div className="relative grid grid-flow-row justify-center max-h-full py-5">
              <div className="w-32 h-32 border border-darkgray flex items-center justify-center rounded-lg ">
                <div className="w-28 h-28 border border-lightbule border-t-1.5 border-r-2 border-b-1.5  rounded-lg bg-darkgray flex items-center justify-center">
                  <div className="relative">
                    <span className="absolute bg-white w-5 h-5 blur-lg opacity-40"></span>
                    <img
                      src={setting_lg}
                      alt=" setting-lg"
                      className="animate-rotate w-2 h-2 "
                    />
                    <img
                      src={setting_sm}
                      alt="setting-sm"
                      className="absolute -bottom-8 -right-7 animate-rotate w-1 h-1"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 w-full px-5 py-2 space-y-1 ">
              <h1 className="text-lg bg-gradient-to-r font-semibold text-transparent bg-clip-text from-gray-300 to-lightbule rounded-md">
                Marketing made Easier
              </h1>
              <p className="font-extralight text-md">
                Save time and simplify campaign management. Let automated
                workflows handle the heavy lifting, so you can focus on
                creativity. Reach Target Audience
              </p>
            </div>
          </FeatureWrapper>
          <FeatureWrapper>
            <div className="relative grid grid-flow-col gap-4 items-center justify-center max-h-full py-5">
              <div className="w-28 h-28 border border-lightbule border-t-1.5 border-r-2 border-b-1.5  rounded-lg bg-darkgray flex items-center justify-center">
                <div className="relative">
                  <span className="absolute bg-white w-5 h-5 blur-lg opacity-40"></span>
                </div>
              </div>
              <div>
                <img src={pie_chart} alt="" />
              </div>
            </div>
            <div className="absolute bottom-0 w-full px-5 py-2 space-y-1 ">
              <h1 className="text-lg bg-gradient-to-r font-semibold text-transparent bg-clip-text from-gray-300 to-lightbule rounded-md">
                Smart Marketing Insights
              </h1>
              <p className="font-extralight text-md">
                Unlock actionable data to guide every decision. Stay ahead of
                trends, refine your strategies, and make confident moves with
                powerful analytics.
              </p>
            </div>
          </FeatureWrapper>
        </div>
        <FeatureWrapper></FeatureWrapper>{" "}
      </div>
    </div>
  );
};

export default Features;

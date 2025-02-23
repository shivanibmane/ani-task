import React from "react";
import SectionTitle from "./SectionTitle";
import { testinomials } from "./constant";
const Testinomial = () => {
  return (
    <div>
      <SectionTitle
        sectionName="TESTINOMIALS"
        sectionTitle="Trusted by"
        sectionTitleSapn="satisfied clients"
        sectionDesc="Discover how we’ve driven growth and innovation."
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:px-20 sm:gap-7 gap-3 px-10 mt-10">
        {testinomials.map((testinomial) => (
          <div class="block max-w-sm px-6 py-4 bg-white border border-lightbule border-t-1.5 border-r-2 border-b-1.5 rounded-2xl shadow-sm bg-gradient-to-b from-[#1a1a1a] to-bglistdark z-10">
            <p class="font-extralight line-clamp-5">{testinomial.info}</p>
            <p class="py-2 my-2 text-md font-semibold tracking-tight text-gray-900 dark:text-white">
              {testinomial.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Testinomial;

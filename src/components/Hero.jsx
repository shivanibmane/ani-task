import React from "react";
import Message from "./Message";

const Hero = () => {
  return (
    <>
      <div className="relative text-center flex justify-center max-w-[700px] mx-auto overflow-hidden">
        <div
          className="absolute sm:w-0 sm:h-0 top-0 w-96
       border-l-[300px] border-l-transparent
       border-b-[500px] border-b-[#7687B5]
       border-r-[300px] border-r-transparent blur-2xl shadow-sm opacity-50"
        ></div>
        <div className="flex flex-col mt-20 items-center gap-10">
          <div className="flex gap-1 border w-80 sm:w-96 bg-[#36363647] border-gray-500 items-center rounded-2xl py-2 sm:px-6 px-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.26045 0C6.92918 2.75561 8.29889 5.16613 12.5876 6.13864C8.40532 7.25586 7.15818 8.82341 6.39161 12.2145C5.45196 8.75358 4.56928 6.86625 0 6.13763C3.9242 5.10238 5.47668 2.94485 6.26045 0ZM16.2398 8.83859C15.1066 12.8237 12.7273 15.5713 8.21718 16.2048C13.5971 17.0143 15.3711 20.2071 16.2398 24C16.9655 19.5402 19.7092 17.1429 24 16.3272C19.8328 15.2646 17.0246 12.849 16.2398 8.83859Z"
                fill="#D9D9D9"
              />
            </svg>
            <p className="text-xs sm:text-sm">
              Transform Your Digital Presence with AI Agents
            </p>
          </div>
          <div>
            <h1 className="text-7xl sm:text-9xl  bg-gradient-to-r from-[#E2E8F8] via-[#858992] to-[#E2E8F8] bg-clip-text text-transparent opacity-15 hover:shadow-lg">
              adTask.ai
            </h1>
          </div>
          <p className="px-3">
            Stop struggling with marketing decisions. Our AI assistant analyzes
            your business, creates personalized strategies, and helps you
            execute them - all in real-time.
          </p>
          <div>
            <div className="relative overflow-hidden py-0.5 px-0.5 rounded-full mb-2">
              <div className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#6990a2_20deg,transparent_120deg)]"></div>
              <button className="relative overflow-hidden py-2.5 px-8 text-sm font-medium focus:outline-none rounded-full  focus:ring-gray-100 dark:bg-[#4e5b7e] dark:text-white dark:hover:text-gray-400  text-[]">
                <span className="relative z-10 ">Start Free Trail</span>
                <span className="absolute -bottom-4 blur-lg left-0 w-4/12 h-5 bg-[#95979e] mx-14 rounded-full"></span>
              </button>
            </div>
            <p className="text-xs sm:text-[10px] mb-2">
              Try AdTask AI free for 30 dayss
            </p>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden w-[350px] h-[250px] sm:w-[700px] sm:h-[400px] flex mx-auto rounded-2xl p-0.5 ">
        <div className="absolute animate-rotate inset-0 h-full w-full rounded-full bg-[conic-gradient(#4e5b7e_20deg,transparent_120deg)] "></div>
        <div className="relative w-full bg-black border border-[#4e5b7e] rounded-2xl flex items-center z-50 text-center">
          <h1 className="text-6xl sm:text-8xl bg-gradient-to-b from-[#fcfcfd] to-[#6f6f70] bg-clip-text  text-transparent opacity-15 mx-auto">
            AdTask.ai
          </h1>
          <svg
            width="96"
            height="67"
            viewBox="0 0 96 67"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute sm:right-72 right-36 sm:size-24 size-11"
          >
            <path
              d="M93.8798 10.4501C93.3292 8.4303 92.2551 6.58887 90.7645 5.10923C89.2738 3.62958 87.4187 2.56335 85.3838 2.0167C77.9341 0 47.9513 0 47.9513 0C47.9513 0 17.9671 0.0610443 10.5173 2.07774C8.48238 2.62443 6.62723 3.69072 5.13661 5.17043C3.64599 6.65014 2.5719 8.49164 2.02132 10.5116C-0.232053 23.6503 -1.10618 43.6706 2.0832 56.2837C2.63384 58.3036 3.70795 60.145 5.19857 61.6246C6.68918 63.1043 8.5443 64.1705 10.5792 64.7172C18.0289 66.7339 48.0125 66.7339 48.0125 66.7339C48.0125 66.7339 77.9956 66.7339 85.4449 64.7172C87.4799 64.1706 89.3351 63.1044 90.8258 61.6247C92.3165 60.1451 93.3906 58.3036 93.9413 56.2837C96.3181 43.1264 97.0504 23.1183 93.8798 10.4501Z"
              fill="#FF0000"
            />
            <path
              d="M0.407867 28.6668L25.2809 14.3667L0.407867 0.0667114V28.6668Z"
              fill="white"
              transform="translate(35 19)"
            />
          </svg>
        </div>
      </div>
      <Message />
    </>
  );
};

export default Hero;

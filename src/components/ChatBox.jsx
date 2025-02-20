import React from "react";
import chat_icon from "../assets/message.svg";

const ChatBox = ({ setIsChat }) => {
  return (
    <>
      <div className="dark:border-gray-700  bg-gradient-to-tl from-bglistlight to-bglistdark h-[300px]">
        <div className=" bg-[#1D2333] flex justify-between items-center py-3 px-3 ">
          <div className="flex gap-4">
            <button
              className="hidden border bg-gray-800 font-medium rounded-full text-sm py-3 px-3 text-center sm:flex  dark:border-[#4e5b7e]"
              onClick={() => setIsChat(true)}
            >
              <img src={chat_icon} alt="Chat-icon" />
            </button>
            <div className="flex flex-col">
              <h2 className="text-xl">Chat Box</h2>
              <p className="text-xs">Online</p>
            </div>
          </div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setIsChat(false)}
          >
            <path
              d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z"
              fill="#FEF7FF"
            />
          </svg>
        </div>
        <div class="absolute w-full px-4 bottom-0">
          <input
            type="text"
            id="voice-search"
            className=" border border-gray-300 text-gray-900 text-md rounded-lg w-full my-2 p-2 focus:outline-none  dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Send a message"
            required
          />
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-5 end-6  text-sm font-medium text-white"
          >
            <path
              d="M2.75 18.3333V3.66663L20.1667 11L2.75 18.3333ZM4.58333 15.5833L15.4458 11L4.58333 6.41663V9.62496L10.0833 11L4.58333 12.375V15.5833ZM4.58333 15.5833V11V6.41663V9.62496V12.375V15.5833Z"
              fill="#C7D7FF"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default ChatBox;

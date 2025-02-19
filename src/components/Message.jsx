import React from "react";
import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { chat } from "./constant";
import ChatBox from "./ChatBox";

const Message = () => {
  const [isChat, setIsChat] = useState(false);
  return (
    <>
      <button
        className="hidden ml-3 -mt-6 border bg-gray-800 hover:scale-105 duration-75  ease-in-out font-medium rounded-full text-sm p-2.5 text-center sm:flex  dark:border-[#4e5b7e]"
        onClick={() => setIsChat(true)}
      >
        {chat}
      </button>
      <Dialog
        open={isChat}
        onClose={setIsChat}
        className="relative z-50 text-white"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-700/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="relative flex min-h-full justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lgdark:border-gray-700  bg-gradient-to-t from-bglistlight to-bglistdark text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-96 sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 rounded-md"
            >
              <ChatBox setIsChat={setIsChat} />
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Message;

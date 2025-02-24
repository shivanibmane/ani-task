import React from "react";
import { contacts } from "./constant";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 mx-auto px-20 ">
      <h1 className="text-xs font-medium px-5 py-2 border border-darkgray rounded-full bg-gradient-to-b  from-[#282828] to-bglistdark bg-opacity-10">
        CONTACT
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:p-20">
        <div className="relative flex flex-col gap-4 font-extralight sm:px-10 py-5">
          <div className="absolute top-32 sm:right-20 w-44 h-16 bg-lightbule blur-3xl"></div>
          <h2 className="text-xl sm:text-2xl desktop:text-3xl font-extrabold">
            Ask whatever you have <br />
            <span className="w-10 sm:w-10/12 bg-gradient-to-r text-transparent bg-clip-text from-lightbule via-lightbule to-gray-300 rounded-md">
              in your mind now
            </span>
          </h2>
          <p className="">
            Whether you have questions or are ready to discuss your business,
            we’re here to help. Reach out today.
          </p>
          <div className="flex flex-col text-sm gap-3">
            {contacts.map((contatc) => (
              <a className="flex gap-3 items-center " key={contatc.title}>
                <img src={contatc.img} alt={contatc.title} />
                <p className="underline underline-offset-4 text-blue-400 cursor-pointer ">
                  {contatc.title}
                </p>
              </a>
            ))}
          </div>
        </div>
        <div>
          <form className="max-w-sm mx-auto">
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="name"
                id="name"
                className="bg-transparent border border-darkgray  text-sm rounded-lg block w-full p-2.5  outline-none"
                autoComplete="off"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="bg-transparent border border-darkgray text-sm rounded-lg block w-full p-2.5 outline-none"
                autoComplete="off"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white outline-current"
              >
                Message
              </label>
              <textarea
                type="email"
                id="email"
                className="bg-transparent border border-darkgray text-sm rounded-lg block w-full p-2.5 outline-none"
                autoComplete="off"
                required
              />
            </div>

            <button
              type="submit"
              className="text-white items-center border border-darkgray font-medium rounded-full text-sm w-full sm:w-auto px-8  py-2.5 text-center  focus:ring-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-gray-400"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

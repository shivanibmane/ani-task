import React, { useState } from "react";
import DropDown from "./DropDown";
import { dropDownIcon, rightArrow } from "./constant";
import { productsList, seoTools } from "./constant";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isItems, setIsItems] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="text-white sm:pt-5 mx-0 sm:mx-32 ">
        <div className=" sm:border bg-[#36363647] sm:border-gray-500 flex justify-between items-center rounded-2xl py-5 sm:py-2 px-3 ">
          <h1 className="text-3xl sm:ml-10 md:ml-4">
            ad<span className="font-semibold">Task</span>.ai
          </h1>
          <div className="block sm:hidden">
            {!isOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={openMenu}
              >
                <path
                  d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z"
                  fill="#FEF7FF"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={closeMenu}
              >
                <path
                  d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z"
                  fill="#FEF7FF"
                />
              </svg>
            )}
          </div>
          <div className="hidden sm:flex  sm:space-x-20 md:space-x-28">
            <nav className="flex gap-7 items-center text-md">
              <DropDown
                title="Products"
                icon={dropDownIcon}
                itemList={productsList}
              />
              <DropDown title="Tools" icon={dropDownIcon} itemList={seoTools} />
              <p>Contact Us</p>
            </nav>
            <div className="sm:flex ">
              <button className="relative py-2.5 px-8 me-2 text-sm font-medium focus:outline-none bg-white rounded-full border border-gray-200  focus:ring-gray-100 dark:bg-black dark:text-white dark:border-gray-600 dark:hover:text-gray-400 overflow-hidden">
                <span className="relative z-10">Log in</span>
                <span className="absolute -bottom-4 blur-lg left-0 w-6/12 h-5 bg-gray-400 mx-6 rounded-full"></span>
              </button>
              <button className="hidden lg:hidden desktop:block relative overflow-hidden py-2.5 px-8 me-2 text-sm font-medium focus:outline-none bg-white rounded-full border border-gray-200  focus:ring-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-gray-400 ">
                <span className="relative z-10 ">Schedule a Call</span>
                <span className="absolute -bottom-4 blur-lg left-0 w-4/12 h-5 bg-gray-400 mx-14 rounded-full"></span>
              </button>
              <button className="hidden lg:block desktop:hidden relative overflow-hidden py-2.5 px-2.5 w-10 h-10 me-2 text-sm font-medium focus:outline-none rounded-full bg-white rounded- border border-gray-200  focus:ring-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-gray-400 ">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative z-10 "
                >
                  <path
                    d="M19.9532 15.0955C19.7201 14.8473 18.8973 14.1134 17.3848 13.1424C15.8611 12.1629 14.7374 11.5522 14.4151 11.4097C14.3867 11.3971 14.3554 11.3925 14.3245 11.3964C14.2937 11.4002 14.2645 11.4124 14.2401 11.4316C13.7209 11.8365 12.8467 12.5803 12.7999 12.6205C12.4972 12.8799 12.4972 12.8799 12.2494 12.7991C11.8137 12.6562 10.4601 11.9374 9.28057 10.7553C8.10107 9.57311 7.34525 8.18603 7.20239 7.75075C7.12069 7.50253 7.12069 7.50253 7.38097 7.19985C7.42115 7.15297 8.16536 6.27885 8.57028 5.76009C8.58949 5.73566 8.60167 5.70646 8.60553 5.67563C8.60938 5.64479 8.60476 5.61349 8.59216 5.58509C8.44974 5.26231 7.83901 4.13908 6.85952 2.61539C5.88718 1.1033 5.15412 0.280521 4.9059 0.0474806C4.88312 0.025986 4.85497 0.0110331 4.8244 0.00419761C4.79384 -0.00263791 4.762 -0.00110294 4.73223 0.00864062C3.86457 0.306822 3.02741 0.687281 2.23217 1.14482C1.46448 1.59109 0.737682 2.10425 0.0602358 2.67833C0.0365878 2.69844 0.0188583 2.7246 0.00894859 2.75401C-0.00096112 2.78343 -0.00267715 2.81499 0.00398441 2.8453C0.0972904 3.28013 0.543284 5.09534 1.92725 7.60968C3.33934 10.1758 4.31794 11.4906 6.39165 13.5571C8.46537 15.6237 9.82166 16.6612 12.3905 18.0733C14.9048 19.4572 16.7209 19.9037 17.1549 19.9961C17.1853 20.0027 17.2169 20.0009 17.2463 19.991C17.2758 19.9811 17.3021 19.9634 17.3223 19.9398C17.8963 19.2624 18.4093 18.5356 18.8554 17.7679C19.3128 16.9726 19.6933 16.1355 19.9916 15.2679C20.0011 15.2383 20.0026 15.2068 19.9958 15.1765C19.9891 15.1462 19.9744 15.1182 19.9532 15.0955Z"
                    fill="url(#paint0_radial_419_17424)"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_radial_419_17424"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(10 10) rotate(89.7337) scale(10.8963 10.8962)"
                    >
                      <stop stopColor="#C7D7FF" />
                      <stop offset="1" stopColor="#788199" />
                    </radialGradient>
                  </defs>
                </svg>
                <span className="absolute -bottom-1 blur-md left-3 w-4/12 h-4 bg-gray-100 rounded-full "></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="w-full text-white sm:hidden pt-10 px-16  flex flex-col h-screen  bg-gradient-to-br from-bglistdark to-bglistlight">
          <div className=" flex flex-col items-start gap-7 sm:space-x-20 md:space-x-28">
            {isItems ? (
              <div className="flex items-start gap-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-3 gap-2"
                  onClick={() => setIsItems(false)}
                >
                  <path
                    d="M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z"
                    fill="#C7D7FF"
                  />
                </svg>
                <div>
                  <h2 className="text-xl bg-gradient-to-r from-darkgray to-lightbule bg-clip-text text-transparent font-semibold py-2">
                    Product
                  </h2>
                  <div className="flex flex-col">
                    {productsList.map((item) => (
                      <div className="flex flex-col gap-1" key={item}>
                        <div>
                          <a
                            href=""
                            className="block items-start py-2 text-xs text-white  data-[focus]:text-gray-500 data-[focus]:outline-none"
                          >
                            {item}
                          </a>
                        </div>
                        <span className="w-32 sm:w-10/12 outline-none h-0.5 bg-gradient-to-r from-darkgray via-lightbule to-darkgray rounded-md" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <nav className="flex gap-7  text-md flex-col">
                <div
                  className="flex gap-3 items-center"
                  onClick={() => setIsItems(true)}
                >
                  <p>Product</p>
                  <span>{rightArrow}</span>
                </div>
                <div
                  className="flex gap-3 items-center"
                  onClick={() => setIsItems(true)}
                >
                  <p>Tools</p>
                  <span>{rightArrow}</span>
                </div>
                <p>Contact Us</p>
              </nav>
            )}

            <div className={`flex flex-col gap-6`}>
              <button className="relative py-2.5 px-8 me-2 text-sm w-36 font-medium focus:outline-none bg-white rounded-full border border-gray-200  focus:ring-gray-100 dark:bg-black dark:text-white dark:border-gray-600 dark:hover:text-gray-400 overflow-hidden ">
                <span className="relative z-10">Log in</span>
                <span className="absolute -bottom-4 blur-lg left-0 w-6/12 h-5 bg-gray-400 mx-6 rounded-full"></span>
              </button>
              <button className="block lg:hidden desktop:block  relative overflow-hidden py-2.5 px-6 me-2 text-sm font-medium focus:outline-none bg-white rounded-full border border-gray-200  focus:ring-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-gray-400 ">
                <span className="relative z-10 ">Schedule a Call</span>
                <span className="absolute -bottom-4 blur-lg left-0 w-4/12 h-5 bg-gray-400 mx-14 rounded-full"></span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

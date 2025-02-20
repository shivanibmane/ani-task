import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const DropDown = ({ title, icon, itemList }) => {
  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <MenuButton className="flex items-center gap-1 w-full justify-center gap-x-1.5 rounded-md  sm:px-3 sm:py-2">
          <span>{title}</span>
          <img src={icon} alt="Dropdown-icon" />
        </MenuButton>
        <MenuItems
          transition
          className="absolute left-0 z-10 mt-3 w-80 sm:min-w-[500px]  origin-top-right rounded-md shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in border border-gray-200   dark:border-gray-700  bg-gradient-to-t from-bglistlight to-bglistdark"
        >
          <div className="flex flex-col items-start sm:items-start sm:flex-row sm:justify-between sm:px-6 sm:py-3">
            <h2 className="text-xl bg-gradient-to-r from-darkgray to-lightbule bg-clip-text text-transparent font-semibold py-2">
              {title}
            </h2>
            <div className="flex flex-col sm:grid sm:grid-cols-2  ">
              {itemList.map((item) => (
                <div className="flex flex-col " key={item}>
                  <MenuItem>
                    <a
                      href=""
                      className="block items-start px-4 py-2 text-xs text-white  data-[focus]:text-gray-500 data-[focus]:outline-none"
                    >
                      {item}
                    </a>
                  </MenuItem>
                  <span className="ml-4 w-32 sm:w-10/12 outline-none h-0.5 bg-gradient-to-r from-darkgray via-lightbule to-darkgray  rounded-md" />
                </div>
              ))}
            </div>{" "}
          </div>
        </MenuItems>
      </Menu>
    </>
  );
};

export default DropDown;

import React from "react";

const ItemsOpen = ({ title, itemList }) => {
  return (
    <>
      <div>
        <h2 className="text-xl bg-gradient-to-r from-darkgray to-lightbule bg-clip-text text-transparent font-semibold py-2">
          {title}
        </h2>
        <div className="flex flex-col">
          {itemList.map((item) => (
            <div className="flex flex-col gap-1" key={item}>
              <div>
                <a
                  href=""
                  className="block items-start py-2 text-xs text-white  data-[focus]:text-gray-500 data-[focus]:outline-none"
                >
                  {item}
                </a>
              </div>
              <span className=" w-32 sm:w-10/12 outline-none h-0.5 bg-gradient-to-r from-darkgray via-lightbule to-darkgray  rounded-md" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ItemsOpen;

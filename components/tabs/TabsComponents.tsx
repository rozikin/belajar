"use client";
import { useEffect, useRef, useState } from "react";

const TabsComponents = ({ items }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const firstBtnRef: any = useRef();

  useEffect(() => {
    firstBtnRef.current.focus();
  }, []);

  return (
    <div className="bg-sky-100 flex justify-center items-center py-12 ">
      <div className="max-w-md flex flex-col gap-y-2 w-full">
        <div className="bg-blue-400 p-1 rounded-xl flex justify-between items-center gap-x-2 font-bold text-white">
          {items.map((item: any, index: number) => (
            <button
              ref={index === 0 ? firstBtnRef : null}
              key={index}
              onClick={() => setSelectedTab(index)}
              className={`outline-none w-full p-2 hover:bg-blue-300 rounded-xl text-center  ${
                selectedTab === index ? "ring-2 bg-white text-blue-600" : ""
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="bg-white p-2 rounded-xl">
          {items.map((item: any, index: number) => (
            <div
              key={index}
              className={`${selectedTab === index ? "" : "hidden"}`}
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabsComponents;

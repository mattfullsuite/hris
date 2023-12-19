import React from "react";

const DashBNumofLeaveToday = () => {
  return (
    <>
      <div className="m-2 p-4 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700 flex flex-1 flex-col items-center justify-between text-center md:w-56 h-56">

        <h1 className="text-xl font-semibold text-left w-full">Out of office</h1>

        <h1 className="my-1 text-7xl font-bold">4</h1>

        <div className="text-right w-full">
          <span className="text-[12px] text-gray-500 italic">
            As of March 25, 2023
          </span>
        </div>
      </div>
    </>
  );
};

export default DashBNumofLeaveToday;

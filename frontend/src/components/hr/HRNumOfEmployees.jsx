import React, {useState, useEffect}  from "react";

const HRNumEmployees = () => {
  const [ptos, setPtos] = useState([])

  return (
    <>
      <div className="flex flex-row my-7">
            <div className="flex flex-col justify-between items-center">
              <div className="m-2 p-3 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700 flex flex-1 flex-col items-center justify-center text-center">
                <h2 className="text-lg font-semibold">Current Number of Employees</h2>
                <h1 className="my-16 text-7xl font-extrabold">87</h1>
              </div>

              <button className="m-2 btn btn-sm btn-outline normal-case btn-wide">Add New Employee</button>
            </div>

          <div className="flex-initial w-30">
            <div className="flex flex-col justify-between">
                <div className="m-2 p-3 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700 flex flex-1 flex-col items-center justify-center text-center h-auto">
                  <h1 className="my-1 text-3xl font-bold">12</h1>
                  <h2 className="text-lg font-semibold">Probationary</h2>
                </div>

                <div className="m-2 p-3 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700 flex flex-1 flex-col items-center justify-center text-center">
                  <h1 className="my-1 text-3xl font-bold">76</h1>
                  <h2 className="text-lg font-semibold">Regulars</h2>
                </div>

                <div className="m-2 p-3 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700 flex flex-1 flex-col items-center justify-center text-center">
                  <h1 className="my-1 text-3xl font-bold">9</h1>
                  <h2 className="text-lg font-semibold">Scholars</h2>
                </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default HRNumEmployees;
import React from "react";

const DashBBirthdays = () => {
    return(
        <>
        {/* Birthdays Table */}
        <div className="m-2 p-3 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700 flex flex-1 flex-col items-center justify-center">
              <h1 className="text-lg font-semibold">Birthdays</h1>
              <div className="overflow-x-auto max-w-full">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <td>John Doe</td>
                      <td>Jan. 01</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
        </>
    )
}

export default DashBBirthdays;
import React from "react";

const DashBOwnPTO = () => {
  return (
    <>
      <>
        {/* PTO Notices */}
        <div className="m-2 p-3 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700 flex flex-col items-center justify-center">
          <h1 className="text-lg font-semibold">Your PTOs</h1>
          <div className="overflow-x-auto max-w-full">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Date Filed</th>
                  <th>Name</th>
                  <th>PTO Type</th>
                  <th>Date From</th>
                  <th>Date To</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}

                <tr>
                  <th>1</th>
                  <td>Nov. 12, 2023</td>
                  <td>Matt Wil Salvador</td>
                  <td>MENTAL HEALTH BREAK</td>
                  <td>Nov. 12, 2023 date from</td>
                  <td>Nov. 12, 2023 date to</td>
                  <td>
                    {" "}
                    <div className="badge badge-warning gap-1">Pending</div>
                  </td>
                  <td className="text-center">
                    <button
                      className="btn btn-ghost btn-xs normal-case"
                      onClick={() =>
                        document
                          .getElementById("emp_pto_details_btn")
                          .showModal()
                      }
                    >
                      Details
                    </button>
                    {/* Modal - Details */}
                    <dialog
                      id="emp_pto_details_btn"
                      className="modal text-left"
                    >
                      <div className="modal-box">
                        <h3 className="font-bold text-lg mb-5">PTO Details</h3>
                        <h3 className="font-bold text-lg mb-2">John Doe</h3>
                        <div className="flex">
                          <div className="flex-1">
                            <h3 className="font-base">Date Filed:</h3>
                            <h3 className="font-semibold mb-2">
                              Nov. 12, 2023
                            </h3>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-base">PTO Type:</h3>
                            <h3 className="font-semibold mb-2">Sick Leave</h3>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="flex-1">
                            <h3 className="font-base">Date From:</h3>
                            <h3 className="font-semibold mb-2">
                              Nov. 23, 2023
                            </h3>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-base">Date To:</h3>
                            <h3 className="font-semibold mb-2">
                              Nov. 24, 2023
                            </h3>
                          </div>
                        </div>
                        <div>
                          <h1 className="font-base">Reason:</h1>
                          <p className="font-semibold mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate
                          </p>
                        </div>
                        <div className="badge badge-warning gap-1">Pending</div>

                        <div className="modal-action">
                          <form method="dialog">
                            <button className="btn">Close</button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </td>{" "}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    </>
  );
};

export default DashBOwnPTO;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import ManagerSideBar from "../../components/manager/ManagerSideBar";
import Layout from "../../components/Layout/Layout";

const LeadDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get("http://localhost:6197/login").then((response) => {
      if (response.data.loggedIn == false) {
        navigate("/login");
      }
    });
  }, []);

  return (
    <>
      <ManagerSideBar></ManagerSideBar>

      <div className="p-4 sm:ml-64 flex flex-col">
        {/* Date */}
        <div className="mb-1 text-xl">
          <p>Friday, November 03, 2023</p>
        </div>

        {/* Greeting */}
        <div className="m-2 text-3xl font-bold">
          <p>Good Morning Manager User!</p>
        </div>

        {/* Widget Container */}
        <div className="my-2 mx-2">
          <div className="flex">
            {/* Remaining Offset Time */}
            <div className="m-2 p-3 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700 flex flex-1 flex-col items-center justify-center text-center">
              <h1 className="text-lg font-semibold">Remaining Offset Time</h1>
              <h1 className="my-1 text-3xl font-bold">5 hr/s</h1>
              <button className="btn btn-sm btn-active normal-case">
                Reparation Request
              </button>
            </div>
            {/* Number of PTOs */}
            <div className="m-2 p-3 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700 flex flex-1 flex-col items-center justify-center text-center">
              <h1 className="text-lg font-semibold">Number of PTOs</h1>
              <h1 className="my-1 text-3xl font-bold">2.30</h1>
              <h1 className="text-base font-normal">Available until</h1>
              <h1 className="text-base font-semibold">March 25, 2023</h1>
            </div>
          </div>

          {/* Buttons */}
          <div className="m-2 flex flex-col">
            <button
              className="my-2 btn btn-sm btn-active normal-case"
              onClick={() =>
                document.getElementById("file_a_leave_btn").showModal()
              }
            >
              File a Leave
            </button>

            {/* Modal - File A Leave   */}
            <dialog id="file_a_leave_btn" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">File A Leave</h3>
                <form id="leaveForm" action="">
                  {/* Dropdown - PTO Type */}
                  <select
                    className="select select-bordered w-full max-w-xs mb-2"
                    required
                  >
                    <option disabled selected>
                      PTO Type
                    </option>
                    <option>Sick Leave</option>
                    <option>Bereavement Leave</option>
                    <option>Maternity/Paternity Leave</option>
                    <option>Vacation Leave</option>
                    <option>Adverse Weather Leave</option>
                    <option>Study Leave</option>
                    <option>Emergency Leave</option>
                    <option>Other/Special Leave</option>
                  </select>

                  {/* Date From */}
                  <h1>Date From</h1>
                  <input
                    type="date"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs mb-2"
                    required
                    id="dateFrom"
                  />

                  {/* Date To */}
                  <h1>Date To</h1>
                  <input
                    type="date"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs mb-2"
                    required
                  />

                  {/* Reason for Leave */}
                  <h1>Reason for Leave</h1>
                  <textarea
                    className="textarea textarea-bordered w-full max-w-lg mb-2"
                    placeholder="Reason for Leave..."
                    required
                  ></textarea>

                  {/* Current PTO Points */}
                  <h1 className="text-base">Current PTO Points</h1>
                  <h1 className="text-lg font-bold mb-2">2.30</h1>

                  {/* Use PTO Checkbox */}
                  <div className="flex justify-start items-center">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm mr-3"
                    />{" "}
                    <h1>Use PTO?</h1>
                  </div>

                  {/* Button Container */}
                  <div className="flex justify-end mt-3">
                    <button type="button" className="btn btn-primary mr-2">
                      Submit
                    </button>

                    {/* Cancel Button */}
                    <form method="dialog">
                      {/* If there is a button in form, it will close the modal */}
                      <button className="btn">Cancel</button>
                    </form>
                  </div>
                </form>
              </div>
            </dialog>

            <button className="my-2 btn btn-sm btn-active normal-case">
              View Recent Payslip
            </button>
          </div>

          {/* PTO Notices */}
          <div className="m-2 p-3 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700 flex flex-col items-center justify-center">
            <h1 className="text-lg font-semibold">PTO Notices</h1>
            <div className="overflow-x-auto max-w-full">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Date Filed</th>
                    <th>Name</th>
                    <th>PTO</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>1</th>
                    <td>Nov. 12, 2023</td>
                    <td>John Doe</td>
                    <td>Sick Leave</td>
                    <td>Pending</td>
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
                      <dialog id="emp_pto_details_btn" class="modal text-left">
                        <div className="modal-box">
                          <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                              ✕
                            </button>
                          </form>
                          <h3 className="font-bold text-lg mb-5">
                            PTO Details
                          </h3>
                          <h3 className="font-bold text-xl mb-2">John Doe</h3>
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
                           <p className="font-semibold mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
                          </div>
                          <div className="badge badge-warning gap-1 mb-5">
                            Pending
                          </div>

                          <div className="flex justify-end">
                            <button class="btn bg-green-600 text-white hover:bg-green-800 mr-2 normal-case">
                              Approve
                            </button>
                            <button class="btn bg-red-600 text-white hover:bg-red-800 normal-case">
                              Decline
                            </button>
                          </div>

                          <div class="modal-action"></div>
                        </div>
                      </dialog>
                    </td>{" "}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex">
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

            {/* Anniversary Table */}
            <div className="m-2 p-3 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700 flex flex-1 flex-col items-center justify-center">
              <h1 className="text-lg font-semibold">FS Anniversary</h1>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default LeadDashboard;

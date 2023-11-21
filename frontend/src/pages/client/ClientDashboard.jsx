import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import Layout from "../../components/Layout/Layout";
import ClientSideBar from "../../components/client/ClientSideBar";


const ClientDashboard = () => {
  /**const navigate = useNavigate()

   useEffect(() => {
      Axios.get("http://localhost:6197/login").then((response) => {
         if (response.data.loggedIn == false) {
            navigate("/login")
         }
      })
   }, [])**/

  return (
    <>
      <Layout>
        <ClientSideBar></ClientSideBar>
      </Layout>

      <div className="p-4 sm:ml-64 flex flex-col">
        {/* Date */}
        <div className="mb-1 text-xl">
          <p>Friday, November 03, 2023</p>
        </div>

        {/* Greeting */}
        <div className="m-2 text-3xl font-bold">
          <p>Good Morning User!</p>
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
                <select className="select select-bordered w-full max-w-xs">
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


<div date-rangepicker class="flex items-center">
  <div class="relative">
    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
         <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
        </svg>
    </div>
    <input name="start" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start">
  </div>
  <span class="mx-4 text-gray-500">to</span>
  <div class="relative">
    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
         <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
        </svg>
    </div>
    <input name="end" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date end">
</div>
</div>

                <p className="py-4">
                  Press ESC key or click the button below to close
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
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
                      <button className="btn btn-ghost btn-xs normal-case">
                        Details
                      </button>
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

export default ClientDashboard;

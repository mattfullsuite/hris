import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Axios from "axios";
import Layout from "../../components/Layout/Layout";
import HRSideBar from "../../components/hr/HRSideBar";


const HRDashboard = () => {
  Axios.defaults.withCredentials = true;

  const navigate = useNavigate();

  const [users, setUser] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:6197/login").then((response) => {
      if (response.data.loggedIn == false) {
        navigate("/login");
      } else {
        console.log(response.data.user[0].f_name);
      }
    });
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await Axios.get("http://localhost:6197/login");
        setUser(res.data.user);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserData();
  }, []);

  const logoutEmployee = () => {
    Axios.get("http://localhost:6197/logout");
  };

  return (
    <>
      <Layout>
        <HRSideBar></HRSideBar>
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
    <form id="leaveForm" action="">
      {/* Dropdown - PTO Type */}
      <select className="select select-bordered w-full max-w-xs mb-2" required>
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
        {/* Submit Button with Confirmation */}
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

export default HRDashboard;

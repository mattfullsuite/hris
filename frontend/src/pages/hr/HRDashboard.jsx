import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Axios from "axios";

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
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-4 overflow-y-auto bg-pink-200 dark:bg-gray-800">
          <ul class="space-y-2 font-medium">
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                {users.map((user) => (
                  <div>
                    <div class="ml-3"> {user.f_name + " " + user.s_name}</div>
                    <div class="ml-3">{user.role}</div>
                  </div>
                ))}
              </a>
            </li>
            <br /> <br /> <br /> <br /> <br />
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span class="ml-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">
                  <Link to="/employees">Employees</Link>
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Announcements</span>
                <span class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300"></span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Attendance</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Training</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Directory</span>
              </a>
            </li>
            <br />
            <br />
            <br />
            <li>
              <a
                href="#"
                onClick={logoutEmployee}
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <div class="p-4 sm:ml-64">
        {/* Date */}
        <div className="mb-5 text-xl">
          <p>Friday, November 03, 2023</p>
        </div>

        {/* Greeting */}
        <div className="mb-5 text-3xl font-bold">
          <p>Good Morning User!</p>
        </div>

        {/* <!-- Single Row --> */}
        <div class="grid grid-cols-[20%,80%] gap-4 my-4 mx-4">
          {/* <!-- Remaining Offset Time --> */}
          <div class="p-3 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700 flex flex-col items-center justify-center">
            <p class="text-l font-semibold">Remaining Offset Time</p>
            <div class="flex flex-row items-center p-3">
              <span class="text-5xl font-bold">5</span>
              <span class="text-3xl font-bold"> hr/s</span>
            </div>
            <button class="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded-full">
              Reparation Request
            </button>
          </div>

          {/* PTO Notices (spanning until Number of PTOs)*/}
          <div class="p-3 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700 row-span-2">
            <p class="text-xl font-semibold">PTO Notices</p>

            <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
              <ul
                class="flex flex-wrap -mb-px text-sm font-medium text-center"
                id="default-tab"
                data-tabs-toggle="#default-tab-content"
                role="tablist"
              >
                <li class="me-2" role="presentation">
                  <button
                    class="inline-block p-4 border-b-2 rounded-t-lg"
                    id="profile-tab"
                    data-tabs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    All
                  </button>
                </li>
                <li class="me-2" role="presentation">
                  <button
                    class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                    id="dashboard-tab"
                    data-tabs-target="#dashboard"
                    type="button"
                    role="tab"
                    aria-controls="dashboard"
                    aria-selected="false"
                  >
                    Approved
                  </button>
                </li>
                <li class="me-2" role="presentation">
                  <button
                    class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                    id="settings-tab"
                    data-tabs-target="#settings"
                    type="button"
                    role="tab"
                    aria-controls="settings"
                    aria-selected="false"
                  >
                    Pending
                  </button>
                </li>
              </ul>
              <div class="overflow-x-auto">
                {/* Table for the PTO Notices */}
                {/* Dialog for "Details Button" */}
                <table class="table">
                  {/* <!-- head --> */}
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Date</th>
                      <th>Type</th>
                      <th>Status</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* <!-- row 1 --> */}
                    <tr>
                      <td>
                        <div class="flex items-center gap-3">
                          <div>
                            <div class="font-bold">Matteo Salvador</div>
                          </div>
                        </div>
                      </td>
                      <td>Decemeber 01, 2023</td>
                      <td>Sick Leave</td>
                      <td>Approved</td>
                      <th>
                        <button
                          className="btn btn-ghost btn-xs"
                          onClick={() =>
                            document
                              .getElementById("pto_notice_details")
                              .showModal()
                          }
                        >
                          Details
                        </button>

                        <dialog
                          id="pto_notice_details"
                          className="modal modal-bottom sm:modal-middle"
                        >
                          <div className="modal-box flex flex-col justify-center">
                            <h3 className="font-bold text-lg">
                              PTO Information
                            </h3>
                            <p className="pt-2 pb-2">Matteo Salvador</p>
                            <p className="font-semibold">Sick Leave</p>
                            <p className="font-normal pt-1">
                              December 01, 2023
                            </p>
                            <p className="font-normal pt-1">
                              December 01, 2023
                            </p>
                            <p className="font-normal pt-1 pb-1">Approved</p>
                            <p className="font-normal pt-1 pb-1">Jhex Chun</p>
                            <div className="modal-action p-1 m-1">
                              <form method="dialog">
                                {/* if there is a button in the form, it will close the modal */}
                                <button className="btn">Close</button>
                              </form>
                            </div>
                          </div>
                        </dialog>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div id="default-tab-content">
              <div
                class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  This is some placeholder content the{" "}
                  <strong class="font-medium text-gray-800 dark:text-white">
                    Profile tab's associated content
                  </strong>
                  . Clicking another tab will toggle the visibility of this one
                  for the next. The tab JavaScript swaps classes to control the
                  content visibility and styling.
                </p>
              </div>
              <div
                class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                id="dashboard"
                role="tabpanel"
                aria-labelledby="dashboard-tab"
              >
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  This is some placeholder content the{" "}
                  <strong class="font-medium text-gray-800 dark:text-white">
                    Dashboard tab's associated content
                  </strong>
                  . Clicking another tab will toggle the visibility of this one
                  for the next. The tab JavaScript swaps classes to control the
                  content visibility and styling.
                </p>
              </div>
              <div
                class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                id="settings"
                role="tabpanel"
                aria-labelledby="settings-tab"
              >
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  This is some placeholder content the{" "}
                  <strong class="font-medium text-gray-800 dark:text-white">
                    Settings tab's associated content
                  </strong>
                  . Clicking another tab will toggle the visibility of this one
                  for the next. The tab JavaScript swaps classes to control the
                  content visibility and styling.
                </p>
              </div>
              <div
                class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                id="contacts"
                role="tabpanel"
                aria-labelledby="contacts-tab"
              >
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  This is some placeholder content the{" "}
                  <strong class="font-medium text-gray-800 dark:text-white">
                    Contacts tab's associated content
                  </strong>
                  . Clicking another tab will toggle the visibility of this one
                  for the next. The tab JavaScript swaps classes to control the
                  content visibility and styling.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Number of PTOs --> */}
          <div class="p-3 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700 flex flex-col items-center justify-center">
            <p class="text-l font-semibold">Number of PTOs</p>
            <span class="text-5xl font-bold">5</span>
            <br />
            <p class="text-l font-normal">Available until</p>
            <p class="text-xl font-normal">March 25, 2023</p>
          </div>

          {/* <!-- Buttons below --> */}
          <button
            class="btn bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded"
            onClick={() => document.getElementById("file_leave").showModal()}
          >
            File A Leave
          </button>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          {/* <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button> */}
          <dialog
            id="file_leave"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-xl">File A Leave</h3>
              <div>
                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                >
                  Dropdown button{" "}
                  <svg
                    class="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                {/* <!-- Dropdown menu --> */}
                <div
                  id="dropdown"
                  class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>

          <div class="p-3 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700 row-span-2">
            <p class="text-l font-semibold">Birthdays this Month</p>
          </div>

          <button class="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded">
            View Recent Payslip
          </button>
        </div>

        {/* Divider */}
        <div className="class=absolute bottom-0 left-0 w-full h-px bg-gray-300"></div>

        {/* Employees */}
        <div>
          <p className="text-xl font-semibold my-2 ml-2">Employees</p>
        </div>

        <div class="grid grid-cols-3 gap-4 my-4 mx-4"></div>

        {/* Announcements */}
        <div>
          <p className="text-xl font-semibold my-2 ml-2">Announcements</p>
        </div>

        <div class="grid grid-cols-3 gap-4 my-4 mx-4">
          <div class="p-3 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700">
            <p class="text-xl font-bold">Title</p>
            <p class="text-l font-semibold border p-1">Category</p>
            <p class="text-l font-normal">
              Lorem ipsum dolor sit amet consectetur. Senectus ullamcorper sit
              sem feugiat.{" "}
            </p>
            <p class="text-l font-normal mt-1">Admin</p>
            <p class="text-l font-normal">11/03/2023</p>
          </div>

          <div class="p-3 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700">
            <p class="text-xl font-bold">Title</p>
            <p class="text-l font-semibold border p-1">Category</p>
            <p class="text-l font-normal">
              Lorem ipsum dolor sit amet consectetur. Senectus ullamcorper sit
              sem feugiat.{" "}
            </p>
            <p class="text-l font-normal mt-1">Admin</p>
            <p class="text-l font-normal">11/03/2023</p>
          </div>

          <div class="p-3 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700">
            <p class="text-xl font-bold">Title</p>
            <p class="text-l font-semibold border p-1">Category</p>
            <p class="text-l font-normal">
              Lorem ipsum dolor sit amet consectetur. Senectus ullamcorper sit
              sem feugiat.{" "}
            </p>
            <p class="text-l font-normal mt-1">Admin</p>
            <p class="text-l font-normal">11/03/2023</p>
          </div>
        </div>

        {/* Divider */}
        <div className="class=absolute bottom-0 left-0 w-full h-px bg-gray-300"></div>

        {/* Training */}
        <div>
          <p className="text-xl font-semibold my-2 ml-2">Training</p>
        </div>

        <div class="grid grid-cols-4 gap-4 my-4 mx-4">
          <div class="p-3 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700">
            <p class="text-xl font-bold">Title</p>
            <p class="text-l font-semibold border p-1">Category</p>
            <p class="text-l font-normal">11/03/2023</p>
            <p class="text-l font-normal mt-1">Speaker: Antoinette</p>
          </div>

          <div class="p-3 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700">
            <p class="text-xl font-bold">Title</p>
            <p class="text-l font-semibold border p-1">Status</p>
            <p class="text-l font-normal">11/03/2023</p>
            <p class="text-l font-normal mt-1">Speaker: Antoinette</p>
          </div>

          <div class="p-3 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700">
            <p class="text-xl font-bold">Title</p>
            <p class="text-l font-semibold border p-1">Status</p>
            <p class="text-l font-normal">11/03/2023</p>
            <p class="text-l font-normal mt-1">Speaker: Antoinette</p>
          </div>

          <div class="p-3 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700">
            <p class="text-xl font-bold">Title</p>
            <p class="text-l font-semibold border p-1">Status</p>
            <p class="text-l font-normal">11/03/2023</p>
            <p class="text-l font-normal mt-1">Speaker: Antoinette</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRDashboard;

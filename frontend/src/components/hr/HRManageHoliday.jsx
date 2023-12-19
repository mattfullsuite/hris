import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import moment from "moment";
import axios from "axios";

const HRManageHoliday = () => {

    const [holiday, setHoliday] = useState([]);

    useEffect(() => {

        const fetchAllHolidays = async () => {
            try {
                const res = await axios.get("http://localhost:6197/holidays")

                setHoliday(res.data)
            } catch(e) {
                console.log(e)
            }
        }

        fetchAllHolidays()
    }, []);
    
  const holidayColumns = [
    {
      name: "Holiday",
      selector: (row) => row.h_name,
    },
    {
      name: "Date",
      selector: (row) => moment(row.h_date).format("MMMM DD, YYYY"),
      sortable: true,
    },
    {
      name: "Actions",
      selector: (row) => (
        <button className="btn btn-xs btn-error normal-case text-white">
          Delete
        </button>
      ),
    },
  ];

  return (
    <>
      <div className="mx-5 p-4 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700 flex flex-col justify-center align-middle md:w-3/4">
        <div className="flex flex-row justify-between">
          <h1 className="text-lg font-semibold mb-4">Holidays</h1>

          <button
            className="btn normal-case btn-sm"
            onClick={() =>
              document.getElementById("holidayAddModal").showModal()
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              dataSlot="icon"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add
          </button>

          <dialog id="holidayAddModal" className="modal">
            <div className="modal-box">
              <div className="flex flex-row justify-between">
                <h1 className="text-xl font-semibold">Add Holiday</h1>

                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
              </div>

              <div className="flex flex-col gap-2 mx-5 mt-10 md:mx-10">
                <input
                  type="text"
                  name="holidayName"
                  id="holiday_name"
                  className="input input-bordered w-full"
                  placeholder="What holiday?"
                />

                <input
                  type="date"
                  name="holidayDate"
                  id="holiday_date"
                  className="input input-bordered w-full"
                />

                <button className="btn btn-active normal-case btn-md">Add</button>
              </div>
            </div>
          </dialog>
        </div>

        <DataTable
          className="mt-10"
          columns={holidayColumns}
          data={holiday}
          highlightOnHover
          pagination
        />
      </div>
    </>
  );
};

export default HRManageHoliday;

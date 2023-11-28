import React from "react";

const DashBButtons = () => {
  return (
    <>
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
                <option disabled defaultValue>
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
                <input type="checkbox" className="checkbox checkbox-sm mr-3" />{" "}
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
    </>
  );
};

export default DashBButtons;

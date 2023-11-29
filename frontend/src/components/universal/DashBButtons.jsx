import React, {useState, useEffect } from "react";
import axios from "axios"

const DashBButtons = () => {

  const [leaveInfo, setLeaveInfo] = useState({
    leave_type: '',
    leave_reason: '',
    leave_from: '',
    leave_to: '',
  })

  const handleChange = (event) => {
    setLeaveInfo({...leaveInfo, [event.target.name]:[event.target.value]})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post('http://localhost:6197/fileLeave', leaveInfo)
    .then(res => console.log("Registered Successfully"))
    .catch(err => console.log(err));
  }

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
            <form id="leaveForm" action="" onSubmit={handleSubmit} >

              {/* Dropdown - PTO Type */}
              <select
                name='leave_type'
                className="select select-bordered w-full max-w-xs mb-2"
                onChange={handleChange} require>

                <option disabled selected>Pick a reason for filing a leave</option>
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
                name='leave_from'
                type="date"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs mb-2"
                onChange={handleChange}
                required
                id="dateFrom"
              />

              {/* Date To */}
              <h1>Date To</h1>
              <input
                name='leave_to'
                type="date"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs mb-2"
                onChange={handleChange}
                required
              />

              {/* Reason for Leave */}
              <h1>Reason for Leave</h1>
              <textarea
                name='leave_reason'
                className="textarea textarea-bordered w-full max-w-lg mb-2"
                placeholder="Reason for Leave..."
                onChange={handleChange}
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
                <button type="submit" className="btn btn-primary mr-2">
                  Submit
                </button>

                {/* Cancel Button */}
                  {/* If there is a button in form, it will close the modal */}
                  <button className="btn">Cancel</button>
  
              </div>
            </form>
          </div>
        </dialog>

      </div>
    </>
  );
};

export default DashBButtons;

import React, { useState, useEffect } from "react";
//import { confirmAlert } from 'react-confirm-alert';
//import 'react-confirm-alert/src/react-confirm-alert.css'
import axios from "axios";
import moment from "moment";

const DashBButtons = () => {
  const [approvers, setApprover] = useState([]);

  useEffect(() => {
    const fetchApprover = async () => {
      try {
        const res = await axios.get("http://localhost:6197/getAllApprovers");
        setApprover(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchApprover();
  }, []);

  const [leaveInfo, setLeaveInfo] = useState({
    leave_type: "",
    leave_reason: "",
    leave_from: "",
    leave_to: "",
    approver_id: "",
    use_pto_points: "",
  });

  const [ptos, setPtos] = useState([]);
  let ptoCredits;

  useEffect(() => {
    const fetchUserPTO = async () => {
      try {
        const res = await axios.get("http://localhost:6197/getUserPTO");
        setPtos(res.data);
        ptoCredits = res.data[0].leave_balance;
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserPTO();
  }, []);

  const handleChange = (event) => {
    setLeaveInfo({ ...leaveInfo, [event.target.name]: [event.target.value] });

    ptoLabelChange();
    taLabelChange();
  };

  const taLabelChange = () => {
    const ta = document.getElementById("leave_reason");
    const maxLength = ta.getAttribute("maxlength");

    ta.addEventListener("input", function (e) {
      const target = e.target;
      const currentLength = target.value.length;
      document.getElementById("textarea-label").innerHTML =
        currentLength + "/" + maxLength;
      if (currentLength == maxLength) {
        document.getElementById("textarea-label").style.color = "red";
      }
    });
  };
  const ptoLabelChange = () => {
    var dateTo = moment(document.getElementById("leave_to").value).format(
      "YYYY-MM-DD"
    );
    var dateFrom = moment(document.getElementById("leave_from").value).format(
      "YYYY-MM-DD"
    );
    var count =
      moment.duration(moment(dateTo).diff(moment(dateFrom))).asDays() + 1;
    document.getElementById("pto_enough_label").innerHTML =
      "Use PTO credit(/s)?";
    document.getElementById("pto_checkbox").disabled = false;
    ptoCredits = document.getElementById("pto_points").innerHTML;
    document.getElementById("pto_enough_label").style.color = "black";
    document.getElementById("pto_points").style.color = "black";

    if (count > ptoCredits) {
      document.getElementById("pto_checkbox").disabled = true;
      document.getElementById("pto_enough_label").innerHTML =
        "Insufficient PTOs. Considered as Unpaid.";
      document.getElementById("pto_points").style.color = "red";
    }
  };

  const disableNext = () => {
    var dateFrom = document.getElementById("leave_from").value;

    document.getElementById("leave_to").min =
      moment(dateFrom).format("YYYY-MM-DD");
  };
  const handleCancel = () => {
    document.getElementById("file_a_leave_btn").close();
    document.getElementById("leaveForm").reset();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    /**confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
        },
        {
          label: 'No',
          //onClick: () => alert('Click No')
        }
      ]
    });**/

    //setLeaveInfo({...leaveInfo, approver_id: appField.current })

    axios
      .post("http://localhost:6197/fileLeave", leaveInfo)
      .then((res) => console.log(JSON.stringify(leaveInfo)))
      .catch((err) => console.log(err));

    axios
      .post("http://localhost:6197/subtractPTO", leaveInfo)
      .then((res) => console.log("PTO temporary subtracted"))
      .catch((err) => console.log(err));

    document.getElementById("file_a_leave_btn").close();
    document.getElementById("leaveForm").reset();
    window.location.reload();
  };

  function usePTOpoints() {
    var dateTo = moment(document.getElementById("leave_to").value).format(
      "YYYY-MM-DD"
    );
    var dateFrom = moment(document.getElementById("leave_from").value).format(
      "YYYY-MM-DD"
    );

    if (document.getElementById("pto_checkbox").checked) {
      var count = 0;
      count = moment.duration(moment(dateTo).diff(moment(dateFrom))).asDays();
      setLeaveInfo({ ...leaveInfo, use_pto_points: [count + 1] });
    } else {
      setLeaveInfo({ ...leaveInfo, use_pto_points: [0] });
    }
  }

  return (
    <>
      {/* Buttons */}
      <div className="m-2 flex flex-col">
        {/* <button
          className="my-2 btn btn-sm btn-active normal-case"
          onClick={() =>
            document.getElementById("file_a_leave_btn").showModal()
          }
        >
          File a Leave
        </button> */}

        <div
          className="border-2 border-dashed border-gray-200 p-4 flex flex-col justify-center items-center gap-2 h-56 w-full rounded-lg md:w-56"
          onClick={() =>
            document.getElementById("file_a_leave_btn").showModal()
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-14 h-14"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
            />
          </svg>

          <span>File a leave</span>
        </div>

        {/* Modal - File A Leave   */}
        <dialog id="file_a_leave_btn" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">File A Leave</h3>

            <form
              id="leaveForm"
              action=""
              method="dialog"
              onSubmit={handleSubmit}
            >
              <br />

              {/* Dropdown - PTO Type */}

              <label>
                <div className="label">
                  <h1 className="label-text">
                    Type of Leave <span className="text-red-500"> *</span>
                  </h1>
                </div>
                <select
                  name="leave_type"
                  className="select select-bordered w-full max-w-xs mb-2"
                  onChange={handleChange}
                  required
                >
                  <option disabled selected>
                    Pick a reason for filing a leave
                  </option>
                  <option>Sick Leave</option>
                  <option>Bereavement Leave</option>
                  <option>Maternity or Paternity Leave</option>
                  <option>Vacation Leave</option>
                  <option>Adverse Weather Leave</option>
                  <option>Study Leave</option>
                  <option>Emergency Leave</option>
                  <option>Other/Special Leave</option>
                </select>
              </label>

              <div className="flex">
                {/* Date From */}
                <div className="flex-1 mx-1">
                  <label>
                    <div className="label">
                      <h1 className="label-text">
                        Date From <span className="text-red-500"> *</span>
                      </h1>
                    </div>
                    <input
                      id="leave_from"
                      name="leave_from"
                      type="date"
                      placeholder="Type here"
                      className="input input-bordered w-full max-w-xs mb-2"
                      onChange={handleChange}
                      onInput={disableNext}
                      min={moment().format("YYYY-MM-DD")}
                      required
                    />
                  </label>
                </div>

                <div className="flex-1 mx-1">
                  {/* Date To */}

                  <label className="form-control">
                    <div className="label">
                      <h1 className="label-text">
                        Date To <span className="text-red-500"> *</span>
                      </h1>
                    </div>
                    <input
                      id="leave_to"
                      name="leave_to"
                      type="date"
                      placeholder="Type here"
                      className="input input-bordered w-full max-w-xs mb-2"
                      min={moment().format("YYYY-MM-DD")}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
              </div>

              {/* Reason for Leave */}
              <label className="form-control">
                <div className="label">
                  <h1 className="label-text">
                    Reason for Leave <span className="text-red-500"> *</span>
                  </h1>
                </div>
                <textarea
                  id="leave_reason"
                  name="leave_reason"
                  className="textarea textarea-bordered w-full max-w-lg mb-2"
                  placeholder="Reason for Leave..."
                  onChange={handleChange}
                  maxLength="255"
                  required
                ></textarea>
                <div className="label py-0">
                  <span className="label-text-alt"></span>
                  <span id="textarea-label" className="label-text-alt">
                    0
                  </span>
                </div>
              </label>

              <label>
                <div className="label">
                  <h1 className="label-text">
                    Approver <span className="text-red-500"> *</span>
                  </h1>
                </div>
                <select
                  name="approver_id"
                  className="select select-bordered w-full max-w-xs mb-2"
                  onChange={handleChange}
                  required
                >
                  <option disabled selected>
                    Choose your approver
                  </option>

                  {approvers.map((appr) => (
                    <option value={appr.emp_id}>
                      {appr.f_name +
                        " " +
                        appr.s_name +
                        " (" +
                        appr.dept_name +
                        ")"}
                    </option>
                  ))}
                </select>
              </label>

              {/* Current PTO Points */}
              <h1 className="text-base">Current PTO Points</h1>
              {ptos.map((pto) => (
                <h1 id="pto_points" className="text-lg font-bold mb-2">
                  {pto.leave_balance}
                </h1>
              ))}

              {/* Use PTO Checkbox */}
              <div className="flex justify-start items-center">
                <input
                  id="pto_checkbox"
                  name="use_pto_points"
                  type="checkbox"
                  className="checkbox checkbox-sm mr-3"
                  onChange={handleChange}
                  //onClick={checkPTO}
                />
                <h1 id="pto_enough_label" class="ptos_labels">
                  Use PTO credit(/s)?
                </h1>
              </div>

              {/* Button Container */}
              <div className="flex justify-end mt-3">
                <button
                  onClick={usePTOpoints}
                  type="submit"
                  className="btn btn-primary mr-2"
                >
                  Submit
                </button>

                {/* Cancel Button */}
                {/* If there is a button in form, it will close the modal */}
                <button className="btn" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default DashBButtons;

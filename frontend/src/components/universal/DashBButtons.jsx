import React, {useState, useEffect } from "react";
//import { confirmAlert } from 'react-confirm-alert';
//import 'react-confirm-alert/src/react-confirm-alert.css'
import axios from "axios"
import moment from "moment"

const DashBButtons = () => {

  const [approvers, setApprover] = useState([])

    useEffect(() => {
        const fetchApprover = async () => {
            try{
                const res = await axios.get("http://localhost:6197/getAllApprovers")
                setApprover(res.data)
            } catch(err){
                console.log(err)
            }
        };
        fetchApprover();
    }, []);

  const [leaveInfo, setLeaveInfo] = useState({
    leave_type: '',
    leave_reason: '',
    leave_from: '',
    leave_to: '',
    approver_id: '',
    use_pto_points: '',
  })

  const [ptos, setPtos] = useState([])
  let ptoCredits;

  useEffect(() => {
      const fetchUserPTO = async ()=> {
          try{
              const res = await axios.get("http://localhost:6197/getUserPTO")
              setPtos(res.data)
              ptoCredits = res.data[0].leave_balance
          } catch(err){
              console.log(err)
          }
      };
      fetchUserPTO();
  }, []);

  const handleChange = (event) => {
    setLeaveInfo({...leaveInfo, [event.target.name]:[event.target.value]})

    ptoLabelChange()
  }

  const ptoLabelChange = () => {
    var dateTo = moment(document.getElementById("leave_to").value).format("YYYY-MM-DD")
    var dateFrom = moment(document.getElementById("leave_from").value).format("YYYY-MM-DD")
    var count = moment.duration(moment(dateTo).diff(moment(dateFrom))).asDays() + 1;
    document.getElementById("pto_enough_label").innerHTML = "Use PTO credit(/s)?";
    document.getElementById("pto_checkbox").disabled = false;
    ptoCredits = document.getElementById("pto_points").innerHTML;
    document.getElementById("pto_enough_label").style.color = "black";
    document.getElementById("pto_points").style.color = "black";

    if (count > ptoCredits){
      document.getElementById("pto_checkbox").disabled = true;
      document.getElementById("pto_enough_label").innerHTML = "Insufficient PTOs. Considered as Unpaid.";
      document.getElementById("pto_points").style.color = "red";
    } 
  }

  const disableNext = () => {
    var dateFrom = document.getElementById("leave_from").value

    document.getElementById("leave_to").min = moment(dateFrom).format("YYYY-MM-DD")

  }
  const handleCancel = () => {
    document.getElementById("file_a_leave_btn").close()
    document.getElementById("leaveForm").reset();
  }

  const handleSubmit = (event) => {
    event.preventDefault()

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

    axios.post('http://localhost:6197/fileLeave', leaveInfo)
    .then(res => console.log(JSON.stringify(leaveInfo)))
    .catch(err => console.log(err));

    axios.post('http://localhost:6197/subtractPTO', leaveInfo)
    .then(res => console.log("PTO temporary subtracted"))
    .catch(err => console.log(err));

    document.getElementById("file_a_leave_btn").close()
    document.getElementById("leaveForm").reset();
    window.location.reload()
  }

  function usePTOpoints(){
    var dateTo = moment(document.getElementById("leave_to").value).format("YYYY-MM-DD")
    var dateFrom = moment(document.getElementById("leave_from").value).format("YYYY-MM-DD")

    if (document.getElementById("pto_checkbox").checked){
      var count = 0;
      count = moment.duration(moment(dateTo).diff(moment(dateFrom))).asDays();
      setLeaveInfo({...leaveInfo, use_pto_points:[count + 1]})
    }
    else {
      setLeaveInfo({...leaveInfo, use_pto_points:[0]})
    }
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

            <form id="leaveForm" action=""method="dialog" onSubmit={handleSubmit} >
              <br/>

              {/* Dropdown - PTO Type */}
              <h1>Type of Leave<span className="text-red-500"> *</span></h1>
              <select
                name='leave_type'
                className="select select-bordered w-full max-w-xs mb-2"
                onChange={handleChange} 
                required
                >

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
              <h1>Date From<span className="text-red-500"> *</span></h1>
              <input
                id='leave_from'
                name='leave_from'
                type="date"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs mb-2"
                onChange={handleChange}
                onInput={disableNext}
                min={moment().format("YYYY-MM-DD")}
                required
              />

              {/* Date To */}
              <h1>Date To<span className="text-red-500"> *</span></h1>
              <input
                id='leave_to'
                name='leave_to'
                type="date"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs mb-2"
                min={moment().format("YYYY-MM-DD")}
                onChange={handleChange}
                required
              />

              {/* Reason for Leave */}
              <h1>Reason for Leave<span className="text-red-500"> *</span></h1>
              <textarea
                name='leave_reason'
                className="textarea textarea-bordered w-full max-w-lg mb-2"
                placeholder="Reason for Leave..."
                onChange={handleChange}
                maxLength="255"
                required
              ></textarea>
              
              <h1>Approver <span className="text-red-500">*</span></h1>
              <select
                name='approver_id'
                className="select select-bordered w-full max-w-xs mb-2"
                onChange={handleChange} 
                required >

                <option disabled selected>Choose your approver</option>

                { approvers.map((appr) => (
                <option value={appr.emp_id} >{appr.f_name + " " + appr.s_name + " (" + appr.dept_name + ")"}</option>
                ))}
              </select>
              

              {/* Current PTO Points */}
              <h1 className="text-base">Current PTO Points</h1>
              { ptos.map((pto) => (
              <h1 id="pto_points" className="text-lg font-bold mb-2">{pto.leave_balance}</h1>
              ))} 

              {/* Use PTO Checkbox */}
              <div className="flex justify-start items-center">
                <input 
                id='pto_checkbox'
                name='use_pto_points'
                type="checkbox" 
                className="checkbox checkbox-sm mr-3" 
                onChange={handleChange}
                //onClick={checkPTO}
                />
                <h1 id="pto_enough_label" class="ptos_labels">Use PTO credit(/s)?</h1>
                
              </div>

              {/* Button Container */}
              <div className="flex justify-end mt-3">
                <button 
                onClick={usePTOpoints}
                type="submit" 
                className="btn btn-primary mr-2">
                  Submit
                </button>

                {/* Cancel Button */}
                  {/* If there is a button in form, it will close the modal */}
                  <button className="btn"
                  onClick={handleCancel}>Cancel</button>

              </div>
            </form>
          </div>
        </dialog>

      </div>
    </>
  );
};

export default DashBButtons;

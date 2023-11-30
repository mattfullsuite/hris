import React, {useEffect, useState} from "react";
import axios from 'axios'

const ManagerPTORequestTable = () => {
  const [leaves, setPendingLeaves] = useState([])

    useEffect(() => {
        const fetchAllPendingLeaves = async ()=> {
            try{
                const res = await axios.get("http://localhost:6197/showpendingdepartmentleaves")
                setPendingLeaves(res.data)
            } catch(err){
                console.log(err)
            }
        };
        fetchAllPendingLeaves();
    }, []);

    const handleApproval = async (leave_id) => {
      try {
          await axios.post("http://localhost:6197/approveleave/" + leave_id);
          window.location.reload()
      } catch(err){
          console.log(err)
      }
  }

  const handleRejection = async (leave_id) => {
    try {
        await axios.post("http://localhost:6197/rejectleave/" + leave_id);
        window.location.reload()
    } catch(err){
        console.log(err)
    }
  }
  return (
    <>
      {/* PTO Notices */}
      <div className="m-2 p-3 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700 flex flex-col items-center justify-center">
        <h1 className="text-lg font-semibold">PTO Requests</h1>
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
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              { leaves.map((leave) => (
              <tr>
                <th>1</th>
                <td>Nov. 12, 2023</td>
                <td>{ leave.s_name + ", " + leave.f_name + " " + leave.m_name }</td>
                <td>{ leave.leave_type }</td>
                <td>{ leave.leave_from }</td>
                <td>{leave.leave_to }</td>
                <td>
                  <div className="badge badge-warning gap-2">{leave.leave_status }</div>
                </td>
                <td className="text-center">
                  <button
                    className="btn btn-ghost btn-xs normal-case"
                    onClick={() =>
                      document.getElementById("emp_pto_details_btn").showModal()
                    }
                  >
                    Details
                  </button>
                  {/* Modal - Details */}
                  <dialog id="emp_pto_details_btn" className="modal text-left">
                    <div className="modal-box">
                      <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                          ✕
                        </button>
                      </form>
                      <h3 className="font-bold text-lg mb-5">PTO Details</h3>
                      <h3 className="font-bold text-xl mb-2">{ leave.s_name + ", " + leave.f_name + " " + leave.m_name }</h3>
                      <div className="flex">
                        <div className="flex-1">
                          <h3 className="font-base">Date Filed:</h3>
                          <h3 className="font-semibold mb-2">Nov. 12, 2023</h3>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-base">PTO Type:</h3>
                          <h3 className="font-semibold mb-2">{ leave.leave_type }</h3>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex-1">
                          <h3 className="font-base">Date From:</h3>
                          <h3 className="font-semibold mb-2">{ leave.leave_from }</h3>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-base">Date To:</h3>
                          <h3 className="font-semibold mb-2">{ leave.leave_to }</h3>
                        </div>
                      </div>
                      <div>
                        <h1 className="font-base">Reason:</h1>
                        <p className="font-semibold mb-4">
                        { leave.leave_reason }
                        </p>
                      </div>
                      <div className="badge badge-warning gap-1 mb-5">
                      { leave.leave_status }
                      </div>

                      <div className="flex justify-end">
                        <button className="btn bg-green-600 text-white hover:bg-green-800 mr-2 normal-case">
                          Approve
                        </button>
                        <button className="btn bg-red-600 text-white hover:bg-red-800 normal-case">
                          Decline
                        </button>
                      </div>

                      <div className="modal-action"></div>
                    </div>
                  </dialog>
                </td>{" "}
                {/* approve button */}
                <td>
                  <div className="flex justify-end">
                    <button 
                    onClick={() => handleApproval( leave.leave_id )}
                    className="btn btn-sm bg-green-600 text-white hover:bg-green-800 mr-2 normal-case">
                      Approve
                    </button>
                    <button 
                    onClick={() => handleRejection( leave.leave_id )}
                    className="btn btn-sm bg-red-600 text-white hover:bg-red-800 normal-case">
                      Decline
                    </button>
                  </div>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default ManagerPTORequestTable;

import React, {useState, useEffect} from "react";
import axios from "axios"

const ManagerPTONotices = () => {
  const [deptLeaves, setDeptLeaves] = useState([])

  useEffect(() => {
    const fetchAllDeptLeaves = async ()=> {
        try{
            const res = await axios.get("http://localhost:6197/showalldeptleaves")
            setDeptLeaves(res.data)
        } catch(err){
            console.log(err)
        }
    };
    fetchAllDeptLeaves();
}, []);

function checkStatus(status){
  if(status == 0){ return <div className="badge badge-warning">Pending</div>}
  if(status == 1){ return <div className="badge badge-success">Approved</div>}
  if(status == 2){ return <div className="badge badge-error">Rejected</div>}
}


  return (
    <>
      {/* PTO Notices */}
      <div className="m-2 p-3 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700 flex flex-col items-center justify-center">
        <h1 className="text-lg font-semibold">Department PTO Notices</h1>
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

              { deptLeaves.map((dl) => (
              <tr>
                <th>1</th>
                <td>Nov. 12, 2023</td>
                <td>{dl.f_name + " " + dl.s_name}</td>
                <td>{dl.leave_type}</td>
                <td>{checkStatus(dl.leave_status)}</td>
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
                      <h3 className="font-bold text-xl mb-2">{dl.f_name + " " + dl.s_name}</h3>
                      <div className="flex">
                        <div className="flex-1">
                          <h3 className="font-base">Date Filed:</h3>
                          <h3 className="font-semibold mb-2">Nov. 12, 2023</h3>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-base">PTO Type:</h3>
                          <h3 className="font-semibold mb-2">{dl.leave_type}</h3>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex-1">
                          <h3 className="font-base">Date From:</h3>
                          <h3 className="font-semibold mb-2">{dl.leave_from}</h3>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-base">Date To:</h3>
                          <h3 className="font-semibold mb-2">{dl.leave_to}</h3>
                        </div>
                      </div>
                      <div>
                        <h1 className="font-base">Reason:</h1>
                        <p className="font-semibold mb-4">
                        {dl.leave_reason}
                        </p>
                      </div>
                      <div className="badge badge-warning gap-1 mb-5">
                      {checkStatus(dl.leave_status)}
                      </div>


                      <div className="modal-action"></div>
                    </div>
                  </dialog>
                </td>{" "}
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ManagerPTONotices;

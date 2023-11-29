import React, {useState, useEffect} from "react";
import Axios from 'axios';

const DashBPTONotices = () => {

  const [approved, setApproved] = useState([])

  useEffect(() => {
      const fetchAllApproved = async ()=> {
          try{
              const res = await Axios.get("http://localhost:6197/showapprovedleaves")
              setApproved(res.data)
          } catch(err){
              console.log(err)
          }
      };
      fetchAllApproved();
  }, []);

  return (
    <>
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

              { approved.map((appr) => (
              <tr>
                <th>1</th>
                <td>Nov. 12, 2023</td>
                <td>{ appr.f_name + " " + appr.s_name}</td>
                <td>{ appr.leave_type }</td>
                <td>{ appr.leave_status }</td>
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
                      <h3 className="font-bold text-lg mb-5">PTO Details</h3>
                      <h3 className="font-bold text-lg mb-2">John Doe</h3>
                      <div className="flex">
                        <div className="flex-1">
                          <h3 className="font-base">Date Filed:</h3>
                          <h3 className="font-semibold mb-2">Nov. 12, 2023</h3>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-base">PTO Type:</h3>
                          <h3 className="font-semibold mb-2">Sick Leave</h3>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex-1">
                          <h3 className="font-base">Date From:</h3>
                          <h3 className="font-semibold mb-2">Nov. 23, 2023</h3>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-base">Date To:</h3>
                          <h3 className="font-semibold mb-2">Nov. 24, 2023</h3>
                        </div>
                      </div>
                      <h3 className="font-base">Status:</h3>
                      <div className="badge badge-warning gap-1">Pending</div>
                      <div className="modal-action">
                        <form method="dialog">
                          <button className="btn">Close</button>
                        </form>
                      </div>
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

export default DashBPTONotices;

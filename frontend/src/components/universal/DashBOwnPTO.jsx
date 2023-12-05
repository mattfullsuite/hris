import React, {useEffect, useState} from "react";
import axios from "axios";
import moment from "moment"

const DashBOwnPTO = () => {

  var count = 1

  const [myLeaves, setMyLeaves] = useState([])

  useEffect(() => {
    const fetchAllMyLeaves = async ()=> {
        try{
            const res = await axios.get("http://localhost:6197/showallmyleaves")
            setMyLeaves(res.data)
        } catch(err){
            console.log(err)
        }
    };
    fetchAllMyLeaves();
}, [])


function checkStatus(status){
  if(status == 0){ return <div className="badge badge-warning">Pending</div>}
  if(status == 1){ return <div className="badge badge-success">Approved</div>}
  if(status == 2){ return <div className="badge badge-error">Declined</div>}
}

  return (
    <>
      <>
        {/* PTO Notices */}
        <div className="m-2 p-3 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700 flex flex-col items-center justify-center">
          <h1 className="text-lg font-semibold">Your PTOs</h1>
          <div className="overflow-x-auto max-w-full">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Date Filed</th>
                  {/*<th>Name</th>*/}
                  <th>PTO Type</th>
                  <th>Date(/s)</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}

                
                { myLeaves.map((ml) => (

                <tr>
                  <th>{count++}</th>
                  <td>{moment(ml.date_filed).format('MMM. DD, YYYY')}</td>
                  {/*<td>{ml.f_name + " " + ml.s_name}</td>*/}
                  <td>{ml.leave_type}</td>
                  <td>{ml.leave_from === ml.leave_to ? moment(ml.leave_from).format('MMM. DD, YYYY') : moment(ml.leave_from).format('MMM. DD, YYYY') + "  to  "+ moment(ml.leave_to).format('MMM. DD, YYYY')}</td>
                  <td>
                    {" "}
                    <div>
                      {checkStatus(ml.leave_status)}
                    </div>
                  </td>
                  <td className="text-center">
                  </td>{" "}
                </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>


      </>
    </>
  );
};


export default DashBOwnPTO;

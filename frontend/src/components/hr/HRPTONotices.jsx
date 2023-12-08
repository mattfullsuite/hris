import React, {useState, useEffect} from "react";
import Axios from 'axios';
import moment from "moment"
import DataTable from "react-data-table-component";

const HRPTONotices = () => {

  var count = 1

  const [approved, setApproved] = useState([])


  useEffect(() => {
      const fetchAllApproved = async ()=> {
          try{
              const res = await Axios.get("http://localhost:6197/showallleaves")
              setApproved(res.data)
          } catch(err){
              console.log(err)
          }
      };
      fetchAllApproved();
  }, []);

  function checkStatus(status){
    if(status == 0){ return <div className="badge badge-warning">Pending</div>}
    if(status == 1){ return <div className="badge badge-success">Approved</div>}
    if(status == 2){ return <div className="badge badge-error">Rejected</div>}
  }

  const columns = [
      {
        name: "#",
        selector: row => row.leave_id,
        sortable: true
      },
      
      {
        name: "Name",
        selector: row => row.s_name + ", " + row.f_name + " " + row.m_name
      },

       {
        name: "PTO type",
        selector: row => row.leave_type
       },

       {
        name: "Reason",
        selector: row => row.leave_reason
       },
       
       {
        name: "Date(s)",
        selector: (row) => row.leave_from === row.leave_to ? moment(row.leave_from).format('MMM. DD, YYYY') : moment(row.leave_from).format('MMM. DD, YYYY') + "  to  "+ moment(row.leave_to).format('MMM. DD, YYYY'),
        sortable: true
       },

       {
        name: "Status",
        selector: row => checkStatus(row.leave_status),

       }
  ]

  return (
    <>
      {/* PTO Notices */}
      <div className="m-2 p-3 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700 flex flex-col justify-center align-middle">
        <h1 className="text-lg font-semibold text-center mb-4">PTO Notices</h1>

        {/* <div className="flex flex-row flex-wrap gap-3 mt-4 justify-center">

          <div className="badge badge-neutral">All</div>

          <div className="badge badge-success">Approved</div>

          <div className="badge badge-warning">Pending</div>

          <div className="badge badge-error">Declined</div>
        </div> */}

        <div role="tablist" className="tabs tabs-lifted tabs-lg flex flex-row justify-center">
          <a role="tab" className="tab tab-active">All</a>
          <a role="tab" className="tab">Approved</a>
          <a role="tab" className="tab">Pending</a>
          <a role="tab" className="tab">Declined</a>
        </div>

        <hr></hr>
      
        <DataTable
          columns = {columns}
          data={ approved }
          pagination
          highlightOnHover
        />
      </div>
    </>
  );
};

export default HRPTONotices;
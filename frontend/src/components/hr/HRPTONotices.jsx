import React, {useState, useEffect} from "react";
import Axios from 'axios';
import moment from "moment"
import DataTable from "react-data-table-component";

const HRPTONotices = () => {

  const [data, setData] = useState([])
  const [all, setAll] = useState([])
  const [approved, setApproved] = useState([])
  const [pending, setPending] = useState([])
  const [declined, setDeclined] = useState([])


  useEffect(() => {
      const fetchAllApproved = async ()=> {
          try{
              const res = await Axios.get("http://localhost:6197/showallleaves")
              const res1 = await Axios.get("http://localhost:6197/showapprovedleaves")
              const res2 = await Axios.get("http://localhost:6197/showpendingleaves")
              const res3 = await Axios.get("http://localhost:6197/showrejectedleaves")
              // test
              setAll(res.data)
              setApproved(res1.data)
              setPending(res2.data)
              setDeclined(res3.data)
              setData(res.data) //initialize database
          } catch(err){
              console.log(err)
          }
      };
      fetchAllApproved();
  }, []);

  const handleClick = (e) => {
    if (e.currentTarget.id === "all") {
      setData(all)
    } else if (e.currentTarget.id === "app") {
      setData(approved)
    }else if (e.currentTarget.id === "pen") {
      setData(pending)
    } else if (e.currentTarget.id === "dec") {
      setData(declined)
    }
  };

  function checkStatus(status){
    if(status == 0){ return <div className="badge badge-warning">Pending</div>}
    if(status == 1){ return <div className="badge badge-success">Approved</div>}
    if(status == 2){ return <div className="badge badge-error">Declined</div>}
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

        <div role="tablist" className="tabs tabs-lifted tabs-lg flex flex-row justify-center">
          <button role="tab" id="all" onClick={handleClick} className="tab">All</button>
          <button role="tab" id="app" onClick={handleClick} className="tab">Approved</button>
          <button role="tab" id="pen" onClick={handleClick} className="tab">Pending</button>
          <button role="tab" id="dec" onClick={handleClick} className="tab">Declined</button>
        </div>

        <hr></hr>
      
        <DataTable
          columns = {columns}
          data={ data }
          pagination
          highlightOnHover
        />
      </div>
    </>
  );
};

export default HRPTONotices;
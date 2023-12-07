import React, { useState, useEffect } from "react";
import Axios from "axios";
import moment from "moment";
import DataTable from "react-data-table-component";

const DashBPTONotices = () => {
  var count = 1;

  const [approved, setApproved] = useState([]);

  useEffect(() => {
    const fetchAllApproved = async () => {
      try {
        const res = await Axios.get("http://localhost:6197/showapprovedleaves");
        setApproved(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllApproved();
  }, []);

  const columns = [
    {
      name: "#",
      selector: row => row.leave_id,
      sortable: true
    },

    {
      name: "Date filed",
      selector: row => moment(row.date_filed).format('MMM DD YYYY')
    }
  ]

  return (
    <>
      {/* PTO Notices */}
      <div className="m-2 p-3 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700 flex flex-col items-center justify-center">
        <h1 className="text-lg font-semibold">Approved PTO Notices</h1>


        <DataTable
          column = {columns}
          data = {approved}
          pagination
        ></DataTable>

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
                <th></th> 
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {approved.map((appr) => (
                <tr key={appr.id}>
                  <th>{count++}</th>
                  <td>{moment(appr.date_filed).format("MMM. DD, YYYY")}</td>
                  <td>{appr.f_name + " " + appr.s_name}</td>
                  <td>{appr.leave_type}</td>
                  <td>{moment(appr.leave_from).format("MMM DD YYYY")}</td>
                  <td>{moment(appr.leave_to).format("MMM DD YYYY")}</td>
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

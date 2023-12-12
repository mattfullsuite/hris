import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import DataTable from "react-data-table-component";

const DashBOwnPTO = ({ link }) => {
  var count = 1;

  const [myLeaves, setMyLeaves] = useState([]);

  useEffect(() => {
    const fetchAllMyLeaves = async () => {
      try {
        const res = await axios.get("http://localhost:6197/showallmyleaves");
        setMyLeaves(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllMyLeaves();
  }, []);

  function checkStatus(status) {
    if (status == 0) {
      return <div className="badge badge-warning">Pending</div>;
    }
    if (status == 1) {
      return <div className="badge badge-success">Approved</div>;
    }
    if (status == 2) {
      return <div className="badge badge-error">Declined</div>;
    }
  }

  const columns = [
    {
      name: "#",
      selector: (row) => row.leave_id,
      sortable: true,
    },

    {
      name: "Date filed",
      selector: (row) => moment(row.date_filed).format("MMM. DD, YYYY"),
      sortable: true,
    },

    {
      name: "PTO type",
      selector: (row) => row.leave_type,
      sortable: true,
    },

    {
      name: "Leave reason",
      selector: (row) => row.leave_reason,
    },

    {
      name: "Date(s)",
      selector: (row) =>
        row.leave_from === row.leave_to
          ? moment(row.leave_from).format("MMM. DD, YYYY")
          : moment(row.leave_from).format("MMM. DD, YYYY") +
            "  to  " +
            moment(row.leave_to).format("MMM. DD, YYYY"),
      sortable: true,
    },

    {
      name: "Status",
      selector: (row) => checkStatus(row.leave_status),
    },
  ];

  if (myLeaves.length == 0) {
    return (
      <>
        <>
          <div className="m-2 p-4 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700 flex flex-col justify-center align-middle">
            <h1 className="text-lg font-semibold mb-4 text-center">Your PTOs</h1>

            <div className="flex flex-col items-center justify-center gap-4">
              <img src={link} className="h-48 w-48"></img>

              <h2 className="font-semibold">You don't have any PTOs yet.</h2>
            </div>
          </div>
        </>
      </>
    );
  } else {
    return (
      <>
        <>
          {/* PTO Notices */}
          <div className="m-2 p-4 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700 flex flex-col justify-center align-middle">
            <h1 className="text-lg font-semibold mb-4 text-center">Your PTOs</h1>

            <DataTable columns={columns} data={myLeaves} highlightOnHover />
          </div>
        </>
      </>
    );
  }
};

export default DashBOwnPTO;

import React, { useState, useEffect } from "react";
import Axios from "axios";
import moment from "moment";
import DataTable from "react-data-table-component";

const DashBPTOApprovedAndOwned = () => {
  const [data, setData] = useState([]);
  const [all, setMyLeave] = useState([]);
  const [approved, setApproved] = useState([]);

  useEffect(() => {
    const fetchAllApproved = async () => {
      try {
        const res = await Axios.get("http://localhost:6197/showallmyleaves");
        const res1 = await Axios.get("http://localhost:6197/showapprovedleaves");
        const res2 = await Axios.get("http://localhost:6197/login");
        // test
        setMyLeave(res.data);
        setApproved(res1.data);
        setData(res.data); //initialize database
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllApproved();
  }, []);

  const handleClick = (e) => {
    if (e.currentTarget.id === "all") {
      setData(all);
    } else if (e.currentTarget.id === "app") {
      setData(approved);
    }
  };

  function checkStatus(status) {
    if (status == 0) {
      return <div className="badge badge-warning">Pending</div>;
    }
    if (status == 1) {
      return <div className="badge badge-success">Approved</div>;
    }
    if (status == 2) {
      return <div className="badge badge-error text-white">Declined</div>;
    }
  }

  const columns = [
    {
      name: "#",
      selector: (row) => row.leave_id,
      sortable: true,
    },

    {
      name: "Name",
      selector: (row) => row.s_name + ", " + row.f_name + " " + row.m_name,
    },

    {
      name: "PTO type",
      selector: (row) => row.leave_type,
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

    {
      name: "Action",
      selector: (row) => (
        <div className="flex flex-row justify-center flex-wrap gap-1">
          <button
            className="btn btn-ghost-active btn-xs normal-case"
            onClick={() => document.getElementById(row.leave_id).showModal()}
          >
            Details
          </button>

          {/* Modal - Details */}
          <dialog id={row.leave_id} className="modal text-left">
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>

              <h3 className="font-bold text-lg mb-5">PTO Details</h3>

              <div className="flex flex-col justify-center items-center">
                {row.emp_pic == "" || row.emp_pic == null ? (
                  <div className="h-24 w-24 bg-gray-500 rounded-full flex justify-center items-center text-4xl text-white font-medium m-2">
                    {row.f_name.charAt(0) + row.s_name.charAt(0)}
                  </div>
                ) : (
                  <img className="h-16 w-16 rounded-full m-2" />
                )}

                <div className="text-center mb-7">
                  <h3 className="font-bold text-lg text-center">
                    {row.s_name + ", " + row.f_name + " " + row.m_name}
                  </h3>
                  <span>{row.title}</span>
                </div>

                <div className="text-center">
                  <h3 className="font-semibold text-xl">{row.leave_type}</h3>
                  <h3 className="text-gray-600">
                    {row.leave_from === row.leave_to
                      ? moment(row.leave_from).format("MMM. DD, YYYY")
                      : moment(row.leave_from).format("MMM. DD, YYYY") +
                        "  to  " +
                        moment(row.leave_to).format("MMM. DD, YYYY")}
                  </h3>
                </div>

                <div className="mt-7 flex flex-col items-center gap-2">
                  <h3 className="italic text-gray-600">
                    Filed on {moment(row.date_filed).format("dddd")} •{" "}
                    {moment(row.date_filed).format("MMMM DD, YYYY")}
                  </h3>
                  <div>{checkStatus(row.leave_status)}</div>
                </div>
              </div>
              
              <div>
                <h1 className="font-semibold mt-5">Reason:</h1>

                <div className="max-h-44 whitespace-normal">
                  <p className="justify-center text-justify">
                    {row.leave_reason == "" || row.leave_reason == null ? (
                      <p className="italic text-gray-600">
                        No reason indicated.
                      </p>
                    ) : (
                      <p>{row.leave_reason}</p>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </dialog>
        </div>
      ),
    },
  ];

  return (
    <>
      {/* PTO Notices */}
      <div className="m-2 p-3 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700 flex flex-col justify-center align-middle">
        <h1 className="text-lg font-semibold text-center mb-4">PTO Notices</h1>

        <div
          role="tablist"
          className="tabs tabs-lifted tabs-lg flex flex-row justify-center"
        >
          <button role="tab" id="all" onClick={handleClick} className="tab">
            My PTOs
          </button>
          <button role="tab" id="app" onClick={handleClick} className="tab">
            Approved
          </button>
        </div>

        <hr></hr>

        <DataTable columns={columns} data={data} pagination highlightOnHover />
      </div>
    </>
  );
};

export default DashBPTOApprovedAndOwned;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

import ClientSideBar from "../../components/client/ClientSideBar";
import DashBRemainingOffset from "../../components/universal/DashBremainingOffset";
import DashBremainingPTO from "../../components/universal/DashBremainingPTO";
import DashBButtons from "../../components/universal/DashBbuttons";
import DashBPTONotices from "../../components/universal/DashBPTONotices";
import DashBBirthdays from "../../components/universal/DashBbirthdays";
import DashBAnniversaries from "../../components/universal/DashBanniversaries";


// const handleFormSubmit = () => {x
//   // Date From
//   const dateFrom = document.getElementById("dateFrom").value;

//   // Date To
//   const dateTo = document.getElementById("dateTo").value;

//   // Check if Date To is not earlier than Date From
//   if (new Date(dateTo) < new Date(dateFrom)) {
//     alert("Date To cannot be earlier than Date From");
//     return;
//   }

//   // Display a confirmation prompt
//   const isConfirmed = window.confirm("Are you sure you want to submit the form?");

//   // If the user confirms, submit the form
//   if (isConfirmed) {
//     document.getElementById("leaveForm").submit();
//   }
// };

const ClientDashboard = () => {
  /**const navigate = useNavigate()

   useEffect(() => {
      Axios.get("http://localhost:6197/login").then((response) => {
         if (response.data.loggedIn == false) {
            navigate("/login")
         }
      })
   }, [])**/

  return (
    <>
      <ClientSideBar></ClientSideBar>
      <div className="p-4 sm:ml-64 flex flex-col">
        {/* Date */}
        <div className="mb-1 text-xl">
          <p>Friday, November 03, 2023</p>
        </div>

        {/* Greeting */}
        <div className="m-2 text-3xl font-bold">
          <p>Good Morning User!</p>
        </div>

        {/* Widget Container */}
        <div className="my-2 mx-2">

          <div className="flex">
            <DashBremainingPTO></DashBremainingPTO>
            <DashBRemainingOffset></DashBRemainingOffset>
          </div>
          <DashBButtons></DashBButtons>
          <DashBPTONotices></DashBPTONotices>

          <div className="flex">
            <DashBBirthdays></DashBBirthdays>
            <DashBAnniversaries></DashBAnniversaries>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientDashboard;

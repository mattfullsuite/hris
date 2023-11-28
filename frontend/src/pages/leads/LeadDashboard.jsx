import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import ManagerSideBar from "../../components/manager/ManagerSideBar";
import DashBRemainingOffset from "../../components/universal/DashBRemainingOffset";
import DashBremainingPTO from "../../components/universal/DashBRemainingPTO";
import DashBButtons from "../../components/universal/DashBButtons";
import ManagerPTONotices from "../../components/manager/ManagerPTONotices";
import DashBBirthdays from "../../components/universal/DashBBirthdays";
import DashBAnniversaries from "../../components/universal/DashBAnniversaries";

const LeadDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get("http://localhost:6197/login").then((response) => {
      if (response.data.loggedIn == false) {
        navigate("/login");
      }
    });
  }, []);

  return (
    <>
      <ManagerSideBar></ManagerSideBar>
      <div className="p-4 sm:ml-64 flex flex-col">
        {/* Date */}
        <div className="mb-1 text-xl">
          <p>Friday, November 03, 2023</p>
        </div>

        {/* Greeting */}
        <div className="m-2 text-3xl font-bold">
          <p>Good Morning Manager User!</p>
        </div>

        {/* Widget Container */}
        <div className="my-2 mx-2">
          <div className="flex">
            <DashBremainingPTO></DashBremainingPTO>
            <DashBRemainingOffset></DashBRemainingOffset>
          </div>
          <DashBButtons></DashBButtons>
          <ManagerPTONotices></ManagerPTONotices>
          <div className="flex">
            <DashBBirthdays></DashBBirthdays>
            <DashBAnniversaries></DashBAnniversaries>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeadDashboard;

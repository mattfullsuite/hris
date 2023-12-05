import React from "react";
import ManagerSideBar from "../../components/manager/ManagerSideBar";
import DashBRemainingOffset from "../../components/universal/DashBRemainingOffset";
import DashBremainingPTO from "../../components/universal/DashBRemainingPTO";
import DashBButtons from "../../components/universal/DashBButtons";
import ManagerPTONotices from "../../components/manager/ManagerPTONotices";
import DashBBirthdays from "../../components/universal/DashBBirthdays";
import DashBAnniversaries from "../../components/universal/DashBAnniversaries";
import DashBOwnPTO from "../../components/universal/DashBOwnPTO";
import DashBGreeting from "../../components/universal/DashBGreeting";
import ManagerPTORequestTable from "../../components/manager/ManagerPTORequestTable";


const LeadDashboard = () => {

  return (
    <>
      <ManagerSideBar></ManagerSideBar>
      <div className="p-4 sm:ml-64 flex flex-col">
        <DashBGreeting></DashBGreeting>

        {/* Widget Container */}
        <div className="my-2 mx-2">
          <div className="flex">
            <DashBremainingPTO></DashBremainingPTO>
            <DashBRemainingOffset></DashBRemainingOffset>
          </div>
          <DashBButtons></DashBButtons>
          <ManagerPTORequestTable></ManagerPTORequestTable>
          <ManagerPTONotices></ManagerPTONotices>
          <DashBOwnPTO></DashBOwnPTO>

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

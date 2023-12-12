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
      {/* <div className="p-4 sm:ml-64 flex flex-col">
        <DashBGreeting></DashBGreeting>

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
      </div> */}

      <div className="p-4 sm:ml-64 flex flex-col">
        <DashBGreeting></DashBGreeting>

        <div className="m-4 flex flex-col xl:flex-row">
          <div className="grow">
            <div className="flex flex-col md:flex-row">
                <div>
                  <DashBButtons></DashBButtons>
                </div>

                <div>
                  <DashBremainingPTO></DashBremainingPTO>
                </div>
            </div>

            <div className="mt-4">
              <ManagerPTORequestTable></ManagerPTORequestTable>
              <ManagerPTONotices></ManagerPTONotices>
              <DashBOwnPTO></DashBOwnPTO>
            </div>
          </div>

          <div className="divider divider-horizontal"></div>

          <div className="flex flex-col justify-start lg:flex-row xl:block">
            <DashBBirthdays></DashBBirthdays>
            <DashBAnniversaries></DashBAnniversaries>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeadDashboard;

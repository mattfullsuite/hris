import React from "react";
import ManagerSideBar from "../../components/manager/ManagerSideBar";
import ManagerPTORequestTable from "../../components/manager/ManagerPTORequestTable";

const LeadPTORequest = () => {
  return (
    <>
      <ManagerSideBar></ManagerSideBar>
      <div className="p-4 sm:ml-64 flex flex-col">
        <ManagerPTORequestTable></ManagerPTORequestTable>
      </div>
    </>
  );
};

export default LeadPTORequest;

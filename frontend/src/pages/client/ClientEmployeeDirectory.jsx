import React from "react";
import ClientSideBar from "../../components/client/ClientSideBar";
import Headings from "../../components/universal/Headings";
import EmployeeDirectoryComponent from "../../components/universal/EmployeeDirectoryComponent";


const ClientEmployeeDirectory = () => {
  return (
    <>
      <ClientSideBar/>

      <div className="p-4 sm:ml-64 flex flex-col">
        <Headings text={"Employee Directory"} />

        <EmployeeDirectoryComponent />
      </div>
    </>
  );
};

export default ClientEmployeeDirectory;

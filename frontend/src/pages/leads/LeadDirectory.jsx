import react, { useState, useEffect } from "react";
import axios from "axios";
import ManagerSideBar from "../../components/manager/ManagerSideBar";
import Headings from "../../components/universal/Headings";

const LeadDirectory = () => {

    useEffect(() => {

    })
  
    return (
    <>
      <ManagerSideBar></ManagerSideBar>

      <div className="p-4 sm:ml-64 flex flex-col">
        <Headings text={"Employee Directory"} />

        <div>
            
        </div>
      </div>
    </>
  );
};

export default LeadDirectory;

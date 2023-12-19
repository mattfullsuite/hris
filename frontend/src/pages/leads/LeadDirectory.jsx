import ManagerSideBar from "../../components/manager/ManagerSideBar";
import Headings from "../../components/universal/Headings";
import EmployeeDirectoryComponent from "../../components/universal/EmployeeDirectoryComponent";

const LeadDirectory = () => {

  return (
    <>
      <ManagerSideBar></ManagerSideBar>

      <div className="p-4 sm:ml-64 flex flex-col">
        <Headings text={"Employee Directory"} />

        <EmployeeDirectoryComponent/>
      </div>
    </>
  );
};

export default LeadDirectory;

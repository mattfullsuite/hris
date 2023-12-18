import react, { useState, useEffect } from "react";
import axios from "axios";
import ManagerSideBar from "../../components/manager/ManagerSideBar";
import Headings from "../../components/universal/Headings";
import EmployeeDirectoryCard from "../../components/universal/EmployeeDirectoryCard";

const LeadDirectory = () => {
  const [corpStrat, setCorpStrat] = useState([]);
  const [ventures, setVenture] = useState([]);

  useEffect(() => {
    const setData = async () => {
      try {
        const venture = await axios.get(
          "http://localhost:6197/getVentureDivision"
        );
        const corp = await axios.get(
          "http://localhost:6197/getCorpStratDivision"
        );

        setCorpStrat(corp.data);
        setVenture(venture.data);
      } catch (e) {
        console.log(e);
      }
    };

    setData();
  });

  return (
    <>
      <ManagerSideBar></ManagerSideBar>

      <div className="p-4 sm:ml-64 flex flex-col">
        <Headings text={"Employee Directory"} />

        <div className="mt-24 flex flex-col gap-40">
          <div>
            <h1 className="text-3xl font-bold text-center">
              Corporate Strategy
            </h1>

            <div className="flex flex-row justify-center items-center gap-4 flex-wrap mt-10">
              {corpStrat.map((c) => (
                <EmployeeDirectoryCard
                  image={c.emp_pic}
                  firstName={c.f_name}
                  lastName={c.s_name}
                  department={c.dept_name}
                  position={c.position_name}
                  workEmail={c.work_email}
                />
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold text-center">Venture Capital</h1>

            <div className="flex flex-row justify-center items-center gap-4 flex-wrap mt-10">
              {ventures.map((v) => (
                <EmployeeDirectoryCard
                  image={v.emp_pic}
                  firstName={v.f_name}
                  lastName={v.s_name}
                  department={v.dept_name}
                  position={v.position_name}
                  workEmail={v.work_email}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeadDirectory;

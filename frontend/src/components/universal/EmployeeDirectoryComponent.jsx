import React, { useEffect, useState } from "react";
import axios from "axios";
import EmployeeDirectoryCard from "./EmployeeDirectoryCard";

const EmployeeDirectoryComponent = () => {
  const [ventures, setVenture] = useState([]);
  const [corpStrat, setCorpStrat] = useState([]);
  const [operation, setOperation] = useState([]);
  const [executive, setExecutive] = useState([]);

  useEffect(() => {
    const setData = async () => {
      try {
        const venture = await axios.get(
          "http://localhost:6197/getVentureDivision"
        );
        const corp = await axios.get(
          "http://localhost:6197/getCorpStratDivision"
        );
        const ops = await axios.get(
          "http://localhost:6197/getOperationsDivision"
        );
        const exec = await axios.get(
          "http://localhost:6197/getExecutiveDivision"
        );

        setVenture(venture.data);
        setCorpStrat(corp.data);
        setOperation(ops.data);
        setExecutive(exec.data);
      } catch (e) {
        console.log(e);
      }
    };

    setData();
  });

  return (
    <div className="my-24 flex flex-col gap-40">
        {(executive.length != 0) ?
      <div>
        <h1 className="text-3xl font-bold text-center">Executives</h1>

        <div className="flex flex-row justify-center items-center gap-4 flex-wrap mt-10">
          {executive.map((e) => (
            <EmployeeDirectoryCard
              image={e.emp_pic}
              firstName={e.f_name}
              lastName={e.s_name}
              department={e.dept_name}
              position={e.position_name}
              workEmail={e.work_email}
            />
          ))}
        </div>
      </div> : ''
        }

      <div>
        <h1 className="text-3xl font-bold text-center">Operations</h1>

        <div className="flex flex-row justify-center items-center gap-4 flex-wrap mt-10">
          {operation.map((o) => (
            <EmployeeDirectoryCard
              image={o.emp_pic}
              firstName={o.f_name}
              lastName={o.s_name}
              department={o.dept_name}
              position={o.position_name}
              workEmail={o.work_email}
            />
          ))}
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-bold text-center">Corporate Strategy</h1>

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
  );
};

export default EmployeeDirectoryComponent;

import react, { useState, useEffect } from "react";
import axios from "axios";
import ManagerSideBar from "../../components/manager/ManagerSideBar";
import Headings from "../../components/universal/Headings";

const LeadDirectory = () => {

    const [ventures, setVenture] = useState([])

    useEffect(() => {
        const setData = async () => {
            try {
                const venture = await axios.get("http://localhost:6197/getVentureDivision")

                setVenture(venture.data)
            } catch(e) {
                console.log(e)
            }
        }

        setData();
    })
  
    return (
    <>
      <ManagerSideBar></ManagerSideBar>

      <div className="p-4 sm:ml-64 flex flex-col">
        <Headings text={"Employee Directory"} />

        <div className="mt-24">
            <h1 className="text-3xl font-bold text-center">Venture Capital</h1>

            <div className="flex flex-row justify-center items-center gap-4 flex-wrap mt-10">
                {ventures.map((v) => (
                    <div className="bg-gray-200 flex flex-col justify-center items-center p-5 w-60">
                        {(v.emp_pic == "" || v.emp_pic == null) ? <div className="h-24 w-24 bg-gray-500 rounded-full flex justify-center items-center text-4xl text-white font-medium">{v.f_name.charAt(0) + v.s_name.charAt(0)}</div> : <img className="h-24 w-24 rounded-full"/>}

                        <p>{v.f_name + " " + v.s_name}</p>
                        <p>{v.position_name}</p>
                        <p>{v.dept_name} Department</p>
                        
                    </div>
                ))}
            </div>
        </div>
      </div>
    </>
  );
};

export default LeadDirectory;

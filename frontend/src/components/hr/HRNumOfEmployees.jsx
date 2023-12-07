import React, {useState, useEffect}  from "react";
import axios from "axios";

const HRNumEmployees = () => {

  const [employees, setEmployees] = useState([])

  const [countInfo, setCountInfo] = useState({
    cc: '',
    rc: '',
    pc: '',
    ptc: '',
  })

  useEffect(() => {
    const fetchAllEmployees = async ()=> {
        try{
            const res1 = await axios.get("http://localhost:6197/getCurrentEmployees")
            const res2 = await axios.get("http://localhost:6197/getRegularEmployees")
            const res3 = await axios.get("http://localhost:6197/getProbationaryEmployees")
            const res4 = await axios.get("http://localhost:6197/getPartTimeEmployees")
            //setEmployees(res2.data)
            setCountInfo({...countInfo, cc: res1.data.length, rc: res2.data.length, pc: res3.data.length, ptc: res4.data.length})
            //setCountInfo({...countInfo, cc: res2.data.length + res3.data.length + res4.data.length})
            console.log(setEmployees.length)
        } catch(err){
            console.log(err)
        }
    };
    fetchAllEmployees();
}, []);



/**useEffect(() => {
  const countEmployees = async ()=> {
    employees.map((emp) => (
      if (emp.emp_status === "REGULAR"){
          regularCount += 1;
          currentCount +=1;
        } else if (emp.emp_status === "PROBATIONARY"){
          probationaryCount += 1;
          currentCount +=1;
        } else if (emp.emp_status === "PARTTIME"){
          parttimeCount +=1;
          currentCount += 1;
        }}
    ))
  }
  countEmployees();
}, [])**/

  return (
    <>
      <div className="flex flex-row my-7">
            <div className="flex flex-col justify-between items-center">
              <div className="m-2 p-3 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700 flex flex-1 flex-col items-center justify-center text-center">
                <h2 className="text-lg font-semibold">Current Number of Employees</h2>
                <h1 className="my-16 text-7xl font-extrabold">{countInfo.cc} </h1>
              </div>

              <button className="m-2 btn btn-sm btn-outline normal-case btn-wide">Add New Employee</button>
            </div>

          <div className="flex-initial w-30">
            <div className="flex flex-col justify-between">
                <div className="m-2 p-3 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700 flex flex-1 flex-col items-center justify-center text-center h-auto">
                  <h1 className="my-1 text-3xl font-bold">{countInfo.pc} </h1>
                  <h2 className="text-lg font-semibold">Probationary</h2>
                </div>

                <div className="m-2 p-3 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700 flex flex-1 flex-col items-center justify-center text-center">
                  <h1 className="my-1 text-3xl font-bold">{countInfo.rc} </h1>
                  <h2 className="text-lg font-semibold">Regulars</h2>
                </div>

                <div className="m-2 p-3 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700 flex flex-1 flex-col items-center justify-center text-center">
                  <h1 className="my-1 text-3xl font-bold">{countInfo.ptc} </h1>
                  <h2 className="text-lg font-semibold">Part Timers</h2>
                </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default HRNumEmployees;
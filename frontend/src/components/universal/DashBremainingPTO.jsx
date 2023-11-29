import React, {useState, useEffect}  from "react";
import Axios from 'axios';

const DashBremainingPTO = () => {
  const [ptos, setPtos] = useState([])

  useEffect(() => {
      const fetchUserPTO = async ()=> {
          try{
              const res = await Axios.get("http://localhost:6197/getUserPTO")
              setPtos(res.data)
          } catch(err){
              console.log(err)
          }
      };
      fetchUserPTO();
  }, []);

  return (
    <>
      {/* Number of PTOs */}

      { ptos.map((pto) => (
      <div className="m-2 p-3 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700 flex flex-1 flex-col items-center justify-center text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>

        <h1 className="text-lg font-semibold">Number of PTOs</h1>
        <h1 className="my-1 text-3xl font-bold">{ pto.leave_balance }</h1>
        <h1 className="text-base font-normal">Available until</h1>
        <h1 className="text-base font-semibold">March 25, 2023</h1>

      </div>

      ))}

    </>
  );
};

export default DashBremainingPTO;

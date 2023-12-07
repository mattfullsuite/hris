import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import HRSideBar from "../../components/hr/HRSideBar";
import DashBGreeting from "../../components/universal/DashBGreeting";
import HRNumEmployees from "../../components/hr/HRNumOfEmployees";
import HRNotices from "../../components/hr/HRNotices";

const HRDashboard = () => {
  Axios.defaults.withCredentials = true;

  const navigate = useNavigate();

  const [users, setUser] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:6197/login").then((response) => {
      if (response.data.loggedIn == false) {
        navigate("/login");
      } else {
        console.log(response.data.user[0].f_name);
      }
    });
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await Axios.get("http://localhost:6197/login");
        setUser(res.data.user);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserData();
  }, []);

  return (
    <>
      <HRSideBar></HRSideBar>

        <div className="p-4 sm:ml-64 flex flex-col">
          <DashBGreeting></DashBGreeting>

          <HRNumEmployees></HRNumEmployees>

          <hr></hr>

          <HRNotices></HRNotices>
        </div>

    </>
  );
};

export default HRDashboard;

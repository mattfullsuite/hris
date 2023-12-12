import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import HRSideBar from "../../components/hr/HRSideBar";
import DashBGreeting from "../../components/universal/DashBGreeting";
import HRNumEmployees from "../../components/hr/HRNumOfEmployees";
import HRNotices from "../../components/hr/HRNotices";
import DashBButtons from "../../components/universal/DashBButtons";
import DashBremainingPTO from "../../components/universal/DashBRemainingPTO";
import DashBBirthdays from "../../components/universal/DashBBirthdays";
import DashBAnniversaries from "../../components/universal/DashBAnniversaries";
import DashBPTONotices from "../../components/universal/DashBPTONotices";
import HRPTONotices from "../../components/hr/HRPTONotices";

const HRDashboard = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  Axios.defaults.withCredentials = true;

  const navigate = useNavigate();

  const [users, setUser] = useState([]);

  useEffect(() => {
    Axios.get(BASE_URL + ":6197/login").then((response) => {
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
        const res = await Axios.get(BASE_URL + ":6197/login");
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

      <div className="p-4 sm:ml-64 flex flex-col ">
        <DashBGreeting></DashBGreeting>
        <div className="m-4 flex flex-col xl:flex-row">
          <div className="grow">
            <div className="flex flex-col">
              <div className="flex flex-col md:flex-row">
                <div>
                  <DashBButtons></DashBButtons>
                </div>
              
                <div>
                  <DashBremainingPTO></DashBremainingPTO>
                </div>
              </div>

              <div className="divider divider-x"></div>

              <div>
                <HRNumEmployees></HRNumEmployees>
              </div>
            </div>

            <div className="mt-4">
              <HRPTONotices />
            </div>
          </div>

          <div className="divider divider-horizontal divide-x"></div>

          <div className="flex flex-col justify-start lg:flex-row xl:block">
            <DashBBirthdays></DashBBirthdays>
            <DashBAnniversaries></DashBAnniversaries>
          </div>
        </div>
      </div>
    </>
  );
};

export default HRDashboard;

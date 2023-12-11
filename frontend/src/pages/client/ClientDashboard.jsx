import React, { useState, useEffect } from "react";
import Axios from "axios";


import ClientSideBar from "../../components/client/ClientSideBar";
import DashBRemainingOffset from "../../components/universal/DashBRemainingOffset";
import DashBremainingPTO from "../../components/universal/DashBRemainingPTO";
import DashBButtons from "../../components/universal/DashBButtons";
import DashBPTONotices from "../../components/universal/DashBPTONotices";
import DashBBirthdays from "../../components/universal/DashBBirthdays";
import DashBAnniversaries from "../../components/universal/DashBAnniversaries";
import DashBGreeting from "../../components/universal/DashBGreeting";
import DashBOwnPTO from "../../components/universal/DashBOwnPTO";
import DashBPTOApprovedAndOwned from "../../components/universal/DashBPTOApprovedAndOwned";

// import DataTable from 'datatables.net-dt';
// import 'datatables.net-responsive-dt';
 
// let table = new DataTable('#myTable', {
//     responsive: true
// });


// const handleFormSubmit = () => {x
//   // Date From
//   const dateFrom = document.getElementById("dateFrom").value;

//   // Date To
//   const dateTo = document.getElementById("dateTo").value;

//   // Check if Date To is not earlier than Date From
//   if (new Date(dateTo) < new Date(dateFrom)) {
//     alert("Date To cannot be earlier than Date From");
//     return;
//   }

//   // Display a confirmation prompt
//   const isConfirmed = window.confirm("Are you sure you want to submit the form?");

//   // If the user confirms, submit the form
//   if (isConfirmed) {
//     document.getElementById("leaveForm").submit();
//   }
// };

const ClientDashboard = () => {
  /**const navigate = useNavigate()

   useEffect(() => {
      Axios.get("http://localhost:6197/login").then((response) => {
         if (response.data.loggedIn == false) {
            navigate("/login")
         }
      })
   }, [])**/

   const [users, setUser] = useState([]);
   const [announcements, setAnnouncements] = useState([]);

   const [pleaves, setPendingLeaves] = useState([])

    useEffect(() => {
        const fetchAllPendingLeaves = async ()=> {
            try{
                const res = await Axios.get("http://localhost:6197/showpendingleaves")
                setPendingLeaves(res.data)
            } catch(err){
                console.log(err)
            }
        };
        fetchAllPendingLeaves();
    }, []);

   useEffect(() => {
      const fetchAllAnnouncements = async ()=> {
          try{
              const res = await Axios.get("http://localhost:6197/announcements")
              setAnnouncements(res.data);
          } catch(err){
              console.log(err)
          }
      }
      fetchAllAnnouncements()
  },[])

   useEffect(() => {
      const fetchUserData = async ()=> {
          try{
              const res = await Axios.get("http://localhost:6197/login")
              setUser(res.data.user)
          } catch(err){
              console.log(err)
          }
      };
      fetchUserData();
  }, []);

  return (
    <>
      <ClientSideBar></ClientSideBar>
      <div className="p-4 sm:ml-64 flex flex-col">
        <DashBGreeting></DashBGreeting>

        <div className="my-2 mx-2 flex flex-col xl:flex-row">
          <div className="grow">
            <div className="flex flex-col md:flex-row">
                <div>
                  <DashBButtons></DashBButtons>
                </div>

                <div>
                  <DashBremainingPTO></DashBremainingPTO>
                </div>
            </div>

            <div className="mt-4">
              <DashBPTOApprovedAndOwned></DashBPTOApprovedAndOwned>
            </div>
          </div>

          <div className="divider divider-horizontal"></div>

          <div className="flex flex-col md:flex-row xl:flex-col">
            <DashBBirthdays></DashBBirthdays>
            <DashBAnniversaries></DashBAnniversaries>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientDashboard;

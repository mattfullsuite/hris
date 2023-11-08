import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom"
import Axios from "axios"

const LeadDashboard = () => {

    const navigate = useNavigate()

   useEffect(() => {
      Axios.get("http://localhost:6197/login").then((response) => {
         if (response.data.loggedIn == false) {
            navigate("/login")
         }
      })
   }, [])
   
    return (
        <div>Lead Dashboard</div>
    )
}

export default LeadDashboard
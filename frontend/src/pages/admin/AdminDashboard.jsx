import React, {useState, useEffect} from "react";
import { useNavigate, L } from "react-router-dom"
import Axios from "axios"

const AdminDashboard = () => {
    const navigate = useNavigate()

   useEffect(() => {
      Axios.get("http://localhost:6197/login").then((response) => {
         if (response.data.loggedIn == false) {
            navigate("/login")
         }
      })
   }, [])

   const logoutEmployee = () => {
        Axios({method: "post", url: "http://localhost:6197/logout", withcredentials: true}).then((response) => {
        console.log("response status", response)

        if (response.status === 200) {
            // setcount("login")
        }
    })
    }


    return (
        <div>Admin Dashboard

            <div className="logout-div">
                <button onClick={ logoutEmployee } >Logout</button>
            </div>

        </div> 
    )
}

export default AdminDashboard
import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom"
import Axios from "axios"

const Login = () => {

    const navigate = useNavigate()

    const [work_email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [loginStatus, setLoginStatus] = useState("")

    Axios.defaults.withCredentials = true;

    const loginEmployee = () => {
        Axios.post("http://localhost:6197/login", {
            work_email: work_email,
            password: password,

        }).then((response) => {

            if(response.data.message){
                setLoginStatus(response.data.message)
            } else {
                if (response.data.emp_role == 0){
                    console.log("The user is an admin.")
                } else if (response.data.emp_role == 1){
                    console.log("The user is an HR.")
                } else {
                    console.log("The user is an employee,")
                }
            }
        });
    };

    useEffect(() => {
        Axios.get("http://localhost:6197/login").then((response) => {
            if (response.data.loggedIn == true) {
                console.log(response.data.user[0].work_email + " is logged in.")
            }
        })
    }, [])

    return(
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                    <h1 className="title">Login to your account</h1>
                    <input 
                    type="email" 
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    placeholder="Email Address"/>

                    <input 
                    type="password" 
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    placeholder="Password"/>

                    <button onClick={ loginEmployee } className="btn btn-block">Login</button>

                    <h1>{loginStatus}</h1>
            </div>  
        </div>
    )
}

export default Login
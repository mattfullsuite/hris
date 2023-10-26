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
        <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="frontend/src/assets/Logo-transparent.png"
            alt="FullSuite Logo"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            FS HRI System
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block right text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
          );
        // <div className="login-signup-form animated fadeInDown">
        //     <div className="form">
        //             <h1 className="title">Login to your account</h1>
        //             <input 
        //             type="email" 
        //             onChange={(e) => {
        //                 setEmail(e.target.value)
        //             }}
        //             placeholder="Email Address"/>

        //             <input 
        //             type="password" 
        //             onChange={(e) => {
        //                 setPassword(e.target.value)
        //             }}
        //             placeholder="Password"/>

        //             <button onClick={ loginEmployee } className="btn btn-block">Login</button>

        //             <h1>{loginStatus}</h1>
        //     </div>  
        // </div>
    
}

export default Login
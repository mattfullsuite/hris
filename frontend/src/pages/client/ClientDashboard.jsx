import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom"
import Axios from "axios"

const ClientDashboard = () =>{

   // const navigate = useNavigate()

   // useEffect(() => {
   //    Axios.get("http://localhost:6197/login").then((response) => {
   //       if (response.data.loggedIn == false) {
   //          navigate("/login")
   //       }
   //    })
   // }, [])

    return (
        <>

<button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div class="h-full px-3 py-4 overflow-y-auto bg-[#0097B2] dark:bg-gray-800">
      <ul class="space-y-2 font-medium">

      <div class="flex justify-center mt-5">
      <img class="h-20 w-20 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
      </div>

      <div class="flex items-center justify-center">        
         <span class="font-bold text-xl"> 
         Matt Wilfred Salvador
         </span>
      </div>

      <div class="flex items-center justify-center">        
         <span className="mb-4"> 
         Senior Software Engineer
         </span>
      </div>

         
         <li>
            
            <a href="#" class="mb-12 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
            </svg>

               <span class="ml-3" >Profile</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
            <path fill-rule="evenodd" d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z" clip-rule="evenodd" />
            <path fill-rule="evenodd" d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z" clip-rule="evenodd" />
            </svg>

               <span class="ml-3">Dashboard</span>
            </a>
         </li>

         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
            <path fill-rule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z" clip-rule="evenodd" />
            </svg>

               <span class="flex-1 ml-3 whitespace-nowrap">Announcements</span>
               <span class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300"></span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
            </svg>

               <span class="flex-1 ml-3 whitespace-nowrap">Attendance</span>
              
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
            <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
            </svg>

               <span class="flex-1 ml-3 whitespace-nowrap">Training</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clip-rule="evenodd" />
            <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
            </svg>

               <span class="flex-1 ml-3 whitespace-nowrap">Directory</span>
            </a>
         </li>
         <li>
            <a href="#" class="mt-12 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
               <path fill-rule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z" clip-rule="evenodd" />
            </svg>

               <span class="flex-1 ml-3 whitespace-nowrap">Logout</span>
            </a>
         </li>
      </ul>
   </div>
</aside>

<div class="p-4 sm:ml-64">
     {/* Date */}
      <div className="mb-5 text-xl">
         <p>Friday, November 03, 2023</p>
      </div>

      {/* Greeting */}
      <div className="mb-5 text-3xl font-bold">
         <p>Good Morning User!</p>
      </div>

      {/* <!-- Single Row --> */}
<div class="grid grid-cols-[20%,80%] gap-4 my-4 mx-4">
  {/* <!-- Remaining Offset Time --> */}
  <div class="p-3 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700 flex flex-col items-center justify-center">
    <p class="text-l font-semibold">Remaining Offset Time</p>
    <div class="flex flex-row items-center p-3">
      <span class="text-5xl font-bold">5</span>
      <span class="text-3xl font-bold"> hr/s</span>
    </div>
    <button class="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded-full">
      Reparation Request
    </button>
  </div>

  {/* PTO Notices (spanning until Number of PTOs)*/}
  <div class="p-3 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700 row-span-2">
    <p class="text-xl font-semibold">PTO Notices</p>
    <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul class="flex flex-wrap -mb-px">
        <li class="me-2">
          <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">All</a>
        </li>
        <li class="me-2">
          <a href="#" class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Approved</a>
        </li>
        <li class="me-2">
          <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Pending</a>
        </li>
      </ul>
    </div>
  </div>

  {/* <!-- Number of PTOs --> */}
  <div class="p-3 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700 flex flex-col items-center justify-center">
    <p class="text-l font-semibold">Number of PTOs</p>
    <span class="text-5xl font-bold">5</span><br />
    <p class="text-l font-normal">Available until</p>
    <p class="text-xl font-normal">March 25, 2023</p>
  </div>

  {/* <!-- Buttons below --> */}
  <button class="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded">
    File A Leave
  </button>

  <div class="p-3 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700 row-span-2">
    <p class="text-l font-semibold">Birthdays this Month</p>
  </div>

  <button class="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded">
    View Recent Payslip
  </button>
</div>

{/* Divider */}
<div className="class=absolute bottom-0 left-0 w-full h-px bg-gray-300"></div>

{/* Announcements */}
<div>
   <p className="text-xl font-semibold my-2 ml-2">Announcements</p>
</div>

<div class="grid grid-cols-3 gap-4 my-4 mx-4">

  <div class="p-3 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700">
    <p class="text-xl font-bold">Title</p>
    <p class="text-l font-semibold border p-1">Category</p>
    <p class="text-l font-normal">Lorem ipsum dolor sit amet consectetur. Senectus ullamcorper sit sem feugiat. </p>
    <p class="text-l font-normal mt-1">Admin</p>
    <p class="text-l font-normal">11/03/2023</p>
  </div>

  <div class="p-3 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700">
    <p class="text-xl font-bold">Title</p>
    <p class="text-l font-semibold border p-1">Category</p>
    <p class="text-l font-normal">Lorem ipsum dolor sit amet consectetur. Senectus ullamcorper sit sem feugiat. </p>
    <p class="text-l font-normal mt-1">Admin</p>
    <p class="text-l font-normal">11/03/2023</p>
  </div>

  <div class="p-3 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700">
    <p class="text-xl font-bold">Title</p>
    <p class="text-l font-semibold border p-1">Category</p>
    <p class="text-l font-normal">Lorem ipsum dolor sit amet consectetur. Senectus ullamcorper sit sem feugiat. </p>
    <p class="text-l font-normal mt-1">Admin</p>
    <p class="text-l font-normal">11/03/2023</p>
  </div>
</div>

{/* Divider */}
<div className="class=absolute bottom-0 left-0 w-full h-px bg-gray-300"></div>

{/* Training */}
<div>
   <p className="text-xl font-semibold my-2 ml-2">Training</p>
</div>

<div class="grid grid-cols-4 gap-4 my-4 mx-4">

  <div class="p-3 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700">
    <p class="text-xl font-bold">Title</p>
    <p class="text-l font-semibold border p-1">Category</p>
    <p class="text-l font-normal">11/03/2023</p>
    <p class="text-l font-normal mt-1">Speaker: Antoinette</p>
  </div>

  <div class="p-3 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700">
    <p class="text-xl font-bold">Title</p>
    <p class="text-l font-semibold border p-1">Status</p>
    <p class="text-l font-normal">11/03/2023</p>
    <p class="text-l font-normal mt-1">Speaker: Antoinette</p>
  </div>  
  
  <div class="p-3 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700">
    <p class="text-xl font-bold">Title</p>
    <p class="text-l font-semibold border p-1">Status</p>
    <p class="text-l font-normal">11/03/2023</p>
    <p class="text-l font-normal mt-1">Speaker: Antoinette</p>
  </div>  
  
  <div class="p-3 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700">
    <p class="text-xl font-bold">Title</p>
    <p class="text-l font-semibold border p-1">Status</p>
    <p class="text-l font-normal">11/03/2023</p>
    <p class="text-l font-normal mt-1">Speaker: Antoinette</p>
  </div>
</div>
</div>
</>
    )
}

export default ClientDashboard
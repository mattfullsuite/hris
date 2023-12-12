import Axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SideBarProfile = (color) => {
  const [users, setUser] = useState([]);
  const [titles, setTitle] = useState([]);

  useEffect(() => {
    const fetchUserTitles = async () => {
      try {
        const res = await Axios.get("http://localhost:6197/showTitles");
        setTitle(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserTitles();
  }, []);

  useEffect(() => {
    const fetchUserTitles = async () => {
      try {
        const res = await Axios.get("http://localhost:6197/showTitles");
        setTitle(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserTitles();
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
      <div>
        {users.map((user) => (
          <div className="flex justify-center mt-5  mb-5">
            <img
              className="h-28- w-28 rounded-full ring-2 ring-white"
              src={user.emp_pic}
              alt=""
            />
          </div>
        ))}
        <div className="flex flex-col items-center justify-center">
          {users.map((user) => (
            <div className="font-bold text-xl text-white">
              {user.f_name + " " + user.s_name}
            </div>
          ))}

          {titles.map((title) => (
            <div className="mb-1 text-white text-center ">{title.title}</div>
          ))}
          <div>
            <Link to="/empProfile">
              <a className="mb-12 flex items-center p-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-800 dark:hover:bg-gray-700 group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="ml-3 text-white">Profile</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBarProfile;

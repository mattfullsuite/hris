import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
  const { user_key } = useParams();
  const [user, setUser] = useState([]);
  const[passwordInfo, setPassword] = useState({password: ""});

  const handleChange = (event) => {
    setPassword({ ...passwordInfo, [event.target.name]: [event.target.value] });

    console.log(JSON.stringify(passwordInfo))
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    resetPassword()
  }

  const resetPassword = () => {
    axios
      .post(`http://localhost:6197/reset-password/${user_key}`, passwordInfo)
      .then((res) => console.log(JSON.stringify(passwordInfo)))
      .catch((err) => console.log(err));

    window.location.reload();
    alert("Password successfully changed!");
  };


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          `http://localhost:6197/reset-password/${user_key}`
        );

        setUser(res.data.length);
      } catch (e) {
        console.log(e);
      }
    };

    fetchUser();
  }, []);

  if (user == 1) {
    return (
      <>
        <div className="h-screen flex flex-col justify-center items-center gap-5">
          <h1 className="text-3xl font-semibold mb-2 text-center">
            Reset password
          </h1>

          <img className="h-44" src="../svgs/reset_password.svg" />

          <p className="text-sm text-center">
            Get back on track by resetting your password.
          </p>

          <form href="/forgot-password" method="POST" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2 mt-5">
              <input
                className="input input-bordered w-72"
                type="password"
                placeholder="New password"
                name="password"
                required
                onChange={handleChange}
              />

              <button className="btn" type="submit">
                Change password
              </button>

              <a href="/login" className="btn btn-ghost">
                GO TO LOGIN
              </a>
            </div>
          </form>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="h-screen flex flex-col justify-center items-center gap-5">
          <h1 className="text-3xl font-semibold mb-2 text-center">
            Link is broken
          </h1>

          <img className="h-44" src="../svgs/not_available.svg" />

          <p className="text-sm text-center">
            Digital Detour: This link got lost in cyberspace. 
          </p>


            <a href="/login" className="btn btn-ace
             w-72">
            GO TO LOGIN
            </a>

        </div>
      </>
    );
  }
};

export default ResetPassword;

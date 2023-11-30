import React, {useState, useEffect} from "react";
import Axios from 'axios';

const DashBGreeting = () => {
  const [users, setUser] = useState([]);

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


    return(
        <>
        {/* Date */}
        <div className="mb-1 text-xl">
          <p>Friday, November 03, 2023</p>
        </div>

        {/* Greeting */}
        { users.map((user) => (
        <div className="m-2 text-3xl font-bold">
          <p>Good Morning {user.f_name}!</p>
        </div>
        ))}
        </>
    )
}

export default DashBGreeting;
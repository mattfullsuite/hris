import React, {useState} from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [emailInfo, setEmail] = useState({ email: "" });

  const handleChange = (event) => {
    setEmail({ ...emailInfo, [event.target.name]: [event.target.value] });

    console.log(JSON.stringify(emailInfo))
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    forgotPassword()

  }

  const forgotPassword = () => {
    axios
      .post("http://localhost:6197/forgot-password", emailInfo)
      .then((res) => console.log(JSON.stringify(emailInfo)))
      .catch((err) => console.log(err));

    window.location.reload();
    alert("sample");
  };

  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center gap-5">
        <h1 className="text-3xl font-semibold mb-2 text-center">
          Forgot password?
        </h1>

        <img className="h-44" src="./svgs/forgot_password.svg" />

        <p className="text-sm text-center">
          When memory fails, we've got your back. <br /> Reset your password and
          reclaim your account!{" "}
        </p>

        <form href="/forgot-password" method="POST" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 mt-5">
            <input
              className="input input-bordered w-72"
              type="email"
              placeholder="example@email.com"
              name="email"
              required
              onChange={handleChange}
            />

            <button className="btn" type="submit">
              Send Link
            </button>

            <a href="/login" className="btn btn-ghost">
              BACK TO LOGIN
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;

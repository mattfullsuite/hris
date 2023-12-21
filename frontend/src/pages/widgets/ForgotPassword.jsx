import React from "react";

const ForgotPassword = () => {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center gap-5">
        <img className="h-44" src="./svgs/forgot_password.svg" />

        <div className="text-center">
          <h1 className="text-xl font-semibold mb-2">Forgot password?</h1>
          <p className="text-sm">
            When memory fails, we've got your back. <br /> Reset your password
            and reclaim your account!{" "}
          </p>
        </div>

        <form href="/forgot-password" method="POST">
          <div className="flex flex-col gap-2 mt-5">
            <input className="input input-bordered w-72" type="email" placeholder="example@email.com" name="email"/>

            <button className="btn" type="submit">Send Link</button>

            <a href="/login" className="btn btn-ghost">BACK TO LOGIN</a>
          </div>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;

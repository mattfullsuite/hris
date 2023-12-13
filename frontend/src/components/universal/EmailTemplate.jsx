import React from "react";


const EmailTemplate = ({ firstName, tempPassword }) => {


    return (
        <>
            <div className="w-full bg-[#363636] box-border p-4 flex flex-row justify-center items-center gap-5">
                <img src="./Fs-logo.png" className="h-14 w-14" />

                <h1 className="text-[#ffffff] text-lg font-bold">fullsuite.ph</h1>
            </div>

            <p className="m-5 text-justify">Hi, {firstName}!, we are happy to have you here at Fullsuite! But first things first, you need to change your password to secure your account. The system has already generated a temporary password to access you account.</p>

            <div className="flex flex-col justify-center items-center gap-5 text-center my-20 mx-5">
                <p>Your temporary password:</p>

                <h2 className="font-semibold text-lg text-[#0097b2]">{tempPassword}</h2>

                <button className="btn btn-sm text-white bg-[#0097b2] w-48 mt-10">Go to portal</button>
            </div>
        </>
    )
}

export default EmailTemplate;
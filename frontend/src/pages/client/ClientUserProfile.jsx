import React from "react";
import ClientSideBar from "../../components/client/ClientSideBar";

const ClientUserProfile = () => {
  return (
    <>
      <ClientSideBar></ClientSideBar>
      <div className="p-4 sm:ml-64 flex flex-col">
        {/* Name, Primary */}
        <div className="m-2 p-3">
          <h1 className="text-4xl font-bold tracking-wide">
            Marco Eliseo Antero
          </h1>
          <h1>marco@fullsuite.ph</h1>
          <h1>Software Engineer</h1>
          <h1>OCCI - 001</h1>
        </div>

        {/* Contact Information */}
        <div className="m-2 p-3 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700 flex flex-1 flex-col">
          <h1 className="font-bold">Contact Information</h1>

          <div className="flex flex-col md:flex-row">
            {/* Personal Email */}
            <label className="form-control w-full max-w-md md:mb-0 md:mr-4">
              <div className="label">
                <span className="label-text">Personal Email</span>
              </div>
              <input
                value="marco.e.antero@gmail.com"
                type="text"
                className="input input-bordered w-full max-w-xs"
                disabled
              />
            </label>

            {/* Contact Number */}
            <label className="form-control w-full max-w-md md:mb-0 md:mr-4">
              <div className="label">
                <span className="label-text">Contact Number</span>
              </div>
              <input
                value="000000000"
                type="text"
                className="input input-bordered w-full max-w-xs"
                disabled
              />
            </label>
            <div></div>
          </div>
          <div className="divider"></div>
          <p className="font-semibold text-red-500 text-sm">
            Emergency Contact Information
          </p>
          <div className="flex flex-col md:flex-row">
            {/* Name */}
            <label className="form-control w-full max-w-md md:mb-0 md:mr-4">
              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input
                value="Marco Antero"
                type="text"
                className="input input-bordered w-full max-w-xs"
                disabled
              />
            </label>

            {/* Number */}
            <label className="form-control w-full max-w-md md:mb-0 md:mr-4">
              <div className="label">
                <span className="label-text">Number</span>
              </div>
              <input
                value="000000000"
                type="text"
                className="input input-bordered w-full max-w-xs"
                disabled
              />
            </label>
          </div>
        </div>

        {/* Personal Information */}
        <div className="m-2 p-3 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700 flex flex-1 flex-col">
          <h1 className="font-bold">Personal Information</h1>

          <div className="flex flex-col md:flex-row">
            {/* Date of Birth */}
            <label className="form-control w-full max-w-md md:mb-0 md:mr-4">
              <div className="label">
                <span className="label-text">Date of Birth</span>
              </div>
              <input
                value="February 10, 2001"
                type="text"
                className="input input-bordered w-full max-w-xs"
                disabled
              />
            </label>

            {/* Sex */}
            <label className="form-control w-full max-w-md md:mb-0 md:mr-4">
              <div className="label">
                <span className="label-text">Sex</span>
              </div>
              <input
                value="Male"
                type="text"
                className="input input-bordered w-full max-w-xs"
                disabled
              />
            </label>
          </div>
          <div className="flex flex-col md:flex-row">
            {/* Civil Status */}
            <label className="form-control w-full max-w-md md:mb-0 md:mr-4">
              <div className="label">
                <span className="label-text">Civil Status</span>
              </div>
              <input
                value="Single"
                type="text"
                className="input input-bordered w-full max-w-xs"
                disabled
              />
            </label>
          </div>

          <div className="flex flex-col md:flex-row">
            {/* Permanent Address */}
            <label className="form-control w-full max-w-md md:mb-0 md:mr-4">
              <div className="label">
                <span className="label-text">Permanent Address</span>
              </div>
              <input
                value="Military Cut-off, Baguio City, Benguet 2600"
                type="text"
                className="input input-bordered w-full"
                disabled
              />
            </label>
          </div>

          <div className="flex flex-col md:flex-row">
            {/* Current Address */}
            <label className="form-control w-full max-w-md md:mb-0 md:mr-4">
              <div className="label">
                <span className="label-text">Current Address</span>
              </div>
              <input
                value="Military Cut-off, Baguio City, Benguet 2600"
                type="text"
                className="input input-bordered w-full"
                disabled
              />
            </label>
          </div>
        </div>

        {/* Employee Information */}
        <div className="m-2 p-3 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700 flex flex-1 flex-col">
          <h1 className="font-bold mb-2">Employee Information</h1>

          <div>
            <h1 className="font-bold text-sm">Date Hired</h1>
            <h1 className="ml-2 text-sm">September 01, 2023</h1>
          </div>

          <div className="divider"></div>

          <div className="flex">
            <div className="flex-1">
              <h1 className="font-bold text-sm">SSS Number</h1>
              <h1 className="text-sm ml-2">00-0000000-0</h1>
            </div>

            <div className="flex-1">
              <h1 className="font-bold text-sm">PHIC Number</h1>
              <h1 className="text-sm ml-2">00-0000000-0</h1>
            </div>

            <div className="flex-1">
              <h1 className="font-bold text-sm">TIN Number</h1>
              <h1 className="text-sm ml-2">00-0000000-0</h1>
            </div>
          </div>

          <div className="divider"></div>

          <div className="flex my-1">
            <div className="flex-1">
              <h1 className="font-bold text-sm">Rate</h1>
              <h1 className="text-sm ml-2">00-0000000-0</h1>
            </div>

            <div className="flex-1">
              <h1 className="font-bold text-sm">Basic Salary</h1>
              <h1 className="text-sm ml-2">00-0000000-0</h1>
            </div>

            <div className="flex-1"></div>
          </div>

          <div className="flex my-1">
            <div className="flex-1">
              <h1 className="font-bold text-sm">Night Differential</h1>
              <h1 className="text-sm ml-2">00-0000000-0</h1>
            </div>

            <div className="flex-1">
              <h1 className="font-bold text-sm">Bonus</h1>
              <h1 className="text-sm ml-2">00-0000000-0</h1>
            </div>

            <div className="flex-1"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientUserProfile;

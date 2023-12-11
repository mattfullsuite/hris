import React, {useState} from "react";

const HRFormAddEmployee = () => {

  const [employeeInfo, setEmployeeInfo] = useState({
    emp_num: "",
    work_email: "",
    password: "",
    f_name: "",
    m_name: "",
    s_name: "",
    emp_role: "",
    emp_pic: "",
    personal_email: "",
    contact_num: "",
    dob: "",
    p_address: "",
    c_address: "",
    date_hired: "",
    date_regularization: "",
    date_separated: "",
    emp_status: "",
    sex: "",
    gender: "",
    civil_status: "",
    emergency_contact_name: "",
    emergency_contact_num: "",
    created_by: "",
    created_at: "",
    updated_by: "",
    updated_at: "",
  });

  return (
    <>
      <>
        <div className="p-4 sm:ml-64 flex flex-col">
          <div className="m-2">
            <h1 className="text-3xl font-bold tracking-wide">
              Add New Employee
            </h1>
          </div>
          <form>
            {/* Personal Information */}
            <div className="m-2 p-3 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700 flex flex-1 flex-col">
              <h1 className="font-bold">Personal Information</h1>

              <div className="flex flex-col md:flex-row">
                {/* First Name */}
                <label className="form-control w-full max-w-md md:mb-0 md:mr-4">
                  <div className="label">
                    <span className="label-text">First Name</span>
                  </div>
                  <input
                    type="text"
                    className="input input-bordered w-full "
                    required
                  />
                </label>

                {/* Middle Name */}
                <label className="form-control w-full max-w-md md:mb-0 md:mr-4">
                  <div className="label">
                    <span className="label-text">Middle Name</span>
                  </div>
                  <input
                    type="text"
                    className="input input-bordered w-full "
                    required
                  />
                </label>

                {/* Surname */}
                <label className="form-control w-full max-w-md md:mb-0 md:mr-4">
                  <div className="label">
                    <span className="label-text">Surname</span>
                  </div>
                  <input
                    type="text"
                    className="input input-bordered w-full "
                    required
                  />
                </label>
              </div>

              <div className="flex flex-col md:flex-row">
                {/* Date of Birth */}
                <label className="form-control w-full max-w-md md:mb-0 md:mr-4">
                  <div className="label">
                    <span className="label-text">Date of Birth</span>
                  </div>
                  <input
                    type="date"
                    className="input w-full input-bordered w-full"
                    required
                  />
                </label>

                {/* Civil Status */}
                <label className="form-control w-full max-w-md md:mb-0 md:mr-4">
                  <div className="label">
                    <span className="label-text">Civil Status</span>
                  </div>
                  <select
                    name="civil-status"
                    className="select select-bordered w-full"
                    required
                  >
                    <option disabled selected>
                      Select Civil Status
                    </option>
                    <option>Single</option>
                    <option>Married</option>
                    <option>Widowed</option>
                  </select>
                </label>

                {/* Sex */}
                <label className="form-control w-full max-w-md md:mb-0 md:mr-4">
                  <div className="label">
                    <span className="label-text">Sex</span>
                  </div>
                  <select
                    name="sex"
                    className="select select-bordered w-full"
                    required
                  >
                    <option disabled selected>
                      Select Employee's Sex
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </label>

                {/* Gender */}
                <label className="form-control w-full max-w-md md:mb-0 md:mr-4">
                  <div className="label">
                    <span className="label-text">Gender</span>
                  </div>
                  <input type="text" className="input input-bordered w-full" />
                </label>
              </div>

              <div className="flex flex-col md:flex-row">
                {/* Permanent Address */}
                <label className="form-control w-full max-w-5xl md:mb-0 md:mr-4">
                  <div className="label">
                    <span className="label-text">Permanent Address</span>
                  </div>
                  <input type="text" className="input input-bordered w-full" />
                </label>
              </div>

              <div className="flex flex-col md:flex-row">
                {/* Current Address */}
                <label className="form-control w-full max-w-5xl md:mb-0 md:mr-4">
                  <div className="label pb-0">
                    <span className="label-text">Current Address</span>
                  </div>
                  <div className="flex items-center ">
                    {" "}
                    <label className="label cursor-pointer">
                      <input type="checkbox" className="checkbox checkbox-sm" />
                      <span className="label-text ml-2">
                        {" "}
                        Same as Permanent Address
                      </span>
                    </label>
                  </div>
                  <input type="text" className="input input-bordered w-full" />
                </label>
              </div>
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
                  <input type="text" className="input input-bordered w-full " />
                </label>

                {/* Contact Number */}
                <label className="form-control w-full max-w-md md:mb-0 md:mr-4">
                  <div className="label">
                    <span className="label-text">Contact Number</span>
                  </div>
                  <input
                    type="number"
                    className="input input-bordered w-full "
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
                  <input type="text" className="input input-bordered w-full " />
                </label>

                {/* Number */}
                <label className="form-control w-full max-w-md md:mb-0 md:mr-4">
                  <div className="label">
                    <span className="label-text">Number</span>
                  </div>
                  <input
                    type="number"
                    className="input input-bordered w-full "
                  />
                </label>
              </div>
            </div>

            {/* Employee Information */}
            <div className="m-2 p-3 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700 flex flex-1 flex-col">
              <h1 className="font-bold mb-2">Employee Information</h1>

              <div className="flex flex-col w-full md:flex-row">
                {/* Employee ID */}
                <label className="form-control w-full max-w-md md:mb-0 md:mr-4">
                  <div className="label">
                    <span className="label-text">Employee ID</span>
                  </div>
                  <input type="text" className="input input-bordered w-full " />
                </label>

                {/* Employment Status */}
                <label className="form-control w-full max-w-md md:mb-0 md:mr-4">
                  <div className="label">
                    <span className="label-text">Employment Status</span>
                  </div>
                  <select
                    name="emp-status"
                    className="select select-bordered w-full "
                    required
                  >
                    <option disabled selected>
                      Select Employment Status
                    </option>
                    <option>Probationary</option>
                    <option>Regular</option>
                    <option>Part-time</option>
                  </select>
                </label>
              </div>

              <div className="flex flex-col md:flex-row">
                {/* Date Hired */}
                <label className="form-control w-full max-w-md md:mb-0 md:mr-4">
                  <div className="label">
                    <span className="label-text">Date Hired</span>
                  </div>
                  <input type="date" className="input input-bordered w-full " />
                </label>

                {/* Date of Regularization */}
                <label className="form-control w-full max-w-md md:mb-0 md:mr-4">
                  <div className="label">
                    <span className="label-text">Date of Regularization</span>
                  </div>
                  <input type="date" className="input input-bordered w-full " />
                </label>

                {/* Date Separated*/}
                <label className="form-control w-full max-w-md md:mb-0 md:mr-4">
                  <div className="label">
                    <span className="label-text">Date Separated</span>
                  </div>
                  <input type="date" className="input input-bordered w-full " />
                </label>
              </div>

              <div className="divider"></div>


              <div className="flex flex-col md:flex-row">
                <label className="form-control w-full max-w-md md:mb-0 md:mr-4">
                  <div className="label">
                    <span className="label-text">Upload Profile Picture</span>
                  </div>
                  <input type="file" className="file-input w-full max-w-xs" />
                </label>
              </div>

              <div className="divider"></div>

              <div className="flex flex-col md:flex-row">
                {/* SSS Number */}
                <label className="form-control w-full max-w-md md:mb-0 md:mr-4">
                  <div className="label">
                    <span className="label-text">SSS Number</span>
                  </div>
                  <input type="text" className="input input-bordered w-full " />
                </label>

                {/* PHIC Number */}
                <label className="form-control w-full max-w-md md:mb-0 md:mr-4">
                  <div className="label">
                    <span className="label-text">SSS Number</span>
                  </div>
                  <input type="text" className="input input-bordered w-full" />
                </label>
              </div>

              <div className="flex flex-col md:flex-row">
                {/* HDMC Number */}
                <label className="form-control w-full max-w-md md:mb-0 md:mr-4">
                  <div className="label">
                    <span className="label-text">HDMC Number</span>
                  </div>
                  <input type="text" className="input input-bordered w-full " />
                </label>

                {/* TIN Number */}
                <label className="form-control w-full max-w-md md:mb-0 md:mr-4">
                  <div className="label">
                    <span className="label-text">TIN Number</span>
                  </div>
                  <input type="text" className="input input-bordered w-full " />
                </label>
              </div>
            </div>
            <div className="flex justify-end m-2">
              <input type="submit" value="Submit" className="btn" />
            </div>
          </form>
        </div>
      </>
    </>
  );
};

export default HRFormAddEmployee;

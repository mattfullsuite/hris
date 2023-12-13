import React, {useState} from "react";
import axios from 'axios'

const HRFormAddEmployee = () => {

  const [employeeInfo, setEmployeeInfo] = useState({
    emp_num: "",
    work_email: "",
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
    emp_status: "",
    sex: "",
    gender: "",
    civil_status: "",
  
  });

  const handleChange = (event) => {
    setEmployeeInfo({ ...employeeInfo, [event.target.name]: [event.target.value] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    addNewEmployee()

    // document.getElementById("file_a_leave_btn").close();
    // document.getElementById("leaveForm").reset();
    // window.location.reload();
  };

  const addNewEmployee = () => {
    axios
    .post("http://localhost:6197/addNewEmployee", employeeInfo)
    .then((res) => console.log(JSON.stringify(employeeInfo)))
    .catch((err) => console.log(err))

    window.location.reload();
    alert("Successfully added new employee: " + employeeInfo.emp_num)
  }

  return (
    <>
      <>
        <div className="p-4 sm:ml-64 flex flex-col">
          <div className="m-2">
            <h1 className="text-3xl font-bold tracking-wide">
              Add New Employee
            </h1>
          </div>
          <form 
          onSubmit={handleSubmit}
          >
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
                    name="f_name"
                    onChange={handleChange}
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
                    name="m_name"
                    onChange={handleChange}
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
                    name="s_name"
                    onChange={handleChange}
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
                    name="dob"
                    onChange={handleChange}
                    type="date"
                    className="input input-bordered w-full"
                    required
                  />
                </label>

                {/* Civil Status */}
                <label className="form-control w-full max-w-md md:mb-0 md:mr-4">
                  <div className="label">
                    <span className="label-text">Civil Status</span>
                  </div>
                  <select
                    name="civil_status"
                    onChange={handleChange}
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
                    onChange={handleChange}
                    className="select select-bordered w-full"
                    required
                  >
                    <option disabled selected>
                      Select Sex
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
                  <input
                  name="gender" 
                  onChange={handleChange}
                  type="text" 
                  className="input input-bordered w-full" />
                </label>
              </div>

              <div className="flex flex-col md:flex-row">
                {/* Permanent Address */}
                <label className="form-control w-full max-w-5xl md:mb-0 md:mr-4">
                  <div className="label">
                    <span className="label-text">Permanent Address</span>
                  </div>
                  <input 
                  name="p_address"
                  onChange={handleChange}
                  type="text" 
                  className="input input-bordered w-full" />
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
                      <input 
                      type="checkbox" 
                      className="checkbox checkbox-sm" />
                      <span className="label-text ml-2">
                        {" "}
                        Same as Permanent Address
                      </span>
                    </label>
                  </div>
                  <input 
                  name="c_address"
                  onChange={handleChange}
                  type="text" 
                  className="input input-bordered w-full" />
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
                  <input 
                  name="personal_email"
                  onChange={handleChange}
                  type="email" 
                  className="input input-bordered w-full " />
                </label>
                {/* Contact Number */}
                <label className="form-control w-full max-w-md md:mb-0 md:mr-4">
                  <div className="label">
                    <span className="label-text">Contact Number</span>
                  </div>
                  <input
                    name="contact_num"
                    onChange={handleChange}
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
                  <input 
                  name="emergency_contact_name"
                  onChange={handleChange}
                  type="text" 
                  className="input input-bordered w-full " />
                </label>

                {/* Number */}
                <label className="form-control w-full max-w-md md:mb-0 md:mr-4">
                  <div className="label">
                    <span className="label-text">Number</span>
                  </div>
                  <input
                    name="emergency_contact_num"
                    onChange={handleChange}
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
                  <input 
                  id="emp_num"
                  name="emp_num"
                  onChange={handleChange}
                  type="text" 
                  className="input input-bordered w-full " required />
                </label>

                {/* Work Email */}
                <label className="form-control w-full max-w-md md:mb-0 md:mr-4">
                  <div className="label">
                    <span className="label-text">Work E-mail</span>
                  </div>
                  <input 
                  name="work_email"
                  onChange={handleChange}
                  type="email" 
                  className="input input-bordered w-full " required />
                </label>

              </div>

              <div className="flex flex-col w-full md:flex-row">
                {/* Employment Status */}
                <label className="form-control w-full max-w-md md:mb-0 md:mr-4">
                  <div className="label">
                    <span className="label-text">Employment Status</span>
                  </div>
                  <select
                    name="emp_status"
                    onChange={handleChange}
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

                {/* Employee Role */}
                <label className="form-control w-full max-w-md md:mb-0 md:mr-4">
                  <div className="label">
                    <span className="label-text">Employment Role</span>
                  </div>
                  <select
                    name="emp_role"
                    onChange={handleChange}
                    className="select select-bordered w-full "
                    required
                  >
                    <option disabled selected>
                      Select Employment Role
                    </option>
                    <option value="3">Manager</option>
                    <option value="2">Regular Employee</option>
                    <option value="1">HR</option>
                    <option>Administrator</option>
                  </select>
                </label>
              </div>

              <div className="flex flex-col md:flex-row">
                {/* Date Hired */}
                <label className="form-control w-full max-w-md md:mb-0 md:mr-4">
                  <div className="label">
                    <span className="label-text">Date Hired</span>
                  </div>
                  <input 
                  name="date_hired"
                  onChange={handleChange}
                  type="date" 
                  className="input input-bordered w-full " />
                </label>

                {/* Date of Regularization */}
                <label className="form-control w-full max-w-md md:mb-0 md:mr-4">
                  <div className="label">
                    <span className="label-text">Date of Regularization</span>
                  </div>
                  <input 
                  name="date_regularization"
                  onChange={handleChange}
                  type="date" 
                  className="input input-bordered w-full " />
                </label>

                {/* Date Separated*/}
                <label className="form-control w-full max-w-md md:mb-0 md:mr-4">
                  <div className="label">
                    <span className="label-text">Date Separated</span>
                  </div>
                  <input 
                  name="date_separated"
                  onChange={handleChange}
                  type="date" 
                  className="input input-bordered w-full " />
                </label>
              </div>

              <div className="divider"></div>

              <div className="flex flex-col md:flex-row">
                <label className="form-control w-full max-w-md md:mb-0 md:mr-4">
                  <div className="label">
                    <span className="label-text">Upload Profile Picture</span>
                  </div>
                  <input 
                  name="emp_pic"
                  onChange={handleChange}
                  type="file" 
                  className="file-input w-full max-w-xs" />
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

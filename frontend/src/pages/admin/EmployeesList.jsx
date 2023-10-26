import React, {useState, useEffect} from 'react'
import axios from 'axios'

const EmployeesList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        const fetchAllEmployees = async ()=> {
            try{
                const res = await axios.get("http://localhost:6197/employeeslist")
                setEmployees(res.data)
            } catch(err){
                console.log(err)
            }
        };
        fetchAllEmployees();
    }, []);

    const handleDelete = async (user_id) => {
        try {
            await axios.delete("http://localhost:6197/employeeslist/" + user_id)
        } catch(err){
            console.log(err)
        }
    }


    return (
    <>
   <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br/>
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 2 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-3@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Brice Swyre</div>
              <div className="text-sm opacity-50">China</div>
            </div>
          </div>
        </td>
        <td>
          Carroll Group
          <br/>
          <span className="badge badge-ghost badge-sm">Tax Accountant</span>
        </td>
        <td>Red</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 3 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-4@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Marjy Ferencz</div>
              <div className="text-sm opacity-50">Russia</div>
            </div>
          </div>
        </td>
        <td>
          Rowe-Schoen
          <br/>
          <span className="badge badge-ghost badge-sm">Office Assistant I</span>
        </td>
        <td>Crimson</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 4 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Yancy Tear</div>
              <div className="text-sm opacity-50">Brazil</div>
            </div>
          </div>
        </td>
        <td>
          Wyman-Ledner
          <br/>
          <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
        </td>
        <td>Indigo</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </tbody>
    {/* foot */}
    <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot>
    
  </table>
</div>
    </>

        // <div>
        //     <h1>Table of Employees</h1>

        //     <div className="overflow-x-auto">
        //     <table className="table">
        //         {/* head */}
        //         <thead>
        //         <tr>
        //             <th>
        //             <label>
        //                 <input type="checkbox" className="checkbox" />
        //             </label>
        //             </th>
        //             <th>Name</th>
        //             <th>Work Email</th>
        //             <th>Contact Number</th>
        //             <th></th>
        //         </tr>
        //         </thead>
        //         <tbody>
        //         {/* row 1 */}

        //         { employees.map((employee) => (
        //         <tr key={employee.emp_id}>
        //             <th>
        //             <label>
        //                 <input type="checkbox" className="checkbox" />
        //             </label>
        //             </th>
        //             <td>
        //             <div className="flex items-center space-x-3">
        //                 <div className="avatar">
        //                 <div className="mask mask-squircle w-12 h-12">
                            
        //                     <img src={employee.emp_photo} alt="Avatar Tailwind CSS Component" />
        //                 </div>
        //                 </div>
        //                 <div>
        //                 <div className="font-bold">{employee.s_name + ", " + employee.f_name + " " + employee.m_name} </div>
        //                 <div className="text-sm opacity-50">{employee.c_address}</div>
        //                 </div>
        //             </div>
        //             </td>
        //             <td>
        //             { employee.work_email}
        //             <br/>
        //             <span className="badge badge-ghost badge-sm">{ employee.role } </span>
        //             </td>
        //             <td>{ employee.contact_num }</td>
        //             <th>
        //             <button className="btn btn-ghost btn-xs">details</button>
        //             </th>
        //         </tr>
        //         ))}


        //         </tbody>
        //         {/* foot */}
        //         <tfoot>
        //         <tr>
        //             <th></th>
        //             <th>Name</th>
        //             <th>Work Email</th>
        //             <th>Contact Number</th>
        //             <th></th>
        //         </tr>
        //         </tfoot>
                
        //     </table>
        //     </div>

        // </div>
    )
}

export default EmployeesList
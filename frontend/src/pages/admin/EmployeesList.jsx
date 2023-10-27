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
        <div className='p-5'>
            <h1 className='text-3xl font-bold '>Employees</h1>

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
                    <th>Work Email</th>
                    <th>Contact Number</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}

                { employees.map((employee) => (
                <tr key={employee.emp_id}>
                    <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                    </th>
                    <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            
                            <img src={employee.emp_photo} />
                        </div>
                        </div>
                        <div>
                        <div className="font-bold">{employee.s_name + ", " + employee.f_name + " " + employee.m_name} </div>
                        
                        <div className="text-sm opacity-50">{employee.c_address}</div>
                        
                        </div>
                    </div>
                    </td>
                    <td>
                    { employee.work_email}
                    <br/>
                    <span className="badge badge-ghost badge-sm">{ employee.role } </span>
                    </td>
                    <td>{ employee.contact_num }</td>
                    <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                    </th>
                </tr>
                ))}


                </tbody>
                {/* foot */}
                <tfoot>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Work Email</th>
                    <th>Contact Number</th>
                    <th></th>
                </tr>
                </tfoot>
                
            </table>
            </div>

        </div>
    )
}


export default EmployeesList
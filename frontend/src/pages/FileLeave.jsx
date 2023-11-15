import React from 'react'
import {useState} from 'react'

const FileLeave = () => {
    const [company, setCompany] = useState({
        leave_id: "",
        emp_id: "",
        leave_type: "",
        leave_reason: "",
        leave_status: "",

    })

    const handleChange = (e) => {
        setCompany((prev=>({...prev, [e.target.name]: e.target.value })))
    };

    console.log(company)

    return (
        <div className='form'>
            <h1>File A Leave</h1>
            <input type="date"  onChange={handleChange} placeholder="Company Name"/>
            <br/>            
            <input type="email" onChange={handleChange} placeholder="Company Address"/>
            <br/>
            <button className="btn btn-ghost btn-xs bg-accent">File</button>
        </div>
    )
}

export default FileLeave
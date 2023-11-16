import React from 'react'
import {useState} from 'react'

const FileLeave = () => {
    const [filedLeaves, setFiledLeaves] = useState({
        leave_id: "",
        requester_id: "",
        leave_type: "",
        leave_reason: "",
        leave_status: "",
        approver_id: "",
        is_paid: false,
        use_pto_count: 0,
    })

    const handleChange = (e) => {
        setFiledLeaves((prev=>({...prev, [e.target.name]: e.target.value })))
    };
    const attemptFile = (e) => {
        
    }

    return (
        <div className='form'>
            <h1>File A Leave</h1>
            <select onChange={handleChange}>
                <option value="Sick Leave">Sick Leave</option>
                <option value="Bereavement Leave">Bereavement Leave</option>
                <option value="Maternity/Paternity Leave">Maternity/Paternity Leave</option>
                <option value="Vacation Leave">Vacation Leave</option>
                <option value="Adverse Weather Leave">Adverse Weather Leave</option>
                <option value="Study Leave">Study Leave</option>
                <option value="Other Leave">Other Leave</option>
            </select>
            <textbox onChange={handleChange} placeholder="State reason here."></textbox>
            <input type="date">Date From</input>
            <input type="date">Date To</input>
            <input type="leave_type" onChange={handleChange} placeholder=" Name"/>
            <br/>            
            <input type="email" onChange={handleChange} placeholder="Company Address"/>
            <br/>
            <button className="btn btn-ghost btn-xs bg-accent">File</button>
        </div>
    )
}

export default FileLeave
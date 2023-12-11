import React, {useState, useEffect} from "react";
import axios from 'axios'
import DataTable from "react-data-table-component"

import { useNavigate, Link } from "react-router-dom"

const EmployeeListComponent = () => {
    // const handleDelete = async (user_id) => {
    //     try {
    //         await axios.delete("http://localhost:6197/employeeslist/" + user_id)
    //     } catch(err){
    //         console.log(err)
    //     }
    // }

    const [employees, setEmployees] = useState([])
    const [filter, setFilter] = useState([]);
    const[query, setQuery] = useState('');

    useEffect(() => {
        const fetchAllEmployees = async ()=> {
            try{
                const res = await axios.get("http://localhost:6197/employeeslist")
                setEmployees(res.data)
                setFilter(res)
                

            } catch(err){
                console.log(err)
            }
        };

        fetchAllEmployees();
    }, []);
    

    const columns = [
        {
            name: "Name",
            selector: row => row.s_name + ", " + row.f_name + " " + row.m_name,
            sortable: true
        },

        {
            name: "Present address",
            selector: row => row.c_address,
            sortable: true
        },

        {
            name: "Work email",
            selector: row => row.work_email,
            sortable: true
        },

        {
            name: "Contact number",
            selector: row => row.contact_num,
            sortable: true
        },

        {
            name: "Actions",
            selector: (row) => <a className="btn btn-active btn-xs btn-info" href="#">View</a>
        }
    ]

    const [records, setRecords] = useState(employees)

    function handleFilter(event) {
        const newData = employees.filter(row => {       
            return row.f_name.toLowerCase().includes(event.target.value.toLowerCase())
        })

        setRecords(newData)
    }

    return (
        <div>
            <div className="mb-5">
                <input type="text" className="input input-bordered w-full md:w-1/3" placeholder="Search by name..." onChange={ handleFilter }/>
            </div>


            <DataTable
                columns = {columns}
                data = { records }
                pagination
                highlightOnHover
            ></DataTable>
            
        </div>
    )

}

export default EmployeeListComponent
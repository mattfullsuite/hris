import React, { useState, useEffect } from "react"

const Directory = () => {
    const [directory, setDirectory] = useState()

    useEffect(() => {
        const fetchAllEmployees = async ()=> {
            try{
                const res = await axios.get("http://localhost:6197/showdirectory")
                setDirectory(res.data)
            } catch(err){
                console.log(err)
            }
        };
        fetchAllEmployees();
    }, []);

    return (
        <div>
            Bahala ka na sa frontend, Marco
        </div>
    )
}

export default Directory
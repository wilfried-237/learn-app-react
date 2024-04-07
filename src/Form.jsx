import { useState } from "react"

function Form(){

    const [name, setName] = useState("Guest")
    const [role, setRole] = useState("No Role")

    const handleNameChange = (e) =>{
        setName(e.target.value)
    }

    const handleRoleChange = (e) =>{
        setRole(e.target.value)
    }

    return(
        <div>
            <input placeholder="Enter Name" onChange={handleNameChange} type="text" />
            <br />
            <br />
            <input placeholder="Enter Role" onChange={handleRoleChange} type="text" />
            
            <h1>Name: {name}</h1>
            <h1>Role: {role}</h1>
        </div>
    )

}

export default Form
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
            <input onChange={handleNameChange} type="text" />
            

            <input onChange={handleRoleChange} type="text" />
            
            <h1>Name: {name}</h1>
            <h1>Role: {role}</h1>
        </div>
    )

}

export default Form
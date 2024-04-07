import { useState } from "react"

function Form(){

    const [name, setName] = useState("Guest")
    const [role, setRole] = useState("No Role")
    const [town, setTown] = useState("")
    const [number, setNumber] = useState()
    const [status, setStatus] = useState("single")

    const handleNameChange = (e) =>{
        setName(e.target.value)
    }

    const handleRoleChange = (e) =>{
        setRole(e.target.value)
    }

    const handleTownChange = (e) =>{
        setTown(e.target.value)
    }

    const handleNumberChange = (e) =>{
        setNumber(e.target.value)
    }
    const handleStatusChange = (e) =>{
        setStatus(e.target.value)
    }

    return(
        <div>
            <input placeholder="Enter Name" onChange={handleNameChange} type="text" />
            <br />
            <br />
            <input placeholder="Enter Role" onChange={handleRoleChange} type="text" />
            <br />
            <br />
            <select value={town} onChange={handleTownChange}>
                <option value="">Your Town</option>
                <option value="Douala">Douala</option>
                <option value="Yaounde">Yaounde</option>
                <option value="Buea">Buea</option>
            </select>
            <br />
            <br />
            <input placeholder="Enter N° of Laptops" min={0} type="number" onChange={handleNumberChange} />
            <br />
            <br />
            <label htmlFor="status">
                <input type="radio" 
                value="single"
                checked = {status == "single"}
                onChange={handleStatusChange}/>
                Single
            </label>
            <label htmlFor="status">
                <input type="radio" 
                value="couple"
                checked = {status == "couple"}
                onChange={handleStatusChange}/>
                Couple
            </label>

            <h1>Name: {name}</h1>
            <h1>Role: {role}</h1>
            <h1>Town: {town}</h1>
            <h1>N° of laptops: {number}</h1>
            <h1>status: {status}</h1>
        </div>
    )

}

export default Form
import { useState } from "react"

function MyComponent(){
    
    const [name, setName] = useState("No Name")
    const [age, setAge] = useState(0)
    const [isEmployed, setIsEmployed] = useState(false)

    const updateName = () =>{
        setName("wilsweb")
    }

    const incrementAge = () => {
        setAge(age + 1)
    }

    const employed = () => {
        setIsEmployed(!isEmployed)
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
        
            <p>Name: {age}</p>
            <button onClick={incrementAge}>Set Name</button>
        
            <p>Employed: {isEmployed? "Yes" : "No"}</p>
            <button onClick={employed}>Toggle</button>
        </div>
    )
}

export default MyComponent
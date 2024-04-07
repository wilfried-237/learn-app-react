import { useState } from "react"

function Car(){
    const [car, setCar] = useState({
        year: 2024,
        make: "Ford",
        model: "Mustang"
    })

    const handleYear = (e) => {
        setCar(car => ({...car, year : e.target.value}))
    }
    const handleMake = (e) => {
        setCar(car => ({...car, make : e.target.value}))
    }
    const handleModel = (e) => {
        setCar(car => ({...car, model : e.target.value}))
    }


    return(
        <div>
            <h1>My Dream car is: {car.year} {car.make} {car.model}</h1>

            <input type="number" value={car.year}  onChange={handleYear} />
            <br />
            <br />
            <input type="text" value={car.make} onChange={handleMake} />
            <br />
            <br />
            <input type="text" value={car.model} onChange={handleModel} />
        </div>
    )
}

export default Car
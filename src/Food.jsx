import { useState } from "react"
function Food(){

    const [foods, setFoods] = useState(["apple", "banana"])
    const [newFood, setNewFood] = useState("")

    const handleNewFood = (e) =>{
        setNewFood(e.target.value)
    }
    const addNewFood = () =>{
        if(newFood !== ""){
            setFoods(f => [...f, newFood])
        setNewFood("")
        }
    }

    const deleteFood = (index) =>{
        setFoods(foods.filter((food, i) => i !== index))
    }

    return(
        <div>
            <ul>
                {foods.map((food, index) => <li onClick={() => deleteFood(index)} key={index}>{food}</li>)}
            </ul>

            <input type="text" value={newFood} onChange={handleNewFood} placeholder="Enter food" />
            <button onClick={addNewFood}>Add New Food</button>
        </div>
    )
}

export default Food
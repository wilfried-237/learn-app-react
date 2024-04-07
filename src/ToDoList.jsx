import { useState } from "react"
function ToDoList(){

    const [tasks, setTask] = useState([  "wash",
                                        "Brush",
                                        "Clean"])
    const [newTask, setNewTask] = useState("")

    const handleTaskChange = (e) =>{
        setNewTask(e.target.value)
    }

    const addTask = () =>{
        if(newTask !== ""){
            setTask(t => [...t, newTask])
            setNewTask("")
        }
        
    }

    const deleteTask = (index) =>{
        setTask(tasks.filter((task,i) => i !== index))
    }



    return(
        <div className="taskAppDiv">
            <h1>To Do List App</h1>
            <div className="addTask">
                <input type="text" value={newTask} placeholder="Enter New Task" onChange={handleTaskChange} />
                <button className="addTaskButton" onClick={addTask}>Add Task</button>
            </div>
            <div className="taskList">
                <ul>
                    {tasks.map((task, index)=>
                        <>
                        <li key={index}>{task} <button className="deleteButton" onClick={() => deleteTask(index)}>X</button></li>
                        
                        </>
                    )}
                </ul>
            </div>

        </div>
    )
}

export default ToDoList
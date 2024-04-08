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

    const moveUp = (index) =>{
        if(index > 0){
          const  newTaskMove = [...tasks];

        [newTaskMove[index], newTaskMove[index - 1]] = [newTaskMove[index - 1], newTaskMove[index]]
        setTask(newTaskMove)
    }
    }

    const moveDown = (index) =>{
        if(index !== tasks.length-1){
          const  newTaskMove = [...tasks];

        [newTaskMove[index], newTaskMove[index + 1]] = [newTaskMove[index + 1], newTaskMove[index]]
        setTask(newTaskMove)
    }
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
                        <li key={index}>
                            <p>{task}</p> 
                        <>
                        <button className="deleteButton" onClick={() => deleteTask(index)}>X</button>
                        <button className="moveButton" onClick={() => moveUp(index)}>Up</button>
                        <button className="moveButton" onClick={() => moveDown(index)}>Down</button>
                        </>
                        </li>

                        
                        </>
                    )}
                </ul>
            </div>

        </div>
    )
}

export default ToDoList
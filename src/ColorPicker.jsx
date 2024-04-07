import { useState } from "react"
function ColorPicker(){

    const [color, setColor] = useState("#FF0000")

    const handleColorChange = (e) =>{
        setColor(e.target.value)
    }

    return(
        <div>
            <h1 style={{color: color, textShadow: "1px 1px 5px hsl(0, 0%, 50%)"}}>Color Picker</h1>
            <div className="colored-div" style={{backgroundColor: color}}>
                <h2>Selected Color: {color}</h2>
            </div>
            <h2>Select a color:</h2>
            <input type="color" value={color} onChange={handleColorChange} />
            <h3>{color}</h3>
        </div>
    )
}

export default ColorPicker
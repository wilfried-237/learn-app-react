import ComponentD from "./ComponentD"

const ComponentC = () => {
  return (
    <div className="box">
        <p>ComponentC</p>
        <ComponentD />
    </div>
  )
}

export default ComponentC
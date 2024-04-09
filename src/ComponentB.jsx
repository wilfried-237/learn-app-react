import ComponentC from "./ComponentC"

const ComponentB = () => {
  return (
    <div className="box">
      <p>ComponentB</p>
      <ComponentC />
    </div>
  )
}

export default ComponentB
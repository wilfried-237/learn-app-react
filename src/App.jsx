// import Card from "./Card/Card.jsx"
// import Header from "./Header.jsx"
// import Footer from "./Footer.jsx"
// import List from "./List.jsx"
// import Button from "./Button.jsx"
// import MyComponent from "./MyComponent.jsx";
// import Counter from "./Counter.jsx";
// import Form from "./Form"
// import ColorPicker from "./ColorPicker"
// import Car from "./Car"
// import Food from "./Food"
import MyComponent from './MyComponent';
import ToDoList from "./ToDoList";

function App() {

  // const developers = [{key: 1, name:"Nik", role: "PHP Developer"}, 
  //                     {key: 2, name:"Dan Lock", role: "Django Developer"},
  //                     {key: 3, name: "Zain Dev", role: "React Developer"}];
  
  // const devops = [{key: 4, name:"Leo", role: "PHP Developer"}, 
  //                     {key: 5, name:"Vanista", role: "Django Developer"},
  //                     {key: 6, name: "Bryan", role: "React Developer"}];


  // const handleClick = (e) => e.target.textContent = "Just Clicked";


  

  return(
    <>

      <ToDoList />

      {/* <Header />
      <List lists={developers} />
      <List lists={devops} />
      <List />
      <Card name="Wilfried" role="PHP Developer" />  
      <Card name="Nji Daniel" role="Django Developer" />  
      <Card name="Maaz Gig" role="React Developer" />  
      <Card />
      <Card />
      <Footer />    */}
    </>
  )
}

export default App

import React from 'react';
import './App.css';
import Accordion from "./Components/Accordion";
import {Rating} from "./Components/Rating";




function App() {
  console.log("App rendered");
  return (
    <div className="App">
        <AppTitle title={"This is APP component"}/>
        <AppTitle title={"My friends"}/>

        <p>Article 1</p>
        <Rating value ={2}/>
        <Accordion titleValue={"Menu"} collapsed = {true}/>
        <Accordion titleValue={"Users"} collapsed = {true} />
        <p>Article 2</p>
        <Rating value ={0}/>
        <Rating value ={1}/>
        <Rating value ={2}/>
        <Rating value ={3}/>
        <Rating value ={4}/>
        <Rating value ={5}/>
    </div>
  );
}



type PageTitlePropsType= {
    title : string;
}

function AppTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;

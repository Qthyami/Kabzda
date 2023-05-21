import React from "react";

type AccordionPropsType = {
    titleValue: string;
    collapsed : boolean;
}
function  Accordion (props: AccordionPropsType) {
    console.log("Accordion rendered");
    if (props.collapsed === true ) {
        return (

            <div>
                <AccordionTile title={props.titleValue}/>
            </div>
        )
    }else {
        return (
            <div>
                <AccordionTile title={props.titleValue}/>
                <AccordionBody/>
            </div>

        )
    }
}
type AccordionTileType ={
    title: string;
}

const AccordionTile=(props: AccordionTileType )=>{

    console.log("AccordionTile rendering")
    return   (
        <h3> {props.title}</h3>)
}


const AccordionBody=(props:any)=>{
    console.log("AccordionBody rendering")
    return ( <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>)
}
const AccordionCollapsed =(props:any ) =>{
    if (props.collapsed = true){
        return (
            <div>
                <AccordionTile title={props.titleValue}/>
            </div>
        )
    } else return (
        <div>
            <AccordionTile title={props.titleValue}/>
            <AccordionBody/>
        </div>
    )
}

export default Accordion;
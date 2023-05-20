import React from "react";


function  Accordion (props: any) {
    console.log("Accordion rendered");
    return (

        <div>

            <AccordionTile title={props.titleValue}/>
            <AccordionBody/>
        </div>
    )
}
const AccordionTile=(props:any)=>{

    console.log("AccordionTile rendering")
    return(props.title)
}
const AccordionBody=(props:any)=>{
    console.log("AccordionBody rendering")
    return ( <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>)
}
export default Accordion;
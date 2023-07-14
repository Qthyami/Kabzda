import React from "react";

type ItemType = {
    title: string;
    value: any;
};

export type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
    onChange: () => void;
    items: Array<ItemType>;
    onClick: (value: any) => void;
};

function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendered");

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={props.onChange} />
            {props.collapsed === false && (
                <AccordionBody items={props.items} onClick={props.onClick} />
            )}
        </div>
    );
}

export type AccordionTitlePropsType = {
    title: string;
    onClick: () => void;
};

export function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.onClick}>{props.title}</h3>;
}

type AccordionBodyPropsType = {
    items: ItemType[];
    onClick: (value: any) => void;
};

export function AccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody rendering");
    return (
        <ul>
            {props.items.map((t, index) => (
                <li onClick={() => props.onClick(t.value)} key={t.value}>
                    {t.title}
                </li>
            ))}
        </ul>
    );
}

export default Accordion;

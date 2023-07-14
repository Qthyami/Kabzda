import React, { useReducer } from 'react';
import { reducer } from './Reducer';

export type AccordionPropsType = {
    titleValue: string;
};

type StateType = {
    collapsed: boolean;
};

const AccordionTitle = (props: { titleValue: string; onClick: () => void }) => {
    return <h3 onClick={props.onClick}>{props.titleValue}</h3>;
};

const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
};

export const UncontrolledAccordion = (props: AccordionPropsType) => {
    const [state, dispatch] = useReducer(reducer, { collapsed: false });

    const toggleAccordion = () => {
        dispatch({ type: 'TOGGLE_COLLAPSED' });
    };

    return (
        <div>
            <AccordionTitle titleValue={props.titleValue} onClick={toggleAccordion} />
            {!state.collapsed && <AccordionBody />}
        </div>
    );
};

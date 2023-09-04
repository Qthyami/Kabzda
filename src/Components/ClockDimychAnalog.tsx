import React from 'react';
import styles from "./ClockDimychAnalog.module.css"
export type ClockDimychAnalogPropsType = {
date:Date
}
export const ClockDimychAnalog = (props:ClockDimychAnalogPropsType) => {
const seconds = props.date.getSeconds()
const minutes= props.date.getMinutes();
const hours= props.date.getHours();

    const secondsStyle = {
        transform: `rotate(${seconds * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${minutes * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${hours * 30}deg)`
    };

    return (
        <div className={(styles.clock)}>
            <div className={(styles['analog-clock'])}>
                <div className={(styles['dial'], styles['seconds'])} style={secondsStyle} />
                <div className={(styles['dial'], styles['minutes'])} style={minutesStyle} />
                <div className={(styles['dial'], styles['hours'])} style={hoursStyle} />
            </div>
        </div>
    );

}


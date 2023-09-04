import React, { useEffect, useState } from 'react';
import { ClockDimychAnalog } from './ClockDimychAnalog';

export type propsType = {
    mode?: 'digital' | 'analog';
};

export const ClockDimych: React.FC<propsType> = (props: propsType) => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date());
            console.log('Tick');
        }, 1000);

        return () => {
            clearInterval(intervalID);
        };
    }, []);

    const get2DigitsString = (num: number) => (num < 10 ? `0${num}` : num);

    return (
        <>
            {props.mode === 'digital' ? (
                <div>
                    <span>{get2DigitsString(date.getHours())}</span>:
                    <span>{get2DigitsString(date.getMinutes())}</span>:
                    <span>{get2DigitsString(date.getSeconds())}</span>
                </div>
            ) : (
                <ClockDimychAnalog date={date}/>
            )}
        </>
    );
};

import React, { useEffect, useState } from 'react';

export type propsType = {};

export const AnalogClock: React.FC<propsType> = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalID);
        };
    }, []);

    const secondsRotation = (date.getSeconds() / 60) * 360; // 60 секунд - 360 градусов
    const minutesRotation = ((date.getMinutes() * 60 + date.getSeconds()) / 3600) * 360; // 60 минут - 360 градусов

    return (
        <div className="analog-clock">
            <svg width="200" height="200">
                {/* Циферблат */}
                <circle cx="100" cy="100" r="90" fill="white" stroke="black" strokeWidth="2" />

                {/* Секундная стрелка */}
                <line
                    x1="100"
                    y1="100"
                    x2={100 + 60 * Math.sin((secondsRotation - 90) * (Math.PI / 180))}
                    y2={100 - 60 * Math.cos((secondsRotation - 90) * (Math.PI / 180))}
                    stroke="red"
                    strokeWidth="1"
                />

                {/* Минутная стрелка */}
                <line
                    x1="100"
                    y1="100"
                    x2={100 + 50 * Math.sin((minutesRotation - 90) * (Math.PI / 180))}
                    y2={100 - 50 * Math.cos((minutesRotation - 90) * (Math.PI / 180))}
                    stroke="black"
                    strokeWidth="3"
                />
            </svg>
        </div>
    );
};

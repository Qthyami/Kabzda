import React, { useEffect, useState } from 'react';

export type AnalogClockMinePropsType = {};

export const AnalogClockMine: React.FC<AnalogClockMinePropsType> = () => {
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
    const hoursRotation = ((date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds()) / 43200) * 360; // 12 часов - 360 градусов

    return (
        <div className="analog-clock">
            <svg width="200" height="200" transform="rotate(90 100 100)"> {/* Поворот на 90 градусов по часовой стрелке */}
                {/* Циферблат */}
                <circle cx="100" cy="100" r="90" fill="white" stroke="black" strokeWidth="2" />
                {/* Короткие черточки */}
                {Array.from({ length: 60 }).map((_, index) => {
                    const angle = (index * 360) / 60; // Угол для каждой черточки
                    const x1 = 100 + 85 * Math.sin((angle - 90) * (Math.PI / 180)); // Вычисление x1-координаты
                    const y1 = 100 - 85 * Math.cos((angle - 90) * (Math.PI / 180)); // Вычисление y1-координаты
                    const x2 = 100 + (index % 5 === 0 ? 70 : 80) * Math.sin((angle - 90) * (Math.PI / 180)); // Вычисление x2-координаты
                    const y2 = 100 - (index % 5 === 0 ? 70 : 80) * Math.cos((angle - 90) * (Math.PI / 180)); // Вычисление y2-координаты
                    return (
                        <line
                            key={index}
                            x1={x1}
                            y1={y1}
                            x2={x2}
                            y2={y2}
                            stroke="black"
                            strokeWidth={index % 5 === 0 ? 3 : 1} // Толщина черточек
                        />
                    );
                })}
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

                {/* Часовая стрелка */}
                <line
                    x1="100"
                    y1="100"
                    x2={100 + 40 * Math.sin((hoursRotation - 90) * (Math.PI / 180))}
                    y2={100 - 40 * Math.cos((hoursRotation - 90) * (Math.PI / 180))}
                    stroke="blue"
                    strokeWidth="5"
                />
            </svg>
        </div>
    );
};

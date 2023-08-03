import React, {useEffect, useState} from 'react';
import { Story, Meta } from '@storybook/react';
import { UncontrolledAccordion } from '../UncontrolledAccordion';
type argsType={



}

const createLoggedDate = () => {
    const date = new Date();
    console.log('Creating a new date instance:', date);
    return date;
};
const Clock=()=>{
    console.log("Clock reloaded")

    const date = createLoggedDate();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();


    const [secondsNow, setSecondsNow] = useState(seconds);
    const [minutesNow, setMinutesNow]=useState(minutes);
    const [hoursNow, setHoursNow]=useState(hours)

    useEffect(() => {
        const interval = setInterval(() => {
            setSecondsNow(prevSeconds => (prevSeconds + 1) % 60);
        }, 1000);

        return () => clearInterval(interval); // Очистка интервала при размонтировании компонента
    }, []);
    useEffect(() => {
        const interval = setInterval(() => {
            setMinutesNow(prevMinutes => (prevMinutes + 1) % 60);
        }, 60000);

        return () => clearInterval(interval); // Очистка интервала при размонтировании компонента
    }, []);
    useEffect(() => {
        const interval = setInterval(() => {
            setHoursNow(prevHours => (prevHours + 1) % 24);
        }, 3600000);

        return () => clearInterval(interval); // Очистка интервала при размонтировании компонента
    }, []);


    const formattedHours = hoursNow < 10 ? `0${hoursNow}` : hoursNow;
    const formattedMinutes = minutesNow < 10 ? `0${minutesNow}` : minutesNow;
    const formattedSeconds = secondsNow < 10 ? `0${secondsNow}` : secondsNow;
    useEffect(() => {
            const restartInterval = setInterval(() => {

                if (formattedHours  === 23 && formattedMinutes === 59 && formattedSeconds === 59) {
                    window.location.reload(); // Перезапуск компоненты
                    console.log()
                }
            }, 1000);
        }, [formattedHours,formattedMinutes,formattedSeconds  ]
    )




    return (
        <h1>{formattedHours} : {formattedMinutes} : {formattedSeconds}  </h1>
    )
}

export default {
    title: 'Components/Clock',
    component: Clock,
} as Meta;


const Template: Story<argsType> = (args:argsType) => <Clock {...args} />;

export const Default = Template.bind({});
Default.args = {
    titleValue: 'DeathClock',
};

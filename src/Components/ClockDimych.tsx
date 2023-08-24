import React, {useEffect, useState} from 'react';
export type propsType ={

}
export const ClockDimych = (props:propsType) => {
    const [date,setDate]=useState(new Date())
    useEffect(()=>{
       const intervalID= setInterval(()=>{
            setDate(new Date());
            console.log("Tick")
        },1000)
        return ()=>{ //возвращает ЮзЭффект колбэк, который запуститься только при
            //размонтировке компоненты
clearInterval(intervalID)
        }
    },[])  //пустой массив, потому что хотим, чтобы 1 раз запустился а дальше тикал сам
    const get2DigitsString = (num:number)=>num<10 ? `0${num}`: num;
    return (
        <div>
            <span>{get2DigitsString(date.getHours())}</span>
            :
            <span>{get2DigitsString(date.getMinutes())}</span>
            :
            <span>{get2DigitsString(date.getSeconds())}</span>
        </div>
    );
};


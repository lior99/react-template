import React, { useEffect, useState } from 'react';
import './style.css';

function Timer() {
    const [time, setTime] = useState(null);

    const getTime = () => {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        const fullHours = hours < 10 ? `0${hours}` : hours;
        const fullMinutes = minutes < 10 ? `0${minutes}` : minutes;
        const fullSeconds = seconds < 10 ? `0${seconds}` : seconds;


        return `${fullHours}:${fullMinutes}:${fullSeconds}`;
    }


    useEffect(() => {
        const timeout = setTimeout(() => {
            const time= getTime();
            setTime(time);
        }, 1000);

        return () => {
            clearTimeout(timeout);
        }
    });

    return (
        <div className='container'>
            { time }
        </div>
    );
}

export default Timer;
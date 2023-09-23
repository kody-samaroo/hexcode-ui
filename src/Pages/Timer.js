import "../Styles/Timer.css";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Timer({ answer }) {
    const navigate = useNavigate();
    const [timer, setTimer] = useState(60);

    useEffect(() => {
        const clock = timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
        
        if (clock === false) { 
            navigate("/result", { state: {choice: "Time Out", answer: answer }})
        }

        return () => clearInterval(clock);
    }, [timer, answer, navigate])


    return (
        <div className="timer" style={ timer < 11 ? {color: "red", fontWeight: "bolder"} : {color: "black"}}>
            {timer}
        </div>
    )
}


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Timer({ answer }) {
    const navigate = useNavigate();
    const [timer, setTimer] = useState(99);

    useEffect(() => {
        const clock = timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
        
        // if (clock === false) { 
        //     navigate("/result", { state: {choice: "x", answer: answer }})
        // }

        return () => clearInterval(clock);
    }, [timer, answer, navigate])



    return (
        <div className="timer">
            <h2>{timer}</h2>
        </div>
    )
}

import React, { useState, useEffect } from "react";

const TokenTimer = ({ expirationTime, onTokenExpired }) => {
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining((prevTimeRemaining) => calculateTimeRemaining(prevTimeRemaining));
        }, 1000);

        return () => clearInterval(interval);
    });

    function calculateTimeRemaining() {
        const currentTime = Math.floor(Date.now() / 1000);
        const remainingTime = expirationTime - currentTime;

        if (remainingTime <= 0) {
            // Token has expired
            onTokenExpired();
            return { minutes: 0, seconds: 0 };
        }

        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;

        return { minutes, seconds };
    }
    const timerStyle = {
        color: "white",
    };

    return (
        <div style={timerStyle}>
            Token Expires In: {timeRemaining.minutes}m {timeRemaining.seconds}s
        </div>
    );
};

export default TokenTimer;

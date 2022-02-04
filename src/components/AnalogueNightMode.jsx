import React, { useEffect, useState } from 'react';
import "../Styles/analogue-night-mode.css";

export default function AnalogueNightMode() {

    const [date, setDate] = useState(new Date());

    function refreshClock() {
        setDate(new Date());
    }
    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);

    return <div id="analogue-clock">
        <div id="hour-hand" style={{ transform: `rotate(${date.getHours() * 30 + date.getMinutes() / 2}deg)`, }}></div>
        <div id="minute-hand" style={{
            transform: `rotateZ(${date.getMinutes() * 6}deg)`,
        }}></div>
        <div id="second-hand" style={{
            transform: `rotateZ(${date.getSeconds() * 6}deg)`,
        }}></div>
        <div id="dot"></div>

        <div id="dot-1" className="dot"></div>
        <div id="dot-2" className="dot"></div>
        <div id="dot-3" className="dot"></div>
        <div id="dot-4" className="dot"></div>
        <div id="dot-5" className="dot"></div>
        <div id="dot-6" className="dot"></div>
        <div id="dot-7" className="dot"></div>
        <div id="dot-8" className="dot"></div>
        <div id="dot-9" className="dot"></div>
        <div id="dot-10" className="dot"></div>
        <div id="dot-11" className="dot"></div>
        <div id="dot-12" className="dot"></div>
        <span id="s1" className="s-time">1</span>
        <span id="s2" className="s-time">2</span>
        <span id="s3" className="s-time">3</span>
        <span id="s4" className="s-time">4</span>
        <span id="s5" className="s-time">5</span>
        <span id="s6" className="s-time">6</span>
        <span id="s7" className="s-time">7</span>
        <span id="s8" className="s-time">8</span>
        <span id="s9" className="s-time">9</span>
        <span id="s10" className="s-time">10</span>
        <span id="s11" className="s-time">11</span>
        <span id="s12" className="s-time">12</span>
    </div>
}
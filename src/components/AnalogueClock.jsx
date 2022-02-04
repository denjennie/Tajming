import { useState, useEffect } from "react";

function AnalogueClock() {
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

  return (
    <div className="clockWrapper">
      <div className="analog_clock">
        <div
          className="hour_hand"
          style={{
            transform: `rotateZ(${date.getHours() * 30}deg)`,
          }}
        ></div>
        <div
          className="min_hand"
          style={{
            transform: `rotateZ(${date.getMinutes() * 6}deg)`,
          }}
        ></div>
        <div
          className="sec_hand"
          style={{
            transform: `rotateZ(${date.getSeconds() * 6}deg)`,
          }}
        ></div>

        <span className="twelve">12</span>
        <span className="one">1</span>
        <span className="two">2</span>
        <span className="three">3</span>
        <span className="four">4</span>
        <span className="five">5</span>
        <span className="six">6</span>
        <span className="seven">7</span>
        <span className="eight">8</span>
        <span className="nine">9</span>
        <span className="ten">10</span>
        <span className="eleven">11</span>
        <div className="logo">Tajming</div>
      </div>
    </div>
  );
}

export default AnalogueClock;

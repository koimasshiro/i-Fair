import React from "react";
import { useTimer } from "react-timer-hook";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";

// const Timer = ({ hours, minutes, seconds, completed }) => {
//     if (completed) {
//       // Render a complete state
//       return <Application />;
//     } else {
//       // Render a countdown
//       return (
//         <h1>
//           {hours}:{minutes}:{seconds}
//         </h1>
//       );
//     }
//   };

function Timer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div className="event-container">
      <img
        src="../../images/purple-bokeh-digital-business-background.jpg"
        className="event-img"
        alt=""
      />
      <Navbar />
      <div className="event">
        <h1 style={{ fontWeight: "700" }}>i-FAIR 3</h1>
        <h2 style={{ color: "white" }}>Official launch</h2>
        <h3>16 - 05 - 2023</h3>
        <div style={{ fontSize: "100px" }}>
          <span>{days}</span> : <span>{hours}</span> : <span>{minutes}</span> :
          <span> {seconds}</span>
        </div>
        <p>{isRunning ? "Running..." : "Not running"}</p>
        <p onClick={start}></p>
        <p onClick={pause}></p>
        <p onClick={resume}></p>
        <p
          onClick={() => {
            // Restarts to 1 week timer
            const time = new Date();
            time.setMinutes(time.getMinutes() + 10080);
            restart(time);
          }}
        ></p>
      </div>
      <div style={{ position: "fixed", bottom: "0", width: "100%" }}>
        <Footer />
      </div>
    </div>
  );
}

export default Timer;

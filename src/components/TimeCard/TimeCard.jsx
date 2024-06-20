import { useState } from "react";

const TimeCard = ({ title, date }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [time, setTime] = useState();

  const handleTime = (e) => {
    // console.log(e.target.value);
    localStorage.setItem("time", JSON.stringify(e.target.value));
    localStorage.setItem("date", JSON.stringify(date));
    setTime(e.target.value);
  };

  return (
    <div>
      <button onClick={() => setShowDetails(!showDetails)}>{title}</button>
      {showDetails && (
        <div>
          <div>
            <h5>Morning</h5>
            <button onClick={handleTime} value="11:00">
              11:00
            </button>
            <button onClick={handleTime} value="11:30">
              11:30
            </button>
          </div>
          <div>
            <h5>Afternoon</h5>
            <button onClick={handleTime} value="01:00">
              01:00
            </button>
            <button onClick={handleTime} value="02:30">
              02:30
            </button>
          </div>
          <div>
            <h5>Evening</h5>
            <button onClick={handleTime} value="08:00">
              08:00
            </button>
            <button onClick={handleTime} value="09:30">
              09:30
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export { TimeCard };

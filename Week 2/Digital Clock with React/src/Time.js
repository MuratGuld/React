import { useState } from "react";

const Time = () => {
  // A state is created to hold our time data
  const [Time, SetTime] = useState();

  // We update our data every second by adding the SetTime method, which changes the time data, into setInterval.
  setInterval(() => {
    const dateTime = new Date();
    SetTime(dateTime.toLocaleTimeString());
  }, 1000);

  // We return our Time date
  return <div>{Time}</div>;
};

export default Time;

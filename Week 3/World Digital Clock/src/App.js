// ANALYSIS SECTION
// =================
// We use a React project to work on component basis.
// We use useState as the data model.
// With the useState structure, we keep our model in App.js.

import Clock from "./Components/Clock";
import City from "./Components/City";
import React, { useState } from "react";

export default function App() {
  // We use useState to keep uor datas
  const [time, setTime] = useState();
  const [city, setCity] = useState();

  setInterval(() => {
    setTime(
      new Date().toLocaleTimeString("en-US", {
        timeZone: city,
        timeStyle: "medium",
        hourCycle: "h23",
      })
    );
  }, 1000);

  return (
    <React.Fragment>
      {/* Clock Fragment */}
      <Clock time={time} />
      {/* City Fragment */}
      <City city={city} setCity={setCity}/>
    </React.Fragment>
  );
}

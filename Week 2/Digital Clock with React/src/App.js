import Time from "./Time";
import "./App.css";

// ANALYSIS SECTION
//=================
// We create a time component.
// In this component, we keep our data as state.
// We use a setInterval method inside the component.
// SetInterval runs every second and every time it runs, it equals the value of our state data to the current time.
// we return this state in Time component.
// We import our Time component into App.js.
// We return our Time component in App.js.

function App() {
  // We call our Time component
  return <Time />;
}

export default App;

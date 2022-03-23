// ANALYSIS SECTION
// =================
// We use a React project to work on component basis.
// We create the relevant components and import them into App.js.
// With Fetch API, we obtain our data asynchronously.
// We transfer our data to PersonList component with props.
// In the PersonList component, we show our data with a table.
// We send person and setPerson as props to our AddPerson component.
// In the AddPerson component, we add the data from the inputs to the person useState.
// We add this person variable to our API with the Fetch API - POST operation.

import UpdatePerson from "./Components/UdatePerson";
import ShowPerson from "./Components/ShowPerson";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/update/:personID" element={<UpdatePerson />} />
          <Route path="/show/:personID" element={<ShowPerson />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

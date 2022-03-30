// ANALYSIS SECTION
// =================
// We use a React project to work on component basis.
// In App.js, we set page orientations for routers and show and update processes.
// We obtain the personnel list related to Fetch API in the Service folder.
// Home.js is our homepage. Here we have PersonList and AddPerson components.
// We send person and setPerson as props to our AddPerson component.
// In the AddPerson component, we add the data from the inputs to the person useState.
// In the PersonList component, we show our data with a table.
// We can switch to show and update pages via Links within the PersonList component.
// When switching to Show and update pages, we transfer the id of the person selected with the Param feature to a lower layer.
// In the update and show layers, we filter the contact list we obtained from the service folder with personID, find the relevant person and take the necessary actions.

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

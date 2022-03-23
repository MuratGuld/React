// ANALYSIS SECTION
// =================
// We use a React project to work on component basis.
// We download the react router package and import it into App.js.
// We create the relevant components and import them into App.js.
// A navbar with links is created in App.js (All codes are in Router tag).
// With route tags, we determine the components that the links point to.

// We import react-router
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      {/* We specify links in a nav tag. */}
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav">
              <li class="nav-item">
                {/* Home Link */}
                <Link className="nav-link" to="/">
                  HOME
                </Link>
              </li>
              <li class="nav-item">
                {/* About Link */}
                <Link className="nav-link" to="/about">
                  ABOUT
                </Link>
              </li>
              <li class="nav-item">
                {/* Contact Link */}
                <Link className="nav-link" to="/contact">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* We specify the components that links point to in the Route tags. */}
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  );
}

export default App;

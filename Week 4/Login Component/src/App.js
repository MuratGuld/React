// ANALYSIS SECTION
// =================
// We use a React project to work on component basis.
// We use useState as the data model.

import { useState } from "react";
import React from "react";
import Form from "./Components/Form";
import PersonalInformation from "./Components/PersonalInformation";

function App() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    repeatedPassword: "",
    isFormSubmitted: false,
  });

  return (
    <React.Fragment>
      <Form setData={setData} data={data} />
      <PersonalInformation data={data} />
    </React.Fragment>
  );
}

export default App;

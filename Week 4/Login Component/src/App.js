// ANALYSIS SECTION
// =================
// We use a React project to work on component basis.
// We use useState as the data model that keeps our personal informations.
// We have 2 components, Form and PersonalInformation.
// We get our data in Form component and display it in the PersonalInformation component.

import { useState } from "react";
import React from "react";
import Form from "./Components/Form";
import PersonalInformation from "./Components/PersonalInformation";

function App() {
  // Data model that keeps our personal informations.
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    repeatedPassword: "",
    isFormSubmitted: false,
  });

  return (
    <React.Fragment>
      {/* Form component */}
      <Form setData={setData} data={data} />
      {/* PersonalInformation component */}
      <PersonalInformation data={data} />
    </React.Fragment>
  );
}

export default App;

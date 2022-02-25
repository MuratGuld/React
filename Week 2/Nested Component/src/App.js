// ANALYSIS SECTION
// =================
// We use a React project to work on component basis.
// We use the data.json file as the data model.
// With the useState structure, we keep our model in App.js.
// We create a PersonList fragment that contains Person and its details (ChildrenList,FriendList).
// We create FriendList and ChildList fragments for each Person.
// These FriendList and ChildrenList fragments contain Child and Friend information of each person as fragments.
// In accordance with this nested component structure, we send and use our data from App.js to the bottom fragment (from top to bottom).

import React, { useState } from "react";
import data from "./data.json";
import PersonList from "./components/PersonList"

function App() {

  // We assign our data to a variable with useState.
  const [List, setList] = useState(data);

  // PersonList Fragment containing Persons and takes data as a prop.
  return (
    <React.Fragment>
      <PersonList List={List}/>
    </React.Fragment>
  );
}

export default App;

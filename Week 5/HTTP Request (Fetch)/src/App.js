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

import React, { useEffect, useState } from "react";
import AddPerson from "./Components/AddPerson";
import PersonList from "./Components/PersonList";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const [personList, setPersonList] = useState([]);
  // model person data to add new person
  const [person, setPerson] = useState({
    id: null,
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    about: null,
  });

  // useEffect
  useEffect(() => {
    getPersonList();
  }, [personList]);

  const getPersonList = async () => {
    const response = await fetch("http://localhost:3000/employee");
    const data = await response.json();
    setPersonList(data);
  };

  // A method is created to add a new contact
  const addPerson = async () => {
    const myData = {
      id: personList[personList.length],
      firstName: person.firstName,
      lastName: person.lastName,
      email: person.email,
      password: person.password,
      about: person.about,
    };

    // We send the new person to our data with the Fetch Api post method.
    const result = await fetch("http://localhost:3000/employee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myData),
    });
  };

  return (
    <Container>
      <Row className="rows">
        <Col className="columns" lg={5}>
          {/* AddPerson */}
          <AddPerson
            personList={personList}
            addPerson={addPerson}
            person={person}
            setPerson={setPerson}
          />
        </Col>
        <Col className="columns" lg={7}>
          {/* PersonList */}
          <PersonList personList={personList} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import AddPerson from "./AddPerson";
import PersonList from "./PersonList";
import { Container, Row, Col } from "react-bootstrap";
// We import our service fetch api data here
import * as personListData from "../service/person.service";

const Home = () => {
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
    // We get the personel list from service folder (with fetch api in servise)
    const personData = await personListData.getPersonService();
    setPersonList(personData);
  };

  // A method is created to add a new contact
  const addPerson = async (pPerson) => {
    // We send the new person to our data with the Fetch Api post method.
    const result = await fetch("http://localhost:3000/employee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pPerson),
    });
  };

  const deletePerson = async (personID) => {
    const result = await fetch(`http://localhost:3000/employee/${personID}`, {
      method: "DELETE",
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
          <PersonList personList={personList} deletePerson={deletePerson} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

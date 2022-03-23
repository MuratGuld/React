import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as personListData from "../service/person.service";

const UpdatePerson = () => {
  // const myData = { ...person, firstName: "MARTIX" };
  // return <BsPencilSquare onClick={() => updatePerson(personID, myData)} />;
  const { personID } = useParams();
  const [person, setPerson] = useState([]);

  useEffect(() => {
    getPerson();
  }, []);

  const getPerson = async () => {
    const personData = await personListData.getPersonService();
    const filteredPerson = personData.find((person) => person.id == personID);
    setPerson(filteredPerson);
  };

  const updatePerson = async (person) => {
    const result = await fetch(`http://localhost:3000/employee/${person.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(person),
    });
  };

  console.log(person);
  return (
    <div>
      <h1>UPDATE PERSON</h1>
      <form>
        <input
          required
          type="text"
          placeholder="First Name"
          value={person.firstName}
          onChange={(e) => setPerson({ ...person, firstName: e.target.value })}
        />
        <br />
        <input
          required
          type="text"
          placeholder="Last Name"
          value={person.lastName}
          onChange={(e) => setPerson({ ...person, lastName: e.target.value })}
        />
        <br />
        <input
          required
          type="email"
          placeholder="Email"
          value={person.email}
          onChange={(e) => setPerson({ ...person, email: e.target.value })}
        />
        <br />
        <input
          required
          type="password"
          placeholder="Password"
          value={person.password}
          onChange={(e) => setPerson({ ...person, password: e.target.value })}
        />
        <br />
        <textarea
          required
          rows="5"
          cols="23"
          value={person.about}
          onChange={(e) => setPerson({ ...person, about: e.target.value })}
        ></textarea>
        <br />
        <button type="submit" onClick={() => updatePerson(person)}>
          <Link to="/">Update</Link>
        </button>
        <button>
          <Link to="/">Return</Link>
        </button>
      </form>
    </div>
  );
};

export default UpdatePerson;

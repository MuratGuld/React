import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as personListData from "../service/person.service";

const UpdatePerson = () => {
  const { personID } = useParams();
  const [person, setPerson] = useState([]);

  useEffect(() => {
    getPerson();
  }, []);

  const getPerson = async () => {
    // We reach (via fetch api) personnel list and find the relevant person from id (param). Then we set this person to person (useState)
    const personData = await personListData.getPersonService();
    const filteredPerson = personData.find((person) => person.id == personID);
    setPerson(filteredPerson);
  };

  // We update person
  const updatePerson = async (person) => {
    const result = await fetch(`http://localhost:3000/employee/${person.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(person),
    });
  };

  return (
    <div>
      <h1>UPDATE PERSON</h1>
      <form>
        <input
          required
          type="text"
          placeholder="First Name"
          value={person.firstName}
          // On evry change we update our relevant data
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
          {/* Return to home page */}
          <Link to="/">Update</Link>
        </button>
        <button>
          {/* Return to home page */}
          <Link to="/">Return</Link>
        </button>
      </form>
    </div>
  );
};

export default UpdatePerson;

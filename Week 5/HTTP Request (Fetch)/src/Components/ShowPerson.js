import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as personListData from "../service/person.service";

const ShowPerson = () => {
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

  console.log(person);
  return (
    <div>
      <h1>PERSON DETAIILS</h1>
      <h4>First Name : {person.firstName}</h4>
      <h4>Last Name : {person.lastName}</h4>
      <h4>Email : {person.email}</h4>
      <h4>Password : {person.password}</h4>
      <h4>About : {person.about}</h4>
      <button>
        <Link to="/">Return</Link>
      </button>
    </div>
  );
};

export default ShowPerson;

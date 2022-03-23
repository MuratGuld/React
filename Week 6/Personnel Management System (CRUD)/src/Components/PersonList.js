import React from "react";
import DeletePerson from "./DeletePerson";
import { Link } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";

const PersonList = ({ personList, deletePerson, updatePerson }) => {
  const columns = personList[0] && Object.keys(personList[0]);

  return (
    <div>
      <h1>PERSON LIST</h1>
      <table>
        <thead>
          <tr>{personList[0] && columns.map((column) => <th>{column}</th>)}</tr>
        </thead>
        <tbody>
          {personList.map((person) => (
            <tr>
              {columns.map((column) => (
                <td>{person[column]}</td>
              ))}
              <td>
                <Link to={`/show/${person.id}`}>
                  <AiFillEye />
                </Link>
              </td>
              <td>
                <Link to={`/update/${person.id}`}>
                  <BsPencilSquare />
                </Link>
              </td>
              <td>
                <DeletePerson
                  personID={person.id}
                  deletePerson={deletePerson}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PersonList;

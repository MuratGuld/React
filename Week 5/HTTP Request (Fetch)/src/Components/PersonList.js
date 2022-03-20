import React from "react";

const PersonList = ({ personList }) => {
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PersonList;

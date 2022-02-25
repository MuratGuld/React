import React from "react";

function Person({ person }) {
  return (
    <div>
      <h2 className="bg-danger text-white p-2">PERSON</h2>
      <img src={person.avatar} alt={person.first_name} />
      <p>Firstname: {person.first_name}</p>
      <p>Lastname: {person.last_name}</p>
      <p>Adress: {person.address}</p>
      <p>Salary: {person.salary}</p>
      <p>Gerder: {person.gender[0]}</p>
      <p>Email: {person.email}</p>
    </div>
  );
}

export default Person;

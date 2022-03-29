import { AiFillDelete } from "react-icons/ai"; // npm i react-icons
import React from "react";

const DeletePerson = ({ personID, deletePerson }) => {
  return <AiFillDelete onClick={() => deletePerson(personID)} />;
};

export default DeletePerson;

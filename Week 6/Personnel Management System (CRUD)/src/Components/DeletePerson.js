import { AiFillDelete } from "react-icons/ai";
import React from "react";

const DeletePerson = ({ personID, deletePerson }) => {
  return <AiFillDelete onClick={() => deletePerson(personID)} />;
};

export default DeletePerson;

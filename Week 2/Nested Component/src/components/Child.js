import React from "react";

function Child(props) {
  return (
    <div className="col-4 px-4">
      <img className="w-50" src={props.child.avatar} alt={props.child.firstName} />
      <p>Firstname: {props.child.firstName}</p>
      <p>Gender: {props.child.gender[0]}</p>
      <p>Birthday: {props.child.birthday}</p>
    </div>
  );
}

export default Child;

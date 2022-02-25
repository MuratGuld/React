import React from "react";

function Friend(props) {
  return (
    <div className="col-4 px-4">
      <img className="w-50" src={props.friend.avatar} alt={props.friend.firstName} />
      <p>Firstname: {props.friend.firstName}</p>
      <p>Gender: {props.friend.gender[0]}</p>
      <p>Birthday: {props.friend.birthday}</p>
      <p>Phone: {props.friend.phone}</p>
    </div>
  );
}

export default Friend;
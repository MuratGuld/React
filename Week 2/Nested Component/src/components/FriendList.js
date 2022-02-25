import Friend from "./Friend";
import React from "react";

function FriendList(props) {
  // We turn with map to display friends of a person
  return props.FriendList.map((friend, index) => (
    <Friend key={index} friend={friend} />
  ));
}

export default FriendList;

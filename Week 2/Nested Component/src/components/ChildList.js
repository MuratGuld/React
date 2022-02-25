import Child from "./Child";
import React from "react";

function ChildList(props) {
  // We turn with map to display children of a person
  return props.ChildList.map((child, index) => (
    <Child key={index} child={child} />
  ));
}

export default ChildList;

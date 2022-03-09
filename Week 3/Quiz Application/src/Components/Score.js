import React from "react";

export default function Score({ trueScore, falseScore }) {
  return (
    <React.Fragment>
      <div>True : {trueScore}</div>
      <div>False : {falseScore}</div>
    </React.Fragment>
  );
}

import React from "react";

function SeferSorgula({
  setFromCity,
  setToCity,
  setDepartTime,
  getConnection,
}) {
  return (
    <div>
      <form
        className="m-4"
        onSubmit={(e) => {
          e.preventDefault();
          getConnection(e);
        }}
      >
        <input type="text" onChange={(e) => setFromCity(e.target.value)} />
        <input type="text" onChange={(e) => setToCity(e.target.value)} />
        <input
          type="datetime-local"
          onChange={(e) => setDepartTime(e.target.value)}
        />
        <button type="submit">Sorgula</button>
      </form>
    </div>
  );
}

export default SeferSorgula;

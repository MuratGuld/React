import React from "react";

const AddPerson = ({ addPerson, person, setPerson }) => {
  return (
    <div>
      <h1>ADD PERSON</h1>
      <form onSubmit={addPerson}>
        <input
          required
          type="text"
          name=""
          id=""
          placeholder="First Name"
          onChange={(e) => setPerson({ ...person, firstName: e.target.value })}
        />
        <br />
        <input
          required
          type="text"
          name=""
          id=""
          placeholder="Last Name"
          onChange={(e) => setPerson({ ...person, lastName: e.target.value })}
        />
        <br />
        <input
          required
          type="email"
          name=""
          id=""
          placeholder="Email"
          onChange={(e) => setPerson({ ...person, email: e.target.value })}
        />
        <br />
        <input
          required
          type="password"
          name=""
          id=""
          placeholder="Password"
          onChange={(e) => setPerson({ ...person, password: e.target.value })}
        />
        <br />
        <textarea
          required
          id=""
          name=""
          rows="5"
          cols="23"
          onChange={(e) => setPerson({ ...person, about: e.target.value })}
        ></textarea>
        <br />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddPerson;

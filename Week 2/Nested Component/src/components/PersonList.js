import Person from "./Person";
import ChildList from "./ChildList";
import FriendList from "./FriendList";
import React from "react";

function PersonList(props) {
  // We turn with map for each person in PersonList
  return props.List.map((person) => (
    <div className="container-fluid p-4">
      <div className="row">
        <div className="col-3">
          <Person key={person.id} person={person} />
        </div>
        <div className="col-9">
          <div className="row">            
            <h2 className="bg-danger text-white p-2">CHILDREN ({person.children.length})</h2>
            {/* ChildList Fragment */}
            <ChildList ChildList={person.children} />
          </div>
          <div className="row">
            <h2 className="bg-danger text-white p-2">FRIENDS ({person.friends.length})</h2>
            {/* FriendList Fragment */}
            <FriendList FriendList={person.friends} />
          </div>
        </div>
      </div>
    </div>
  ));
}

export default PersonList;

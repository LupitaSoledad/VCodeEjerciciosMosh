import React from "react";
import Button from "./button";

function Body({ user, index, onFireUsers }) {
  // users.forEach((element) => console.log(element.name));

  return (
    <div className="body">
      <div className="Date">
        <h5>
          {user.name}
          {" " + user.lastName}
        </h5>
        <h5>{user.userName}</h5>
        <h5>
          {user.name + "."}
          {user.lastName}@nox.com
        </h5>
      </div>

      <Button
        name={user.name}
        active={user.isActive}
        index={index}
        onFireUser={onFireUsers}
        id={user.id}
      />
    </div>
  );
}
export default Body;

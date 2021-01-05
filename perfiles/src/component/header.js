import React from "react";

function Header(picture) {
  console.log(picture.active);
  return (
    <div className="header">
      <h6>Profile</h6>

      <div>
        <img className="photo" src={picture.picture} alt="..." />
      </div>
    </div>
  );
}

export default Header;

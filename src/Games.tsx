import React from "react";
import Turboman from "./Turboman";

export default function Games() {
  var game = React.createElement("Turboman");

  return (
    <div id="Main" className="Games">
      <h1>Games</h1>

      <br />
      <hr style={{ "width": "90%" }} />
      <br />

      <Turboman />

      <br />
      <hr style={{ "width": "90%" }} />
      <br />
    </div>
  );
}

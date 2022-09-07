import React from "react";
import Turboman from "./Turboman";
import TurboFPS from "./TurboFPS";

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

      <iframe className="youtubeFrame shadow rounded" src="https://deadsimplechat.com/Vc3zaUSkv" />

      <br />
      <hr style={{ "width": "90%" }} />
      <br />

      <TurboFPS />

      <br />
      <hr style={{ "width": "90%" }} />
      <br />
    </div>
  );
}

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
      <h1>Type your best times below pls</h1>
      <h3>Practice 1 World Record - 7.00 Set by Flynn</h3>
      <h3>Practice 2 World Record - Unknown</h3>

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

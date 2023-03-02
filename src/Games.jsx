import React from "react";
import Turboman from "./Turboman";

export default function Games() {

  return (
    <div id="Main" className="Games">
      <h1>Games</h1>

      <span>We have ads now</span>

      <br />
      <hr style={{ "width": "90%" }} />
      <br />

      <Turboman />

      <br />
      <hr style={{ "width": "90%" }} />
      <br />

      <TurboFPS />

      <br />
      <hr style={{ "width": "90%" }} />
      <br /><br />

      <a href="https://micmacmoe.quinnthecoder.repl.co/">Link to Mic Mac Moe</a>
      <br />
      <button className="button" onClick={
        () => {
          var mmmFrame = document.getElementById("mmm");
          mmmFrame.src = mmmFrame.src;
        }
      }>Refresh</button>
      <br />
      <iframe id="mmm" className="youtubeFrame shadow rounded" src="https://micmacmoe.quinnthecoder.repl.co/" />

      <br />
      <hr style={{ "width": "90%" }} />
      <br />
      <iframe className="youtubeFrame shadow rounded" src="https://deadsimplechat.com/Vc3zaUSkv" />
    </div>
  );
}

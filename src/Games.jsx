import React from "react";
import Turboman from "./Turboman";

export default function Games() {

  return (
    <div id="Main" className="Games">
      <h1>Games</h1>

//       <InnerHTML html={ad} />
      <span>We have ads now</span>

      <br />
      <hr style={{ "width": "90%" }} />
      <br />

      <Turboman />

      <br />
      <hr style={{ "width": "90%" }} />
      <br />

      <iframe className="youtubeFrame shadow rounded" src="https://deadsimplechat.com/Vc3zaUSkv" />
    </div>
  );
}

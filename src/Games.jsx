import React from "react";
import Turboman from "./Turboman";
import TurboFPS from "./TurboFPS";

function Ad(){
  var atOptions = {
		'key' : '980183fb59fca582e2dd47d3773b4e5e',
		'format' : 'iframe',
		'height' : 90,
		'width' : 728,
		'params' : {}
	};
	<script type="text/javascript" src={"http" + (location.protocol === 'https:' ? 's' : '') + "://www.highperformancedisplayformat.com/980183fb59fca582e2dd47d3773b4e5e/invoke.js"}></script>
  return(
    <div></div>
  )
}

export default function Games() {
  var game = React.createElement("Turboman");

  return (
    <div id="Main" className="Games">
      <h1>Games</h1>
      <br></br>

      <Ad/>
    
    
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

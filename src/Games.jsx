import React from "react";
import Turboman from "./Turboman";
import InnerHTML from 'dangerously-set-html-content'

export default function Games() {
  var game = React.createElement("Turboman");

  const ad = `<script type="text/javascript">
	atOptions = {
		'key' : '980183fb59fca582e2dd47d3773b4e5e',
		'format' : 'iframe',
		'height' : 90,
		'width' : 728,
		'params' : {}
	};
</script>
<script type="text/javascript" src="https://www.highperformancedisplayformat.com/980183fb59fca582e2dd47d3773b4e5e/invoke.js"></script>`;

  return (
    <div id="Main" className="Games">
      <h1>Games</h1>

      <InnerHTML html={ad} />
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

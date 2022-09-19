import Youtube from "./Youtube";
// import InnerHTML from 'dangerously-set-html-content'

// export default function Other() {
//   const ad = `<script type="text/javascript">
// 	atOptions = {
// 		'key' : '980183fb59fca582e2dd47d3773b4e5e',
// 		'format' : 'iframe',
// 		'height' : 90,
// 		'width' : 728,
// 		'params' : {}
// 	};
// </script>
// <script type="text/javascript" src="https://www.highperformancedisplayformat.com/980183fb59fca582e2dd47d3773b4e5e/invoke.js"></script>`;


  return (
    <div id="Main" className="Other">
      <h1>Other</h1>
//       <InnerHTML html={ad}></InnerHTML>
      <hr style={{ "width": "90%" }} />
      <h2>Our Community</h2>
      <p>Lead Developer : Quinn</p>
      <p>Lead Artist : Flynn</p>
      <p>Artist and Map designer : Jacob</p>
      <h2>People that have decided that they want their name to be on Alloew : </h2>
      <p>Julian</p>
      <p>Zach</p>
      <br /><h3>Type in chat below if you want to have your name here!</h3>

      <br />
      <hr style={{ "width": "90%" }} />
      <br />

      <iframe className="youtubeFrame shadow rounded" src="https://deadsimplechat.com/Vc3zaUSkv" />

      <br />
      <hr style={{ "width": "90%" }} />
      <br />
    </div>
  );
}

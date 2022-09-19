import News from "./News";
// import InnerHTML from 'dangerously-set-html-content'

export default function Home() {
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
    <div className="Home" id="Main">
      <h1>Welcome To Alloew!</h1>
      <p>The website were we make things for fun!</p>
      <br />
//       <InnerHTML html={ad}></InnerHTML>
      <br />
      <hr style={{ "width": "90%" }} />
      <br />
      <br />
      <News />
      <br />
      <hr style={{ "width": "90%" }} />
      <br />
    </div>
  );
}

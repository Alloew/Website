import News from "./News";

export default function Home() {


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

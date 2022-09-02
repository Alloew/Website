function PBtn(props) {
  function changeVersion() {
    var frame = document.getElementById("turbomanFrame");
    frame.src = `/turboman/${props.version}/index.html`;
    frame.style.display = "flex";
    var verElem = document.getElementById("version");
    if (verElem) {
      verElem.innerText = `Turboman - ${props.version}`;
    }
  }
  return (
    <button onClick={changeVersion} id="pickButton" className="button">{props.version}</button >
  )
}

export default function Turboman() {
  return (
    <div className="Turboman">
      <h3 id="version"></h3>
      <iframe
        id="turbomanFrame"
        className="gameFrame"
        src={``}
        style={{ "display": "none" }}
      />
      <div className="versionPick">
        <h2>Pick a version (Turboman) (Right is newest, left is oldest)</h2>
        <PBtn version="A1.0" />
        <PBtn version="A2.0" />
        <PBtn version="A3.1" />
        <PBtn version="A3.2" />
        <PBtn version="A3.2.1" />
        <PBtn version="A3.3" />
        <PBtn version="B1.0" />
        <PBtn version="B1.1" />
        <PBtn version="B1.1.1" />
        <PBtn version="V1.0S1" />
        <PBtn version="V1.0S2" />
        <PBtn version="V1.0S2" />
        <PBtn version="V1.0S4" />
        <PBtn version="V1.0S4.1" />
        <PBtn version="V1.0S5" />
        <PBtn version="V2_B0.01" />
      </div>
    </div>
  );
}

export default function Nav() {
  window.onload = () => {
    if (localStorage.getItem("darkmode") === "false") {
      document.getElementsByTagName("html")[0].classList.toggle("light");
      var dl = document.getElementById("dark/light mode");
      dl.checked = true;
    }
  };

  function toggle() {
    document.getElementsByTagName("html")[0].classList.toggle("light");
    if (document.getElementsByTagName("html")[0].classList.contains("light")) {
      localStorage.setItem("darkmode", "false");
    } else {
      localStorage.setItem("darkmode", "true");
    }
  }

  return (
    <div id="Nav" className="Nav shadow">
      <a className="link" href="/">
        Home
      </a>
      <a className="link" href="/Games">
        Games
      </a>
      <a className="link" href="/Gallery">
        Gallery
      </a>
      <a className="link" href="/Other">
        Other
      </a>
      <label className="toggleMode">
        <input
          className="input"
          onClick={toggle}
          type="checkbox"
          name="dark/light mode"
          id="dark/light mode"
        />
        <div className="slider"></div>
      </label>
    </div>
  );
}

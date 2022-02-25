export default function GalleryItem(props) {
  function popup() {
    var background = document.createElement("div");
    background.className = "background";
    var main = document.createElement("div");
    var image = document.createElement("img");
    var download = document.createElement("a");
    var exit = document.createElement("button");
    exit.innerText = `✖`;
    exit.classList.add("x");
    download.classList.add("button");
    download.download = props.title;
    download.href = props.src;
    download.innerText = "Download";
    image.src = props.src;
    main.innerText = props.title;

    main.classList.add("previewItem");
    main.classList.add("shadow");

    main.appendChild(image);
    main.appendChild(download);
    main.appendChild(exit);

    document.body.appendChild(background);
    document.body.appendChild(main);

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        main.remove();
        background.remove();
      }
    });

    background.addEventListener("click", () => {
      main.remove();
      background.remove();
    });

    exit.addEventListener("click", () => {
      main.remove();
      background.remove();
    });
  }
  return (
    <div onClick={popup} className="shadow item">
      <img src={props.src} />
      {props.title}
    </div>
  );
}

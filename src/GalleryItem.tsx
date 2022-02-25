export default function GalleryItem(props: any) {
  function popup() {
    var main = document.createElement("div");
    var image = document.createElement("img");
    var download = document.createElement("a");
    var exit = document.createElement("button");
    var mouseOver = false;
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

    document.body.appendChild(main);

    main.addEventListener("mouseenter", () => {
      mouseOver = true;
      console.log(mouseOver);
    });
    main.addEventListener("mouseleave", () => {
      mouseOver = false;
    });

    main.addEventListener("mousedown", () => {
      if (mouseOver === false) {
        main.remove();
      }
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        main.remove();
      }
    });

    exit.addEventListener("click", () => {
      main.remove();
    });
  }
  return (
    <div onClick={popup} className="shadow item">
      <img src={props.src} />
      {props.title}
    </div>
  );
}

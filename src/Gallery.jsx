import GalleryItem from "./GalleryItem";

export default function Gallery() {
  return (
    <div id="Main" className="galleryMain">
      <h1>Gallery</h1>
      <br />
      <hr style={{ "width": "90%" }} />
      <br />
      <div className="Gallery">
        <GalleryItem src="/art/Colored Homer.png" title="Colored Homer" />
        <GalleryItem src="/art/Colorless Homer.png" title="Colorless Homer" />
        <GalleryItem src="/art/Homer is Fine.png" title="Homer is fine" />
        <GalleryItem
          src="/art/homer pregnant with homer inside homers eyes that is throwing up homer thats going to fight homer.png"
          title="homer pregnant with homer inside homers eyes that is throwing up homer thats going to fight homer"
        />
        <GalleryItem src="/art/Fred Simmer.png" title="Fred Simmer" />
        <GalleryItem src="/art/Retro Homer.png" title="Retro Homer" />
      </div>
    </div>
  );
}

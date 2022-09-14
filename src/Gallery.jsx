import GalleryItem from "./GalleryItem";
import InnerHTML from 'dangerously-set-html-content'

export default function Gallery() {
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
    <div id="Main" className="galleryMain">
      <br /><br />
      <InnerHTML html={ad}></InnerHTML>
      <br />
      <h1>Simpson Sells</h1>
      <span>If you don't buy this, then your a SIMP son.</span>
      <span>(Use light mode for authentic experience)</span>
      <GalleryItem img="../art/Colorless Homer.png"/>
      <GalleryItem img="../art/Homer is Fine.png"/>
      <GalleryItem img="../art/Colored Homer.png"/>
      <GalleryItem img="../art/Retro Homer.png"/>
      <GalleryItem img="../art/Fred Simmer.png"/>
      <GalleryItem img="../art/homer pregnant with homer inside homers eyes that is throwing up homer thats going to fight homer.png"/>
    </div>
  );
}

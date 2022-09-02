export default function GalleryItem(props){
    return(
        <div className="galleryFrame">
            <div className="galleryItem">
                <img src={props.img} alt={props.name} />
            </div>
            <button>Download</button>
        </div>
    )
}
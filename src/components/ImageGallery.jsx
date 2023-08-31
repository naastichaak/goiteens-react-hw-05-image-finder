import ImageGalleryItem from "./ImageGalleryItem";

function ImageGallery({ images, onOpen }) {
  return (
    <ul className="ImageGallery">
      {images.map((image) => (
        <ImageGalleryItem
          webformatURL={image.webformatURL}
          key={image.id}
          image={image}
          onOpen={onOpen}
        />
      ))}
    </ul>
  );
}

export default ImageGallery;

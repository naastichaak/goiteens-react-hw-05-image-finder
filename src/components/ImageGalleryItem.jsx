function ImageGalleryItem({ image, onOpen }) {
  return (
    <li
      className="ImageGalleryItem"
      onClick={() => onOpen(image.largeImageURL)}
    >
      <img src={image.webformatURL} className="ImageGalleryItem-image" />
    </li>
  );
}

export default ImageGalleryItem;

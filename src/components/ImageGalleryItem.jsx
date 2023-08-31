function ImageGalleryItem({ image, onOpen }) {
  return (
    <li className="ImageGalleryItem" onClick={() => onOpen(image)}>
      <img src={image.webformatURL} className="ImageGalleryItem-image" />
    </li>
  );
}

export default ImageGalleryItem;

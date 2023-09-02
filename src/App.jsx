import axios from "axios";
import { useState, useEffect } from "react";

import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Loader from "./components/Loader";
import Modal from "./components/Modal";
import Button from "./components/Button";

function App() {
  const [images, setImages] = useState([]);
  const [activeImage, setActiveImage] = useState(null);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalImages, setTotalImages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query === "") {
      return;
    }
    setLoading(true);
    setError(null);
    axios
      .get("https://pixabay.com/api/", {
        params: {
          q: query,
          page,
          per_page: 12,
          image_type: "photo",
          orientation: "horizontal",
          key: "37137094-7c3fb6db7d8e822ae651570c6",
        },
      })
      .then((res) => {
        setImages((prevImages) => [...prevImages, ...res.data.hits]);
        setTotalImages(res.data.totalHits);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [query, page]);

  // useEffect(() => {
  //   window.scrollTo({
  //     top: document.body.scrollHeight,
  //     behavior: "smooth",
  //   });
  // }, [images, page]);

  function openModal(image) {
    setActiveImage(image);
  }

  function closeModal() {
    setActiveImage(null);
  }

  function handleSearch(newQuery) {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  }

  function loadMore() {
    setPage((prevPage) => prevPage + 1);
  }

  return (
    <div>
      <div className="App">
        {activeImage && <Modal image={activeImage} onClose={closeModal} />}

        <Searchbar onSubmit={handleSearch} />
        {error && <p>{error}</p>}
        <Loader visibility={loading} />
        <ImageGallery images={images} onOpen={openModal} />
      </div>

      {images.length < totalImages && (
        <Button onClick={loadMore}>Load More</Button>
      )}
    </div>
  );
}

export default App;

import { useEffect } from "react";

function Modal({ image, onClose }) {
  useEffect(() => {
    window.addEventListener("keydown", keydown);
    return () => {
      window.removeEventListener("keydown", keydown);
    };
  }, []);

  function overlayClick(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  function keydown(e) {
    if (e.code === "Escape") {
      onClose();
    }
  }

  return (
    <div className="Overlay" onClick={overlayClick}>
      <div className="Modal">
        <img src={image} />
      </div>
    </div>
  );
}

export default Modal;

function YetkazibBerishPanel({ onClose }) {
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("yetkazish-panel")) {
      onClose();
    }
  };
  return (
    <div className="yetkazish-panel" onClick={handleOverlayClick}>
      <div
        className="yetkazish-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="yetkazish-modal-content_title">
          Siz tizimga kirmagansiz !!!
        </h1>
        <p className="yetkazish-modal-content_subtitle">
          {" "}
          Saytning toʻliq funksiyasidan foydalanish uchun tizimga kiring
        </p>
        <a href="login">
          <button className="yetkazish-modal-content__button" onClick={onClose}>
            Tizimga kirish
          </button>
        </a>
      </div>
    </div>
  );
}

export default YetkazibBerishPanel;

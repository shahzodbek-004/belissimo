import branches from "../../../../branches";


function FilialPanel({ onClose }) {
  
  const handleOverlayClick = (e) => {

    if (e.target.classList.contains("filial-panel")) {
      onClose();
    }
  };

  return (
    <div className="filial-panel" onClick={handleOverlayClick}>
      <div className="filial-modal-content" onClick={(e) => e.stopPropagation()}>
      <ul className="filial-modal-list">
  {branches.map((branch, index) => (
    <li className="filial-modal-item" key={index}>
      <div className="filial-modal-item__content">
        <div className="filial-modal-item__content-left" >
            <h1>{branch.name}</h1>
          <p>{branch.address}</p>
          <p>Ish vaqti</p>
          <h2>
            <img src="public/images/soat-icon.svg" alt="clock" /> {branch.workingHours}
          </h2>
        </div>
        <div className="filial-modal-item__content-right">
          
          </div>
        
      </div>
    </li>
  ))}
</ul>

      </div>
    </div>
  );
}

export default FilialPanel;
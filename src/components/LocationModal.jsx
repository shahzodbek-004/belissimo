import { useContext } from "react";
import { LocationContext } from "../context/LocationContext";
import { locationsList } from "../constants/data";

function LocationModal() {
  const {
    locationModalActive,
    handleLocationModalClose,
    handleSelectLocation,
  } = useContext(LocationContext);
  return (
    <div
      onClick={handleLocationModalClose}
      className={`modal location-modal ${locationModalActive ? "active" : ""} `}
    >
      <div className="modal-panel">
        <ul className="location-modal__list">
          {locationsList.map((item) => (
            <li
              className="location-modal__item"
              key={item.id}
              onClick={() => handleSelectLocation(item.title)}
            >
              <p className="location-modal__text">{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LocationModal;

import { createContext, useState } from "react";

export const LocationContext = createContext();

function LocationContextProvider(props) {
  const [locationModalActive, setLocationModalActive] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Toshkent");

  const handleLocationModalOpen = () => {
    setLocationModalActive(true);
  };
  const handleLocationModalClose = () => {
    setLocationModalActive(false);
  };

  const handleSelectLocation = (location) => {
    setSelectedLocation(location);
  };

  return (
    <LocationContext.Provider
      value={{
        locationModalActive,
        handleLocationModalOpen,
        handleLocationModalClose,
        selectedLocation,
        handleSelectLocation,
      }}
    >
      {props.children}
    </LocationContext.Provider>
  );
}

export default LocationContextProvider;

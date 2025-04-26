import { useContext, useEffect, useState } from "react";
import { Link, Links } from "react-router-dom";
import { LocationContext } from "../context/LocationContext";

function Header() {
  const [languageDropdownActive, setLanguageDropdownActive] = useState(false);
  const { handleLocationModalOpen, selectedLocation } =
    useContext(LocationContext);

  const handleOpenLanguageDropdown = () => {
    setLanguageDropdownActive(true);
  };

  const handleCloseLanguageDropdown = () => {
    setLanguageDropdownActive(false);
  };

  useEffect(() => {
    const windowEvent = (e) => {
      console.log(languageDropdownActive);
      if (languageDropdownActive) {
        handleCloseLanguageDropdown();
      }
    };
    if (window) {
      window.addEventListener("click", windowEvent);
    }

    return () => window.removeEventListener("click", windowEvent);
  }, []);

  return (
    <header className="header">
      <div className="header-top container">
        <nav className="header-top__nav">
          <a
            href="tel:+998900909090"
            className="header-top__link header-top__link_phone"
          >
            <span className="header-top__link_icon">
              <img src="/images/phone.svg" alt="" />
            </span>
            1174
          </a>
          <Link to="/about" className="header-top__link">
            Biz haqimizda
          </Link>
          <a
            href="https://jobs.bellissimo.uz/"
            target="_blank"
            className="header-top__link"
          >
            Bo'sh ish o'rinlari
          </a>
        </nav>

        <div className="header-language">
          <button
            className="header-language__button"
            onClick={handleOpenLanguageDropdown}
          >
            <span className="header-language_icon">
              <img src="/images/uzFlag.svg" alt="uz flag icon" />
            </span>
            Uz
            <span>
              <img src="/images/arrow.svg" alt="arrow icon" />
            </span>
          </button>

          <div
            className={`header-language__dropdown ${
              languageDropdownActive ? "active" : ""
            }`}
          >
            <button className="header-language__button">
              <span className="header-language_icon">
                <img src="/images/rusFlag.svg" alt="uz flag icon" />
              </span>
              Ру
            </button>
          </div>
        </div>
      </div>
      <div className="header-main container">
        <div className="header-main__row">
          <Link to="/" className="header-logo">
            <img src="/images/logo.svg" alt="bellissimo pizza logo" />
          </Link>

          <div className="header-block">
            <div className="header-block__box">
              <span className="header-block__icon">
                <img src="/images/location.svg" alt="location icon" />
              </span>
            </div>
            <div className="header-block__content">
              <p className="header-block__text">Shahar:</p>
              <button
                className="header-block__button location-modal__open"
                onClick={handleLocationModalOpen}
              >
                <span className="header-block__button_text">
                  {selectedLocation}
                </span>
                <span>
                  <img src="/images/arrow.svg" alt="arrow icon" />
                </span>
              </button>
            </div>
          </div>
          <div className="header-block header-block-second">
            <div className="header-block__box">
              <span className="header-block__box_text">24/7</span>
            </div>
            <div className="header-block__content">
              <p className="header-block__text">
                Bepul yetkazib berish endi 24/7 mavjud
              </p>
            </div>
          </div>
        </div>
        <div className="header-main__row">
          <div className="header-halal">
            <img src="/images/halal.webp" alt="halal certificate image" />
          </div>
          <div className="header-buttons">
            <Link to="/login">
              <button className="header-button__coin">
                <span className="header-button__icon">
                  <img src="/images/coin.svg" alt="coin icon" />
                </span>
                0
              </button>
            </Link>
            <Link to="/login">
              <button className="header-button header-button__login">
                Kirish
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;

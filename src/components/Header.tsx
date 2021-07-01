import React, { useState, FC } from "react";
import { Link } from "@reach/router";

const Header: FC<any> = () => {
  const [showModal, setShowModal] = useState(false);
  const [showHeader, setShowHeader] = useState(false);

  const toggleModal = () => setShowModal(!showModal);
  const toggleHeader = () => setShowHeader(!showHeader);
  const toggleBoth = () => {
    setShowHeader(!showHeader);
    return setShowModal(!showModal);
  };

  return (
    <header className="header-test">
      <div className="header__box">
        <div className="header__box_innerBox">
          <Link to="/" className="header__box_innerBox-logo">
            ProjectList
          </Link>
        </div>
        <div>
          <button onClick={toggleModal} className="header-btn">
            Sign up
          </button>
          <span className="menuBars__wrapper" onClick={toggleHeader}>
            <i className="fa fa-bars" />
          </span>
        </div>
      </div>
      {showHeader ? (
        <div className="smallHeader__wrapper">
          <div>
            <span onClick={toggleHeader} className="modal__wrapper-icon">
              X
            </span>
          </div>
          <div>
            <Link to="/" onClick={toggleHeader}>
              Projects
            </Link>
            <button onClick={toggleBoth} className="header-btn-small">
              Sign up
            </button>
          </div>
        </div>
      ) : null}
      <div></div>
    </header>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SingedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const NavBar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="" data-target="mobile-demo" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </Link>
        <Link to="/" className="brand-logo">
          Mario Plan
        </Link>
        <div className="hide-on-med-and-down">
          <SignedInLinks />
          <SignedOutLinks />
        </div>
      </div>
      <div
        className="sidenav"
        id="mobile-demo"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  );
};

export default NavBar;

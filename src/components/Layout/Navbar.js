import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">Ak Restaurant</a>
          <input type="checkbox" id="click" />
          <label htmlFor="click" className="X">
            <h1>
              <i className="fa-solid fa-bars m-4"></i>
            </h1>
          </label>
          <form className="d-flex nav-tool">
            <Link to={"/"}>
              <button className="btn btn-outline-success m-2 active">
                Home
              </button>
            </Link>
            <Link to={"/menu"}>
              <button className="btn btn-outline-success m-2">Menu</button>
            </Link>
            <Link to={"/about"}>
              <button className="btn btn-outline-success m-2">About</button>
            </Link>
            <Link to={"/contact"}>
              <button className="btn btn-outline-success m-2">Contact</button>
            </Link>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

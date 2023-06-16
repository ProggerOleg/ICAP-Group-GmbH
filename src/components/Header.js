import React from "react";
import logo from "../images/Logo.png";
import { LuLogIn } from "react-icons/lu";
import { AiOutlineUserAdd } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-4 bg-red">
        <div className="container-xxl">
          <div className="row d-flex align-items-center">
            <div className="col-3">
              <Link to="/">
                <img src={logo} className="w-75" alt="" />
              </Link>
            </div>
            <div className="col-5 ps-1">
              <ul className="nav-items d-flex align-items-center justify-content-around mb-0 ">
                <li href="/#home" className="nav-item gap-15">
                  Start
                </li>
                <li href="/#branches" className="nav-item">
                  Lösungen
                </li>
                <li href="/#contact" className="nav-item">
                  Kontakt
                </li>
                <li href="/#about" className="nav-item">
                  Über uns
                </li>
                <li href="/#impressum" className="nav-item">
                  Impressum
                </li>
              </ul>
            </div>
            <div className="col-4 d-flex align-items-center space-between justify-content-center">
              <div className="buttons">
                <button type="button" className="btn btn-primary">
                  Login &nbsp;
                  <LuLogIn />
                </button>
                <button type="button" className="btn btn-danger">
                  Sign Up &nbsp;
                  <AiOutlineUserAdd />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

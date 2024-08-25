import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="containers">
        <nav>
          <div className="logo">
            Page<span className="logospan">Setup.</span>
          </div>
          <div className="menu">
            <ul className="menulist">
              <li>
                <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                  Home
                </Link>{" "}
              </li>
              <li>
                <Link
                  to="/add-aadhar"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Add details
                </Link>
              </li>
              <li style={{ color: "#fff" }}>Contact</li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Css/Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // ✅ Logout function
  const handleLogout = async () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (!confirmLogout) return; // user ne cancel press kiya

    try {
      await fetch(`${process.env.REACT_APP_API_URL || "${process.env.REACT_APP_API_URL || "http://localhost:5000"}"}/users/logout`, {
        method: "POST",
        credentials: "include",
      });
      navigate("/"); // login page redirect
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <>
      {/* main Header Start */}
      <header>
        <div className="header-outer">
          <div className="header-inner">
            <div className="header-logo">
              <img loading="lazy"  src="../assets/logo.png" alt="logo" />
            </div>

            <ul className={`main-header ${isOpen ? "show" : ""}`}>
              <li>
                <Link to="/house"> Home </Link>
              </li>
              <li className="dropdown">
                <Link to="/books"> Books </Link>
                <ul className="dropdown-menu">
                  <li><Link to="/Englishbooks">English</Link></li>
                  <li><Link to="/Sciencebook">Science</Link></li>
                  <li><Link to="/MathBook">Maths</Link></li>
                  <li><Link to="/SkillBook">Life Skills</Link></li>
                </ul>
              </li>
              <li>
                <Link to="/abouts"> About Us </Link>
              </li>
              <li>
                <Link to="/Contact"> Contact us </Link>
              </li>

              <li>
                <button onClick={handleLogout} className="logout-btn">
                  Logout
                </button>
              </li>
            </ul>

            <div className="menu-icon" onClick={toggleMenu}>
              ☰
            </div>

            <div className="logo-img">
              <img loading="lazy"  src="../assets/logo-removebg-preview.png" alt="logo-1" />
            </div>
          </div>
        </div>
      </header>
      {/* Main Header ends */}
    </>
  );
};

export default Header;

import React, { useState } from "react";
import ardwatter from "../images/ardwatter.png";
import { Link } from "react-router-dom";
import { FaAlignJustify, FaTimes } from "react-icons/fa";
import "./NavBar.css";

export default function Header() {
  const [ sidebar, setSidebar ] = useState(false);

  const showSidebar = () =>  setSidebar(!sidebar)
  
  return (
    <header>
      <div id="head">
        <div className="contact-bar">
          <div className="contact-address">
            <ul className="address">
              <li>
                <i className="fal fa-phone-alt"></i> +2349035596977
              </li>
              <li>&#124;</li>
              <li>
                <i className="fal fa-envelope"></i> ardwatterdigital@gmail.com
              </li>
              <li>&#124; </li>
              <li>
                <i className="fal fa-alarm-clock"></i> Mon - Sat 8.00am - 6.00pm
              </li>
            </ul>
            <ul className="contact-social">
              <li>
                <a href="http://www.facebook.com/ardwatter">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send?phone=2347087216343">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/ardwatter/">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/18245563">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <nav>
          <div id="navBar">
            <p>
              <a href="#">
                <img src={ardwatter} />
              </a>
            </p>
            <ul className="nav-ul">
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#about">ABOUT US</a>
              </li>
              <li>
                <a href="#services">SERVICE</a>
              </li>
              <li>
                <a href="#">BLOG</a>
              </li>
            </ul>
            <div className="toggle-nav">
              <div className="">
                <Link to="#" className="menu-bars" onClick={showSidebar}>
                  <FaAlignJustify style={{ color: "white" }} />
                </Link>
              </div>
              <div className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items">
                  <li className="navbar-toggle">
                    <Link to="#" className="menu-bars" onClick={ showSidebar}>
                    <FaTimes style={{ color: "white" }} />
                    </Link>
                  </li>
                  <li className="nav-items">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="nav-items">
                    <Link to="/#about">About us</Link>
                  </li>
                  <li className="nav-items">
                    <Link to="/#service">Service</Link>
                  </li>
                  <li className="nav-items">
                    <Link to="/blog">Blog</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div className="hero-text">
          <div
            className="hero-text-caption"
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <h2>start up your business with us</h2>
          </div>
          <p
            className="hero-text-subcaption"
            style={{ color: "rgb(231 230 230)", margin: "1rem 0 1rem" }}
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            Our passion is to holistically build thriving and cost-effective
            businesses by progressively leveraging on cutting-edge models.
          </p>
          <p
            style={{ padding: ".7rem 0", width: "300px" }}
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <a className="btn btn-read" href="#about">
              Read More
            </a>
          </p>
        </div>
      </div>
    </header>
  );
}

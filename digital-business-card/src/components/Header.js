import React from "react";
import profile from "../images/Pic.jpeg";



const Header = () => {
  return (
    <header className="info card">
      <img className="card-image" src={profile} alt="profile" />
      <div className="card-container">
        <h1 className="info-name">Md Shayemur Rahman</h1>
        <h3 className="info-title">Full-Stack Developer</h3>
        <a className="info-site" href="http://localhost:3000">
          mdshayemur.website
        </a>

        <div className="btn-grp">
          <button className="btn btn-email">
            <i className="fa fa-envelope"></i> Email
          </button>
          <button className="btn btn-linkedin">
            <i className="fa fa-linkedin"></i> LinkedIn
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

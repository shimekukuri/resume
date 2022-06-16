import React from "react";
import clsx from "clsx";
import Button from "./Button.js";

export default function Navbar(props) {
  const { className, navbarActive, onNavbarToggle, onNavbarSelection } = props;
  const classes = clsx(className, { activate: navbarActive });

  const handleGitHubClick = () => {
    window.open("https://github.com/shimekukuri");
  };

  return (
    <>
      <div id="navbar" className={classes}>
        <button id="navbarexit" onClick={onNavbarToggle}>
          X
        </button>
        <h1 className="navbarheader">Menu</h1>
        <ul className="navList">
          <li className="navbarlist">
            <Button onClick={() => onNavbarSelection(`twitter`)}>
              Twitter
            </Button>
          </li>
          <li className="navbarlist">
            <Button onClick={handleGitHubClick}>Gethub</Button>
          </li>
          <li className="navbarlist">
            <Button onClick={() => onNavbarSelection(`resume`)}>Resume</Button>
          </li>
          <li className="navbarlist">
            <Button onClick={() => onNavbarSelection("blog")}>Blog</Button>
          </li>
          <li className="navbarlist">
            <Button onClick={() => onNavbarSelection("contact")}>Contact</Button>
          </li>
        </ul>
        <div className="footer">© Tyler James Hutchinson</div>
      </div>
    </>
  );
}

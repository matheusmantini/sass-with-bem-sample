'use client'

import React, { useRef } from "react";
import "./header.scss";

export const Header = () => {
  const activeLinkRef = useRef<HTMLAnchorElement | null>(null);

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    
    if (activeLinkRef.current) {
      activeLinkRef.current.classList.remove("nav__link--active");
    }
    event.currentTarget.classList.add("nav__link--active");
    activeLinkRef.current = event.currentTarget;
  };

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a className="nav__link" href="" onClick={handleLinkClick}>
            Home
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="" onClick={handleLinkClick}>
            About us
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="" onClick={handleLinkClick}>
            Help
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="" onClick={handleLinkClick}>
            Get in touch
          </a>
        </li>
      </ul>
    </nav>
  );
};

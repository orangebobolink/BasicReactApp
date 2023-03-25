import React from "react";
import { Link } from "react-router-dom";
import cl from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={cl.navbar}>
      <div className={cl.navbar__links}>
        <Link to="/lesson2">Задание 2</Link>
        <Link to="/lesson3">Задание 3</Link>
        <Link to="/lesson4">Задание 4</Link>
      </div>
    </div>
  );
};

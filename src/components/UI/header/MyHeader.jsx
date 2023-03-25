import React from "react";
import cl from "./MyHeader.module.css";

export const MyHeader = ({ image }) => {
  return (
    <header className={cl.header}>
      <img className={cl.logo} src={image} alt="logo" />
      <div>Какой-то сайт</div>
    </header>
  );
};

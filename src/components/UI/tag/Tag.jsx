import React from "react";
import cl from "./Tag.module.css";

export const Tag = ({ title, href }) => {
  return (
    <a className={cl.tag} href={href}>
      {title}
    </a>
  );
};

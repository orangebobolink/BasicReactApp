import React from "react";
import { FaStar } from "react-icons/fa";
import cl from "./StarRaiting.module.css";

export const Star = ({
  color = "grey",
  handleSelect = () => {},
  handleHover = () => {},
}) => {
  return (
    <FaStar
      className={cl.star__rating__star}
      color={color}
      onMouseOver={handleHover}
      onClick={handleSelect}
    />
  );
};

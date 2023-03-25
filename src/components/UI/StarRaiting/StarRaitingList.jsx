import React, { useState } from "react";
import { Star } from "./Star";
import cl from "./StarRaiting.module.css";

export const StarRaitingList = ({ numTotalStars = 5, initialRating = 0 }) => {
  const [numSelectedStars, setNumSelectedStars] = useState(initialRating);
  const [numHoveringStars, setNumHoveringStars] = useState(null);
  const [isUserHovering, setIsUserHovering] = useState(false);

  function getColor(isUserHovering, i, numSelectedStars, numHoveringStars) {
    const threshold = isUserHovering ? numHoveringStars : numSelectedStars;
    return i < threshold ? "gold" : "grey";
  }

  return (
    <div className={cl["star__rating"]}>
      <div className={cl.label}>Rating {numSelectedStars}</div>

      <div
        onMouseEnter={() => setIsUserHovering(true)}
        onMouseLeave={() => setIsUserHovering(false)}
        className={cl.star__label}
      >
        {Array.from({ length: numTotalStars }).map((e, i) => (
          <Star
            key={i}
            color={getColor(
              isUserHovering,
              i,
              numSelectedStars,
              numHoveringStars
            )}
            handleSelect={() => {
              setNumSelectedStars(i + 1);
              alert(`Вы изменили количсевто звезд`);
            }}
            handleHover={() => setNumHoveringStars(i + 1)}
          />
        ))}
      </div>
    </div>
  );
};

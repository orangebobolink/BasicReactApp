import React, { useState } from "react";
import { StarRaitingList } from "../components/UI/StarRaiting/StarRaitingList";

export const Stars = () => {
  const [state, setState] = useState(1);

  const change = (starsSelected) => setState(starsSelected);

  return (
    <div>
      <StarRaitingList starsSelected={state} totalStars={5} onRate={change} />
    </div>
  );
};

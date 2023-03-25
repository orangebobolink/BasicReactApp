import React from "react";
import { Error } from "../pages/Error.jsx";
import { Route, Routes } from "react-router-dom";
import { Stars } from "../pages/Stars.jsx";
import { Tags } from "../pages/Tags.jsx";
import { Posts } from "../pages/Posts.jsx";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/lesson2" element={<Stars />} />
      <Route path="/lesson3" element={<Tags />} />
      <Route path="/lesson4" element={<Posts />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

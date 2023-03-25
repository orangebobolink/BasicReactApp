import React from "react";
import { getPagesArray } from "../../../utils/pages";
import cl from "./Pagination.module.css";

export const Pagination = ({ totalPages, page, changePage }) => {
  let pagesArray = getPagesArray(totalPages);

  return (
    <div className={cl.page__wrapper}>
      <span
        className={cl.page__normal}
        onClick={() => {
          if (page > 1) {
            changePage(page - 1);
          }
        }}
      >
        Prev
      </span>

      {pagesArray.map((p) => (
        <span
          onClick={() => changePage(p)}
          key={p}
          className={
            page === p
              ? [cl.page__normal, cl.page__current].join(" ")
              : cl.page__normal
          }
        >
          {p}
        </span>
      ))}

      <span
        className={cl.page__normal}
        onClick={() => {
          if (page < totalPages) {
            changePage(page + 1);
          }
        }}
      >
        Next
      </span>
    </div>
  );
};

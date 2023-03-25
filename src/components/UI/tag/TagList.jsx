import React from "react";
import { Tag } from "./Tag";
import cl from "./Tag.module.css";

export const TagList = ({ tags }) => {
  return (
    <div className={cl.tag__wrapper}>
      {tags.map((tag) => (
        <Tag title={tag.title} href={tag.href} />
      ))}
    </div>
  );
};

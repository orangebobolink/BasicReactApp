import React, { useState } from "react";
import { TagList } from "../components/UI/tag/TagList";

export const Tags = () => {
  const [tags, setTags] = useState([
    { title: "Тег №1", href: "http://link1.ru" },
    { title: "Тег №2", href: "http://link2.ru" },
    { title: "Тег №3", href: "http://link3.ru" },
  ]);

  return <TagList tags={tags} />;
};

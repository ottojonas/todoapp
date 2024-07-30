/* eslint-disable no-unused-vars */
import React from "react";
import "./Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyle = {
    html: { backgroundColor: "#fda821" },
    css: { backgroundColor: "#15d4c8" },
    javascript: { backgroundColor: "#ffd12c" },
    react: { backgroundColor: "#4cdafc" },
    default: { backgroundColor: "#f9f9f9" },
  };
  return (
    <button
      type="button"
      className="tag"
      style={selected ? tagStyle[tagName] : tagStyle.default}
      onClick={() => selectTag(tagName)}>
      {tagName}
    </button>
  );
};

export default Tag;

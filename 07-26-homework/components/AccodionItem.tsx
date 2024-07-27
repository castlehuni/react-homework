//@ts-nocheck
import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

const AccodionItem = ({ name, count }): JSX.Element => {
  return (
    <>
      <article className="accodian-items">
        <div className="input-wrapper">
          <input type="checkbox" id={name} />
          <label htmlFor={name}>{name}</label>
        </div>
        <span className="item-count">{count}</span>
      </article>
    </>
  );
};

export default AccodionItem;

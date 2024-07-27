//@ts-nocheck
import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

const AccodionItem = ({ name, count }): JSX.Element => {
  return (
    <>
      <div>
        <input type="checkbox" id="salad" />
        <label htmlFor="salad">{name}</label>
      </div>
    </>
  );
};

export default AccodionItem;

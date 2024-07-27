//@ts-nocheck
import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";
import AccodionItem from "./AccodionItem.js";

const AccodionBody = (props): JSX.Element => {
  const { data } = props;
  return (
    <>
      <ul className="accodion-body">
        {data.map((item) => (
          <li className="body-items">
            <AccodionItem name={item.name} count={item.count} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default AccodionBody;

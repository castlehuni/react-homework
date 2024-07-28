//@ts-nocheck
import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";
import AccodionHeader from "../components/AccodionHeader.js";
import AccodionBody from "../components/AccodionBody.js";

const Accodion = ({ category, number, listItems }) => {
  return (
    <>
      <section className="accodion">
        <details>
          <summary>
            <AccodionHeader category={category} number={number} />
          </summary>
          <article>
            <AccodionBody data={listItems} />
          </article>
        </details>
      </section>
    </>
  );
};

export default Accodion;

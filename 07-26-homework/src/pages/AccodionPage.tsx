//@ts-nocheck
import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";
import listItems from "../data/datas.js";
import Accodion from "../components/Accodion.js";

const AccodionPage = () => {
  return (
    <>
      <div className="accodion-pages">
        <Accodion
          category="카테고리"
          number={1}
          listItems={listItems.categorys}
        />
        <Accodion category="브랜드" number={6} listItems={listItems.brands} />
        <Accodion category="가격" number={4} listItems={listItems.prices} />
      </div>
    </>
  );
};

export default AccodionPage;

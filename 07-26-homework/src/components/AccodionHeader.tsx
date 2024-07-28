//@ts-nocheck
import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

const AccodionHeader = ({ category, number }) => {
  return (
    <>
      <nav className="accodion-header">
        <div className="header-text-wrapper">
          <p>{category}</p>
          <span>{number}</span>
        </div>
        <img
          src="../public/icons/upperArrow.svg"
          alt="아코디언 화살표 버튼 사진"
        />
      </nav>
    </>
  );
};

export default AccodionHeader;

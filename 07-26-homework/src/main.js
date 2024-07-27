import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";
import AccodionHeader from "../components/AccodionHeader.js";
var container = document.getElementById("react-app");
if (container) {
    createRoot(container).render(React.createElement(AccodionHeader, { category: "category", number: 1 }));
}
else {
    console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
}

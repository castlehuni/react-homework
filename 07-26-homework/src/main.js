import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";
import AccodionItem from "../components/AccodionItem.js";
var container = document.getElementById("react-app");
if (container) {
    createRoot(container).render(React.createElement(AccodionItem, { name: "\uC0D0\uB7EC\uB4DC \u00B7 \uAC04\uD3B8\uC2DD", count: "32" }));
}
else {
    console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
}

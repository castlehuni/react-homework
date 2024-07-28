import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";
import AccodionPage from "./pages/AccodionPage.js";
var container = document.getElementById("react-app");
if (container) {
    createRoot(container).render(React.createElement(AccodionPage, null));
}
else {
    console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
}

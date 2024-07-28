import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";
import listItems from "./data/datas.js";
import Accodion from "./components/Accodion.js";
var container = document.getElementById("react-app");
if (container) {
    createRoot(container).render(React.createElement(Accodion, { category: "category", number: 1, listItems: listItems.data }));
}
else {
    console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
}

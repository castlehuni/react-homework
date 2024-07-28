import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";
import Accodion from "./components/Accodion";
var container = document.getElementById("react-app");
if (container) {
    createRoot(container).render(React.createElement(Accodion, null));
}
else {
    console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
}

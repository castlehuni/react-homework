import React from "https://esm.sh/react";
import listItems from "../data/datas.js";
import Accodion from "../components/Accodion.js";
var AccodionPage = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "accodion-pages" },
            React.createElement(Accodion, { category: "\uCE74\uD14C\uACE0\uB9AC", number: 1, listItems: listItems.categorys }),
            React.createElement(Accodion, { category: "\uBE0C\uB79C\uB4DC", number: 6, listItems: listItems.brands }),
            React.createElement(Accodion, { category: "\uAC00\uACA9", number: 4, listItems: listItems.prices }))));
};
export default AccodionPage;

import React from "https://esm.sh/react";
import AccodionHeader from "../components/AccodionHeader.js";
import AccodionBody from "../components/AccodionBody.js";
var Accodion = function (_a) {
    var category = _a.category, number = _a.number, listItems = _a.listItems;
    return (React.createElement(React.Fragment, null,
        React.createElement("section", { className: "accodion" },
            React.createElement("details", null,
                React.createElement("summary", null,
                    React.createElement(AccodionHeader, { category: "category", number: 1 })),
                React.createElement("article", null,
                    React.createElement(AccodionBody, { data: listItems }))))));
};
export default Accodion;

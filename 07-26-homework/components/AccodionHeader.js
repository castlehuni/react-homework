import React from "https://esm.sh/react";
var AccodionHeader = function (_a) {
    var category = _a.category, number = _a.number;
    return (React.createElement(React.Fragment, null,
        React.createElement("nav", { className: "accodion-header" },
            React.createElement("div", { className: "header-text-wrapper" },
                React.createElement("p", null, category),
                React.createElement("span", null, number)),
            React.createElement("button", { type: "button" },
                React.createElement("img", { src: "../public/icons/upperArrow.svg", alt: "\uC544\uCF54\uB514\uC5B8 \uD654\uC0B4\uD45C \uBC84\uD2BC \uC0AC\uC9C4" })))));
};
export default AccodionHeader;

import React from "https://esm.sh/react";
var AccodionItem = function (_a) {
    var name = _a.name, count = _a.count;
    return (React.createElement(React.Fragment, null,
        React.createElement("article", { className: "accodian-items" },
            React.createElement("div", { className: "input-wrapper" },
                React.createElement("input", { type: "checkbox", id: name }),
                React.createElement("label", { htmlFor: name }, name)),
            React.createElement("span", { className: "item-count" }, count))));
};
export default AccodionItem;

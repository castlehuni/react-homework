import React from "https://esm.sh/react";
var AccodionItem = function (_a) {
    var name = _a.name, count = _a.count;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", null,
            React.createElement("input", { type: "checkbox", id: "salad" }),
            React.createElement("label", { htmlFor: "salad" }, name))));
};
export default AccodionItem;

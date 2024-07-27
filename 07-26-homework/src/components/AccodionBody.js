import React from "https://esm.sh/react";
import AccodionItem from "./AccodionItem.js";
var AccodionBody = function (props) {
    var data = props.data;
    return (React.createElement(React.Fragment, null,
        React.createElement("ul", { className: "accodion-body" }, data.map(function (item) { return (React.createElement("li", { className: "body-items" },
            React.createElement(AccodionItem, { name: item.name, count: item.count }))); }))));
};
export default AccodionBody;

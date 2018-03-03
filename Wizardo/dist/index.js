"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var App_1 = require("./Components/App");
var Questionnaire_1 = require("./Store/Questionnaire");
var react_redux_1 = require("react-redux");
//Helper methods
String.prototype.hashCode = function () {
    var hash = 0, i, chr;
    if (this.length === 0)
        return hash;
    for (i = 0; i < this.length; i++) {
        chr = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
};
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: Questionnaire_1.store },
    React.createElement(App_1.default, null)), document.getElementById('react-app'));
//# sourceMappingURL=index.js.map
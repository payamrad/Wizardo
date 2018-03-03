"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("React");
var PreviewContainer_1 = require("./PreviewContainer");
var QuestionContainer_1 = require("./QuestionContainer");
var react_redux_1 = require("react-redux");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        return _super.call(this, props) || this;
    }
    App.prototype.render = function () {
        var answeredQuestions = this.props.completed ? this.props.questions : this.props.questions.slice(0, this.props.current);
        var hasAnsweredAll = this.props.current < this.props.questions.length;
        var questionData = __assign({ isCompleted: this.props.completed }, this.props.questions[this.props.current]);
        return (React.createElement(React.Fragment, null,
            React.createElement(PreviewContainer_1.default, { answered: answeredQuestions }),
            hasAnsweredAll
                ? React.createElement(QuestionContainer_1.default, __assign({}, questionData))
                : React.createElement("span", null, "You have completed the questionnaire!")));
    };
    return App;
}(React.Component));
var mapStateToProps = function (store) { return __assign({}, store); };
exports.default = react_redux_1.connect(mapStateToProps)(App);
//# sourceMappingURL=App.js.map
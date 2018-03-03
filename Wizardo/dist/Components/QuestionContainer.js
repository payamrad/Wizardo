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
var React = require("react");
var Questionnaire_1 = require("../Store/Questionnaire");
var InputComponents_1 = require("./InputComponents");
var TEXTBOX = 'tb';
var DROPDOWN = 'dd';
var RADIOBUTTON = 'rb';
var CHECKBOX = 'cb';
var QuestionContainer = /** @class */ (function (_super) {
    __extends(QuestionContainer, _super);
    function QuestionContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            value: _this.props.value || '',
            isValid: true
        };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }
    QuestionContainer.prototype.componentWillReceiveProps = function (props) {
        this.setState({ value: props.value || '', isValid: true });
    };
    QuestionContainer.prototype.handleChange = function (value) {
        this.setState({ value: value });
    };
    QuestionContainer.prototype.handleSubmit = function () {
        if (this.props.required && !this.state.value) {
            this.setState({ isValid: false });
        }
        else {
            Questionnaire_1.store.dispatch(Questionnaire_1.answerQuestion(this.state.value));
        }
    };
    QuestionContainer.prototype.render = function () {
        var inputProps = { value: this.state.value, options: this.props.options, onValueChange: this.handleChange };
        var buttonText = this.props.isCompleted ? 'Update' : 'Next';
        var elements;
        var invalidMessage;
        var invalidMessageText;
        switch (this.props.type) {
            case TEXTBOX:
                elements = React.createElement(InputComponents_1.TextBox, __assign({}, inputProps));
                invalidMessageText = 'Please enter a valid value!';
                break;
            case DROPDOWN:
                elements = React.createElement(InputComponents_1.DropDown, __assign({}, inputProps));
                invalidMessageText = 'Please select a value!';
                break;
            case RADIOBUTTON:
                elements = React.createElement(InputComponents_1.RadioButton, __assign({}, inputProps));
                invalidMessageText = 'Please pick one item!';
                break;
            case CHECKBOX:
                elements = React.createElement(InputComponents_1.CheckBox, __assign({}, inputProps));
                invalidMessageText = 'Please check at least one item!';
                break;
        }
        if (!this.state.isValid) {
            invalidMessage = React.createElement("h5", { className: "question__invalid" }, invalidMessageText);
        }
        return (React.createElement("div", { className: "question__container" },
            React.createElement("h4", null, this.props.text),
            invalidMessage,
            React.createElement("div", { className: "question__input" }, elements),
            React.createElement("button", { className: "question__button", onClick: this.handleSubmit },
                " ",
                buttonText,
                " ")));
    };
    return QuestionContainer;
}(React.Component));
exports.default = QuestionContainer;
//# sourceMappingURL=QuestionContainer.js.map
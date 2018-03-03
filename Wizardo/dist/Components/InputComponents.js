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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var TextBox = /** @class */ (function (_super) {
    __extends(TextBox, _super);
    function TextBox(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    TextBox.prototype.handleChange = function (event) {
        this.props.onValueChange(event.target.value);
    };
    TextBox.prototype.render = function () {
        return (React.createElement("input", { type: "text", value: this.props.value, onChange: this.handleChange }));
    };
    return TextBox;
}(React.Component));
exports.TextBox = TextBox;
var DropDown = /** @class */ (function (_super) {
    __extends(DropDown, _super);
    function DropDown(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    DropDown.prototype.componentDidMount = function () {
        if (!this.props.value) {
            this.props.onValueChange(this.props.options[0]);
        }
    };
    DropDown.prototype.handleChange = function (event) {
        this.props.onValueChange(event.target.value);
    };
    DropDown.prototype.render = function () {
        var options = this.props.options.map(function (v, i, a) { return (React.createElement("option", { key: v.hashCode(), value: v },
            " ",
            v,
            " ")); });
        return (React.createElement("select", { value: this.props.value, onChange: this.handleChange }, options));
    };
    return DropDown;
}(React.Component));
exports.DropDown = DropDown;
var RadioButton = /** @class */ (function (_super) {
    __extends(RadioButton, _super);
    function RadioButton(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    RadioButton.prototype.handleChange = function (event) {
        this.props.onValueChange(event.target.value);
    };
    RadioButton.prototype.render = function () {
        var _this = this;
        var buttons = this.props.options.map(function (v, i, a) {
            return (React.createElement(React.Fragment, { key: v.hashCode() },
                React.createElement("input", { type: "radio", id: i.toString(), value: v, onChange: _this.handleChange, checked: _this.props.value == v }),
                React.createElement("label", { htmlFor: i.toString() }, v)));
        });
        return (buttons);
    };
    return RadioButton;
}(React.Component));
exports.RadioButton = RadioButton;
//multiple checkboxes, value as a comma separated string
var CheckBox = /** @class */ (function (_super) {
    __extends(CheckBox, _super);
    function CheckBox(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    CheckBox.prototype.handleChange = function (event) {
        var newValue = (event.target.checked ? this.props.value.concat(',', event.target.value) : this.props.value.replace(event.target.value, '').replace(',,', ',')).replace(/(^[,\s]+)|([,\s]+$)/g, '');
        this.props.onValueChange(newValue);
    };
    CheckBox.prototype.render = function () {
        var _this = this;
        var boxes = this.props.options.map(function (v, i, a) {
            return (React.createElement(React.Fragment, { key: v.hashCode() },
                React.createElement("input", { type: "checkbox", id: i.toString(), value: v, onChange: _this.handleChange, checked: _this.props.value.indexOf(v) > -1 }),
                React.createElement("label", { htmlFor: i.toString() }, v)));
        });
        return boxes;
    };
    return CheckBox;
}(React.Component));
exports.CheckBox = CheckBox;
//# sourceMappingURL=InputComponents.js.map
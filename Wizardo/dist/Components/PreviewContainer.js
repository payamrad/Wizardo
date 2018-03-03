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
var Questionnaire_1 = require("../Store/Questionnaire");
var PreviewContainer = /** @class */ (function (_super) {
    __extends(PreviewContainer, _super);
    function PreviewContainer(props) {
        return _super.call(this, props) || this;
    }
    PreviewContainer.prototype.handleElementClick = function (i) {
        Questionnaire_1.store.dispatch(Questionnaire_1.returnToQuestion(i));
    };
    PreviewContainer.prototype.render = function () {
        var _this = this;
        var elements = this.props.answered.map(function (v, i, a) {
            return (React.createElement("li", { className: "preview__element", onClick: function () { return _this.handleElementClick(i); }, key: v.title.hashCode() }, v.title + ': ' + (v.value || 'N/A')));
        });
        return (React.createElement("div", { className: "preview__container" },
            React.createElement("ul", { className: "preview__list" }, elements)));
    };
    return PreviewContainer;
}(React.Component));
exports.default = PreviewContainer;
//# sourceMappingURL=PreviewContainer.js.map
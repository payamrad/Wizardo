"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var data = require("./Questions.json");
var Redux = require("redux");
var QUESTION_ANSWERED = 'QUESTION_ANSWERED';
var QUESTION_REVISITED = 'QUESTION_REVISITED';
//Action creators
function answerQuestion(v) {
    return {
        type: QUESTION_ANSWERED,
        value: v
    };
}
exports.answerQuestion = answerQuestion;
function returnToQuestion(i) {
    return {
        type: QUESTION_REVISITED,
        index: i
    };
}
exports.returnToQuestion = returnToQuestion;
//Initial store tree
var initialState = {
    completed: false,
    current: 0,
    questions: data.questions
};
//Reducer
function questionnaireApp(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case QUESTION_ANSWERED:
            var _a = state.questions[state.current], value = _a.value, rest_1 = __rest(_a, ["value"]);
            return {
                completed: state.completed || (state.current == state.questions.length - 1) ? true : false,
                current: (state.completed ? state.questions.length : state.current + 1),
                questions: state.questions.map(function (v, i, a) { return (i == state.current ? __assign({}, rest_1, { value: action.value }) : v); })
            };
        case QUESTION_REVISITED:
            return {
                completed: state.completed,
                current: action.index,
                questions: state.questions
            };
        default:
            return state;
    }
}
exports.store = Redux.createStore(questionnaireApp);
//# sourceMappingURL=Questionnaire.js.map
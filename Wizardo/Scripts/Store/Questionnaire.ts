
import * as data from './Questions.json';
import * as Redux from 'redux';

const QUESTION_ANSWERED = 'QUESTION_ANSWERED';
const QUESTION_REVISITED = 'QUESTION_REVISITED';

//Action creators
export function answerQuestion(v: string): Action {
    return {
        type: QUESTION_ANSWERED,
        value: v
    };
}

export function returnToQuestion(i: number): Action {
    return {
        type: QUESTION_REVISITED,
        index: i
    }
}

//Initial store tree
const initialState: Store = {
    completed: false,
    current: 0,
    questions: (<any>data).questions
};

//Reducer
function questionnaireApp(state: Store = initialState, action: Action): Store {

    switch (action.type) {
        case QUESTION_ANSWERED:
            const { value, ...rest } = state.questions[state.current];
            return {
                completed: state.completed || (state.current == state.questions.length - 1) ? true : false,
                current: (state.completed ? state.questions.length : state.current + 1),
                questions: state.questions.map((v, i, a) => { return (i == state.current ? { ...rest, value: action.value } : v) })
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

export const store = Redux.createStore(questionnaireApp);
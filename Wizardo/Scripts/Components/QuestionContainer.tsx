import * as React from 'react';
import { store, answerQuestion } from '../Store/Questionnaire';
import { TextBox, DropDown, RadioButton, CheckBox } from './InputComponents';

const TEXTBOX = 'tb';
const DROPDOWN = 'dd';
const RADIOBUTTON = 'rb';
const CHECKBOX = 'cb';

export default class QuestionContainer extends React.Component<QuestionDisplay, QuestionContainerState> {
    constructor(props: QuestionDisplay) {
        super(props);
        this.state = {
            value: this.props.value || '',
            isValid: true
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(props: QuestionDisplay) {
        this.setState({ value: props.value || '', isValid: true })
    }

    handleChange(value: string) {
        this.setState({ value });
    }

    handleSubmit() {
        if (this.props.required && !this.state.value) {
            this.setState({ isValid: false });
        } else {
            store.dispatch(answerQuestion(this.state.value));
        } 
    }

    render() {
        const inputProps = { value: this.state.value, options: this.props.options, onValueChange: this.handleChange };
        const buttonText = this.props.isCompleted ? 'Update' : 'Next';
        var elements: JSX.Element;
        var invalidMessage: JSX.Element;
        var invalidMessageText: string;
        switch (this.props.type) {
            case TEXTBOX:
                elements = <TextBox {...inputProps} />;
                invalidMessageText = 'Please enter a valid value!';
                break;
            case DROPDOWN:
                elements = <DropDown {...inputProps} />;
                invalidMessageText = 'Please select a value!';
                break;
            case RADIOBUTTON:
                elements = <RadioButton {...inputProps} />;
                invalidMessageText = 'Please pick one item!';
                break;
            case CHECKBOX:
                elements = <CheckBox {...inputProps} />;
                invalidMessageText = 'Please check at least one item!';
                break;
        }
        if (!this.state.isValid) {
            invalidMessage = <h5 className="question__invalid">{invalidMessageText}</h5>;
        }

        return (<div className="question__container">
            <h4>{this.props.text}</h4>
            {invalidMessage}
            <div className="question__input">{elements}</div>
            <button className="question__button" onClick={this.handleSubmit}> {buttonText} </button>
        </div>);
    }
}

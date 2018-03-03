import * as React from "React"
import PreviewContainer from './PreviewContainer'
import QuestionContainer from './QuestionContainer'
import { connect } from 'react-redux';


class App extends React.Component<Store, any> {
    constructor(props: Store) {
        super(props);
    }

    render() {
        var answeredQuestions = this.props.completed ? this.props.questions : this.props.questions.slice(0, this.props.current);
        var hasAnsweredAll: boolean = this.props.current < this.props.questions.length;
        var questionData: QuestionDisplay = {
            isCompleted: this.props.completed,
            ...this.props.questions[this.props.current]
        };

        return (<React.Fragment>
            <PreviewContainer answered={answeredQuestions} />
            {hasAnsweredAll
                ? <QuestionContainer {...questionData} />
                : <span>You have completed the questionnaire!</span>
            }
        </React.Fragment>);
    }
}

const mapStateToProps = (store: Store) => { return { ...store }; };

export default connect(mapStateToProps)(App);


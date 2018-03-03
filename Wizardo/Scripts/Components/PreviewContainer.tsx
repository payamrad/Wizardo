import * as React from 'react';
import { store, returnToQuestion } from '../Store/Questionnaire';

export default class PreviewContainer extends React.Component<PreviewContainerProps, {}> {
    constructor(props: PreviewContainerProps) {
        super(props)
    }

    handleElementClick(i: number) {
        store.dispatch(returnToQuestion(i));
    }

    render() {
        const elements = this.props.answered.map((v, i, a) => {
            return (<li className="preview__element" onClick={() => this.handleElementClick(i)} key={v.title.hashCode()}>{v.title + ': ' + (v.value || 'N/A')}</li>)
        });

        return (<div className="preview__container">
            <ul className="preview__list">
                {elements}
            </ul>
        </div>);
    }
}
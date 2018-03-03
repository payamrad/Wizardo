
import * as React from 'react';

export class TextBox extends React.Component<InputProps, {}> {
    constructor(props: InputProps) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event: any) {
        this.props.onValueChange(event.target.value);
    }

    render() {
        return (<input type="text" value={this.props.value} onChange={this.handleChange}></input>)
    }
}


export class DropDown extends React.Component<InputProps, {}> {
    constructor(props: InputProps) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        if (!this.props.value) { 
            this.props.onValueChange(this.props.options[0]);
        }
    }

    handleChange(event: any) {
        this.props.onValueChange(event.target.value);
    }

    render() {
        const options = this.props.options.map((v, i, a) => { return (<option key={v.hashCode()} value={v}> {v} </option>) });
        return(<select value={this.props.value} onChange={this.handleChange}>{options}</select>)
    }
}

export class RadioButton extends React.Component<InputProps, {}> {
    constructor(props: InputProps) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event: any) {
        this.props.onValueChange(event.target.value);
    }

    render() {
        const buttons = this.props.options.map((v, i, a) => {
            return (<React.Fragment key={v.hashCode()}>
                <input type="radio" id={i.toString()} value={v} onChange={this.handleChange} checked={this.props.value == v}></input>
                <label htmlFor={i.toString()}>{v}</label>
            </React.Fragment>)
        });
        return (buttons)
    }
}

//multiple checkboxes, value as a comma separated string
export class CheckBox extends React.Component<InputProps, {}> {
    constructor(props: InputProps) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event: any) {
        const newValue = (event.target.checked ? this.props.value.concat(',',event.target.value) : this.props.value.replace(event.target.value, '').replace(',,', ',')).replace(/(^[,\s]+)|([,\s]+$)/g, '');
        this.props.onValueChange(newValue);
    }

    render() {
        const boxes = this.props.options.map((v, i, a) => {
            return (<React.Fragment key={v.hashCode()} >
                <input type="checkbox" id={i.toString()} value={v} onChange={this.handleChange} checked={this.props.value.indexOf(v) > -1}></input>
                <label htmlFor={i.toString()}>{v}</label>
            </React.Fragment>)
        });
        return boxes;
    }
}
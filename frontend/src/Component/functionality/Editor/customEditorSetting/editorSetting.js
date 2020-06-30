import React, {Component} from 'react';
const blockTypes = [
    {label:"h1", style:"header-one"},
    {label:"h2", style:"header-two"},
    {label:"h3", style:"header-three"},
    {label:"h4", style:"header-four"},
    {label:"h5", style:"header-five"},
    {label:"h6", style:"header-six"},
    {label: 'Blockquote', style: 'blockquote'},
    {label: 'UL', style: 'unordered-list-item'},
    {label: 'OL', style: 'ordered-list-item'},
    {label: 'Code Block', style: 'code-block'},
];


const inlineTypes = [
    {label: 'Bold', style: 'BOLD'},
    {label: 'Italic', style: 'ITALIC'},
    {label: 'Underline', style: 'UNDERLINE'},
    {label: 'Monospace', style: 'CODE'},
]

class StyleButton extends Component {
    constructor(props){
        super(props);

        this.onToggle = (e) => {
            e.preventDefault();
            console.log(this.props);
            this.props.onToggle(this.props.style);
        }
    }

    render(){
        return (
            <span className={this.props.class }onMouseDown={this.onToggle} >
                {this.props.label}
            </span>
        )
    }
}


const BlocksStyleButtons = (props) => {
    const blocksButtons = blockTypes.map( type => {
        return <StyleButton
                            key={type.label}
                            class={props.class}
                            label={type.label}
                            style={type.style} 
                            onToggle={props.onToggle}/>
    });
    return blocksButtons;
}
const InlineStyleButtons = (props) => {
    console.log(props);
    const inlineButtons = inlineTypes.map( type => {
        return <StyleButton
                            key={type.label}
                            class={props.class}
                            label={type.label}
                            style={type.style} 
                            onToggle={props.onToggle}/>
    });
    return inlineButtons;
}

export {
    BlocksStyleButtons,
    InlineStyleButtons,
}
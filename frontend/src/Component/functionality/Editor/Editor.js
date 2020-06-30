import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Editor.module.css';
import {Editor, EditorState , RichUtils, ContentState, convertFromRaw, convertToRaw, convertFromHTML, CompositeDecorator} from 'draft-js';
import 'draft-js/dist/Draft.css';
import {BlocksStyleButtons, InlineStyleButtons} from './customEditorSetting/editorSetting';

class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.myBlockRenderer = this.myBlockRenderer.bind(this);
    this.myBlockStyle = this.myBlockStyle.bind(this);
  }

  _onBlockToggle(blockType) {
     this.props.onChange(RichUtils.toggleBlockType(this.props.editorState, blockType));
  }

  _onInlineToggle(inlineStyle){
    this.props.onChange(RichUtils.toggleInlineStyle(this.props.editorState, inlineStyle));
  }

  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    // if (newState) {
      this.props.onChange(newState);
    //   return 'handled';
    // }

    return 'not-handled';
  }

  myBlockStyle(contentBlock){
    const type = contentBlock.getType();
    if(type === 'blockquote'){
      return classes.blockquote;
    }
  }

    myBlockRenderer(contentBlock) {
    const type = contentBlock.getType();

    // if (type === 'atomic') {
    //   return {
    //     component: MediaComponent,
    //     editable: false,
    //     props: {
    //       foo: 'bar',
    //     },
    //   };
    // }
  }


  render() {
    return (
    <div id="content">
        <BlocksStyleButtons
            class={classes.styleButton}
            onToggle={this._onBlockToggle.bind(this)} />
        <InlineStyleButtons
            class={classes.styleButton}
            onToggle={this._onInlineToggle.bind(this)} />
    <div className={classes.editorRoot}>  
        <Editor 
        readOnly={this.props.isReadOnly}
        blockRendererFn={this.myBlockRenderer}
        blockStyleFn={this.myBlockStyle}
        editorState={this.props.editorState}
        onChange={this.props.onChange}
        handleKeyCommand={this.handleKeyCommand }
        />
    </div>
    </div>
    );
  }

  
}

export default MyEditor;
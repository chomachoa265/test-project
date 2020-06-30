import React, {Component} from 'react';
import classes from './AddPost.module.css';
import MyEditor from './../Editor/Editor';
import axios from 'axios'
import {EditorState, convertToRaw} from 'draft-js';
import Cookies from 'js-cookie';
class AddPost extends Component {
    constructor(){
        super();
        this.state = {editorState: EditorState.createEmpty()};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        var token = Cookies.get('csrftoken');
        axios.defaults.withCredentials = true
        var config = {
            headers: {
                "X-CSRFTOKEN": token
            },
            withCredentials: true        
        };
        let formdata = new FormData();
        const [title, image, abstract ]= e.target
        console.log(convertToRaw(this.state.editorState.getCurrentContent()));
        const editordata = JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent()));
        formdata.append("title", title.value);
        formdata.append("file", image.files[0], image.files[0].name);
        formdata.append("abstract",  abstract.value);
        formdata.append("content", editordata);
        formdata.append("csrfmiddlewaretoken", token)
        console.log(formdata)
        axios.post("http://localhost:8000/content/upload", formdata, config)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    onChange(editorState){
        console.log("triggered")
        this.setState({
          editorState
        });
      }

    render(){
        return (
        <form method="post" className={classes.addPost} encType="multipart/form-data" onSubmit={this.handleSubmit}>
            <label for="title">Title</label>
            <input type="text" id="title" minLength="1" maxLength="70" placeholder="enter your title" /><br/>
            <label for="Image">Cover Image</label>
            <input type="file" id="image"  accept="image/*" />
            <label for="abstract">Abstract</label>
            <textarea id="abstract" />
            <label for="editor">Content</label>
            <MyEditor isReadOnly={false}
                                editorState={this.state.editorState } 
                                onChange={this.onChange} />
            <button>submit</button>
        </form>
        )
    }
}


export default AddPost;
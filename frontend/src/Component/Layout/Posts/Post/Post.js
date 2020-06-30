import React, {Component} from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import classes from './Post.module.css';
import Myeditor from './../../../functionality/Editor/Editor'
import {EditorState, convertFromRaw} from'draft-js'
class Post extends Component {
    constructor(props){
        super(props);
        this.state={
            post: {},
        };
    }

    componentDidMount(){
        const id = this.props.match.params.handle;
        var config = {
            headers: {
                "X-CSRFTOKEN": Cookies.get('csrftoken'),
            },
            withCredentials: true
        };
        console.log(config)
        axios.get(`http://127.0.0.1:8000/content/${id}`, config)
            .then(response => {
                this.setState({
                    post: response.data
                })
        })
            .catch(err => console.log(err));
    }
    render(){
        const contentState = this.state.post.content ? convertFromRaw(JSON.parse(this.state.post.content)) : null
        const editorState = contentState ? EditorState.createWithContent(contentState) : null
        return (
            <div className={classes.post}>
                <div className={classes.title}>
                    {this.state.post.title}
                </div>
                <div className={classes.coverimage}>
                    <img src={`http://127.0.0.1:8000${this.state.post.cover_imageurl}`} />
                </div>
                <div className={classes.abstract}>
                    {this.state.post.abstract}
                </div>
                <div className={classes.content}>
                    <Myeditor 
                        isReadOnly={true} 
                        editorState={editorState ? editorState : EditorState.createEmpty() }/>
                </div>
            </div>
        )
    }
}

export default Post;
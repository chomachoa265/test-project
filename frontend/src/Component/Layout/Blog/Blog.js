import React, {Component} from 'react';
import classes from './Blog.module.css';
import Header from './../Header/Header';
import Posts from './../Posts/Posts';
import AddPost from '../../functionality/AddPost/AddPost';
import Post from './../Posts/Post/Post'
import {BrowserRouter, Route} from 'react-router-dom';
class Blog extends Component {
    constructor() {
        super();
        this.state = {
            userID: null,
            isLogin: false,
        };
    }

    onLoginListener(e){
        let allcookies = document.cookie;
        console.log(allcookies);
        this.setState({
            isLogin: true
        });
    }

    render(){
        return (
            <BrowserRouter>
                <div className={classes.Blog}>
                    <Header isLogin={this.state.isLogin} onClick={(e)=> this.onLoginListener(e)} />
                    <Route path="/post" exact component={Posts}  />
                    <Route path="/post/:handle" component={Post} />
                    <Route path="/add-post" exact component={AddPost} />
                </div>
            </BrowserRouter>
        )
    }

}

export default Blog;
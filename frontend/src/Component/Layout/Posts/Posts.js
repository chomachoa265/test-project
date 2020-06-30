import React,{ Component }from 'react'
import classes from './Posts.module.css';
import PostCard from './PostCard/PostCard'
import axios from 'axios'
import Cookies from 'js-cookie';
class Posts extends Component {
    constructor(){
        super();
        this.state={
            posts: [
            ],
        }
    }

    componentDidMount(){
        var config = {
            withCredentials: true
        }
        console.log("[ Posts ] DidMount")
        axios.get("http://localhost:8000/content/",config)
        .then(response => {
            this.setState({
                posts: response.data
            })
        })
        .catch(error => console.log(error))
    }

    render(){
        const postcards = this.state.posts.map( (post, i) => {
            return <PostCard 
                            key={i} 
                            id={post.id}
                            author={post.author_name} 
                            title={post.title} 
                            content={post.abstract} />
        })
        return (
        <div className={classes.Body}>
            <div className={classes.PostHeader}>
                <h3>Recently Added</h3>
                <span className={classes.PostHeaderConfig}></span>
            </div>
            <div className={classes.Posts}>
                {postcards}
            </div>
        </div>
        )
    }
}



export default Posts;
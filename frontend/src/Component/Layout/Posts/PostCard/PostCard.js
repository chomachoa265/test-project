import React ,{Component} from 'react'
import classes from './PostCard.module.css'
import userLogo from './../../../../asset/life-buoy.svg'
import Link from 'react-router-dom';
class PostCard extends Component{
    constructor(props){
        super(props);
        this.state= {
        }
        this.loadedHandler = this.loadedHandler.bind(this);
        this.cardClickHandler = this.cardClickHandler.bind(this);
    }

    loadedHandler(e){
        console.log(e.target.offsetWidth)
    }
    cardClickHandler(e){
        
    }
    render(){
        return (
            
            <div className={classes.PostCard}>
                <div className={classes.PostCardHeader}>
                    <img  src={userLogo} alt="" onLoad={this.loadedHandler}/>
                    <span>{this.props.author}</span>
                    <span style={{color:"gray"}}>3, May, 2015</span>
                </div>
                <div className={classes.PostCardBody}>
                    <div className={classes.PostInfo}>
                        <div className={classes.PostTitle}>{this.props.title}</div>
                        <div className={classes.PostContent}>{this.props.content}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostCard;
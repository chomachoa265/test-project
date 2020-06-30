import React from 'react';
import classes from './Header.module.css'
import {Link} from 'react-router-dom'
const header  = (props) => {
    const LoginItems = props.isLogin ? 
        <span>Member Icon</span> :
        <input  type="button" value="Login"  onClick={props.onClick}/> ;
        
    return (
        <div className={classes.header}>
            <div className={classes.headerLogo}> 
                <span>consoleLog</span>
            </div>
            <nav className={classes.navBar}>
                <Link to="/post"><ul>Articles</ul></Link>
                <Link to="/add-post"><ul>Write</ul></Link>
                {LoginItems}
                <img src="http://127.0.0.1:8000/media/user.png" />
            </nav>
        </div>
    )
}


export default header ;
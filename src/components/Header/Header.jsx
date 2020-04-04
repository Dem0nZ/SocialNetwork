import React from 'react';
import classes from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return <header className={classes.header}>
        <img alt='' src='http://pngimg.com/uploads/intel/intel_PNG25.png' />
        <div className={classes.login_block}>
            { props.isAuth
                ? <div>{props.login} - <button onClick={props.logout} >Logout</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>;
}

export default Header;
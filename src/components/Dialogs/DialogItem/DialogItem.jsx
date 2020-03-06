import React from 'react';
import classes from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {

    return <div className={classes.chats + ' ' + classes.active}>
        <img alt='' src='https://liveopencart.ru/image/cache/data/products/coverreview-400x400.jpg'></img>
        <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>;
}

export default DialogItem;
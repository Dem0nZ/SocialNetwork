import React from 'react';
import classes from './../Dialogs.module.css';

const Message = (props) => {
    return <div className={props.isCurrentUser ? classes.myDialog : classes.dialog}>
        <div><img src='https://liveopencart.ru/image/cache/data/products/coverreview-400x400.jpg'></img></div>
        <div>{props.message}</div>
    </div>
}


export default Message;
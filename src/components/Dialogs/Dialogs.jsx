import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'MaxPes'},
        {id: 2, name: 'Pavelexus'},
        {id: 3, name: 'Kalem'},
        {id: 4, name: 'Sanek'},
        {id: 5, name: 'Luxur'},
        {id: 6, name: 'BatulinS'},
    ]


    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id}/> );


    let messages = [
        {id: 1, message: 'Hi.'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'pepegaaaa'},
        {id: 4, message: 'I don\'t know'},
        {id: 5, message: 'YoYo'},
        {id: 6, message: 'psina lohmataya'},
    ]

    let messagesElements = messages.map( m => <Message message={m.message}/> );

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;
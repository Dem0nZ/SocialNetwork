import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} isCurrentUser={m.userId === props.userId}/>);
    let newDialogText = state.newDialogText;

    let addMessage = () => {
        if (newDialogText){
            props.addMessage();
        }

    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessage(text);
    }

    return (<div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={classes.messages}>
                    {messagesElements}
                    </div>
                    <div><textarea placeholder='Введите сообщение' value={newDialogText}
                                   onChange={onMessageChange}/></div>
                    <div>
                        <button onClick={addMessage}>Message</button>
                    </div>
                </div>
            </div>
    )
}

export default Dialogs;
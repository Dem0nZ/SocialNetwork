import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map(m => <Message message={m.message} isCurrentUser={m.userId === props.userId}/>);
    let textMessage = React.createRef();

    let addMessage = () => {
        if (textMessage.current.value) {
            props.addMessage();
        }

    }

    let onMessageChange = () => {
        let text = textMessage.current.value;
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
                    <div><textarea placeholder='Введите сообщение' ref={textMessage} value={props.newDialogText}
                                   onChange={onMessageChange}/></div>
                    <div>
                        <button onClick={addMessage}>Message</button>
                    </div>
                </div>
            </div>
    )
}

export default Dialogs;
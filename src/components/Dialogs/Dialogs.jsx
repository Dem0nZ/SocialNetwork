import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message} isCurrentUser={m.userId === props.state.userId}/>);
debugger
    let textMessage = React.createRef();

    let addMessage = () => {
        if (textMessage.current.value){
            props.addMessage();
        }

    }

    let onMessageChange =() => {
        let text = textMessage.current.value;
        props.updateNewMessageText(text);
    }

    return (<div>
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
            <div className={classes.addMessage}>
                <textarea ref={textMessage} value={props.state.newDialogText} onChange={onMessageChange}/>
                <button onClick={addMessage} >Message</button>
            </div>
        </div>
    )
}

export default Dialogs;
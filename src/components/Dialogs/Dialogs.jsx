import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogsReducer";




const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message} isCurrentUser={m.userId === props.state.userId}/>);
    let textMessage = React.createRef();

    let addMessage = () => {
        if (textMessage.current.value){
            props.dispatch(addMessageActionCreator());
        }

    }

    let onMessageChange =() => {
        let text = textMessage.current.value;
        let action = updateNewMessageActionCreator(text);
        props.dispatch(action);
    }

    return (<div>
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>
                    {messagesElements}
                </div>
                <div><textarea placeholder='Введите сообщение' ref={textMessage} value={props.state.newDialogText} onChange={onMessageChange}/></div>
                <div><button onClick={addMessage} >Message</button></div>
            </div>
        </div>
        </div>
    )
}

export default Dialogs;
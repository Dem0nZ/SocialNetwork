import React from 'react';
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState();


    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (text) => {
        let action = updateNewMessageActionCreator(text);
        props.store.dispatch(action);
    }

    return ( <Dialogs addMessage={addMessage} updateNewMessage={onMessageChange} dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages} userId={state.dialogsPage.userId} newDialogText={state.dialogsPage.newDialogText}/> )
}

export default DialogsContainer;
import React from 'react';
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState().dialogsPage;

                let addMessage = () => {
                    store.dispatch(addMessageActionCreator());
                }

                let onMessageChange = (text) => {
                    let action = updateNewMessageActionCreator(text);
                    store.dispatch(action);
                }

                return <Dialogs addMessage={addMessage}
                                updateNewMessage={onMessageChange}
                                dialogs={state.dialogs}
                                messages={state.messages}
                                userId={state.userId}
                                newDialogText={state.newDialogText}/>
            }
        }
    </StoreContext.Consumer>
}


export default DialogsContainer;
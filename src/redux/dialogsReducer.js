const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 7,
                message: state.newDialogText,
                userId: 1
            };
            state.messages.push(newMessage);
            state.newDialogText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newDialogText = action.newMess;
            return state;
        default:
            return state;

    }
}

export let addMessageActionCreator = () => ({type:ADD_MESSAGE})
export let updateNewMessageActionCreator = (text) => ({type:UPDATE_NEW_MESSAGE_TEXT, newMess: text})

export default dialogsReducer;
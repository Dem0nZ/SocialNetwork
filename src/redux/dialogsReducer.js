const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initialState = {
    userId: 1,
    messages: [
        {id: 1, userId: 1, message: 'Hi.'},
        {id: 2, userId: 2, message: 'Howf are you?'},
        {id: 3, userId: 1, message: 'prtgrepegaaaa'},
        {id: 4, userId: 1, message: 'I don\'t know'},
        {id: 5, userId: 2, message: 'YoYo'},
        {id: 6, userId: 2, message: 'psina lohmataya'}

    ],
    dialogs: [
        {id: 1, name: 'MaxPes'},
        {id: 2, name: 'Pavelexus'},
        {id: 3, name: 'Kalem'},
        {id: 4, name: 'Sanek'},
        {id: 5, name: 'Luxur'},
        {id: 6, name: 'BatulinS'}
    ],
    newDialogText: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let message= state.newDialogText;
            return {
                ...state,
                newDialogText: '',
                messages: [...state.messages, {id: 7, userId: 1, message: message}]
            };
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newDialogText: action.newMess
            };
        }

        default:
            return state;

    }
}


export let addMessageActionCreator = () => ({type: ADD_MESSAGE})
export let updateNewMessageActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMess: text})

export default dialogsReducer;
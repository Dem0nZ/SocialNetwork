const ADD_MESSAGE = 'ADD_MESSAGE';

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
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let message= action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 7, userId: 1, message: message}]
            };
        }
        default:
            return state;

    }
}


export let addMessageActionCreator = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody})

export default dialogsReducer;
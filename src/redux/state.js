import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store ={
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likeCounts: '14'},
                {id: 2, message: 'It\'s my first post', likeCounts: '2'},
                {id: 3, message: 'pepegaaaa', likeCounts: '18'},
                {id: 4, message: 'Maks pes', likeCounts: '99'}
            ],
            newPostText: ''
        },
        dialogsPage: {
            userId: 1,
            messages: [
                {id: 1, userId: 1, message: 'Hi.'},
                {id: 2, userId: 2, message: 'How are you?'},
                {id: 3, userId: 1, message: 'pepegaaaa'},
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
        }

    },
    _callSubscriber () {
        console.log('state was changet')
    },

    getState () {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
}




export default store;
window.store = store;
let rerenderEntireTree =() => {
    console.log('state was changet')
}

let state = {
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

}

export const addPost = () =>{
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCounts: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) =>{
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const addMessage = () =>{
    let newMessage = {
        id: 7,
        message: state.dialogsPage.newDialogText,
        userId: 1
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newDialogText = '';
    debugger;
    rerenderEntireTree(state);
}

export const updateNewMessageText = (newMess) => {
    state.dialogsPage.newDialogText = newMess;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;   //observer
}

export default state;
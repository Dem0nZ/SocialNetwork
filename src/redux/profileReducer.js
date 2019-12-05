const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCounts: '14'},
        {id: 2, message: 'It\'s my first post', likeCounts: '2'},
        {id: 3, message: 'pepegaaaa', likeCounts: '18'},
        {id: 4, message: 'Maks pes', likeCounts: '99'}
    ],
        newPostText: ''
};


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCounts: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = (text) => ({type:UPDATE_NEW_POST_TEXT, newText:text})

export default profileReducer;
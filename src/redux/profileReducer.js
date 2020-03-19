import {profileAPI} from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCounts: '14'},
        {id: 2, message: 'It\'s my first post', likeCounts: '2'},
        {id: 3, message: 'pepegaaaa', likeCounts: '18'},
        {id: 4, message: 'And how are you?', likeCounts: '99'}
    ],
    newPostText: '',
    profile: null
};


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCounts: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };

        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        default:
            return state;

    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const updateNewPostActionCreator = (text) => ({type:UPDATE_NEW_POST_TEXT, newText:text})

export const getUserInfo = (user) => {
    return (dispatch) => {
        let userId = user;
        if (!userId) {
            userId = 2;
        }
        profileAPI.getUserInfo(userId).then(data => {
            dispatch(setUserProfile(data));
        });
    }
}

export default profileReducer;
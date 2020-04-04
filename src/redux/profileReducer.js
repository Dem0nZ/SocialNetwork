import {profileAPI} from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCounts: '14'},
        {id: 2, message: 'It\'s my first post', likeCounts: '2'},
        {id: 3, message: 'pepegaaaa', likeCounts: '18'},
        {id: 4, message: 'And how are you?', likeCounts: '99'}
    ],
    profile: null,
    status: ''
};


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likeCounts: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
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

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserInfo = (user) => {
    return (dispatch) => {
        let userId = user;
        if (!userId) {
            userId = 2;
        }
        profileAPI.getUserInfo(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            });
    }
}
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        });
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
}

export default profileReducer;
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [/*
        {id:1, followed: true, avatar: 'https://placeit-assets1.s3-accelerate.amazonaws.com/custom-pages/avatar-maker/twitch-avatar-maker-for-a-gaming-channel-1458c.png',
            fullName: 'Aleksey', status: 'I\'m in your mind', location: {city: 'St.Petersburg', country: 'Russia'}  },
        {id:1, followed: false, avatar: 'https://placeit-assets1.s3-accelerate.amazonaws.com/custom-pages/avatar-maker/twitch-avatar-maker-for-a-gaming-channel-1458c.png',
            fullName: 'Iliya', status: 'The best in all', location: {city: 'Orel', country: 'Russia'}  },
        {id:1, followed: true, avatar: 'https://placeit-assets1.s3-accelerate.amazonaws.com/custom-pages/avatar-maker/twitch-avatar-maker-for-a-gaming-channel-1458c.png',
            fullName: 'Misha K.', status: 'Do you listen me?', location: {city: 'Minsk', country: 'Belarus'}  },
    */]
};


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;

    }
}


export const followActionCreator = (userId) => ({type: FOLLOW, userId})
export const unfollowActionCreator = (userId) => ({type:UNFOLLOW, userId})
export const setUsersActionCreator = (users) => ({type: SET_USERS, users})

export default userReducer;
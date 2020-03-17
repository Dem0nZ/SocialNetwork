import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": "df7a298c-c72e-4b8e-9c23-9ea36009f51d"}
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data);
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`).then(response => response.data);
    }
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`).then(response => response.data);
    }
}

export const profileAPI = {
    getUserInfo(userId) {
        return instance.get(`auth/profile/${userId}`).then(response => response.data);
    }
}




import React from 'react';
import classes from './Users.module.css';
import {connect} from 'react-redux';
import Users from './Users';
import {
    followActionCreator,
    setCurrentPageActionCreator, setTotalUsersActionCreator,
    setUsersActionCreator,
    unfollowActionCreator
} from '../../redux/usersReducer';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageActionCreator(pageNumber))
        },
        setTotalUsersCount: (totalUsers) => {
            dispatch(setTotalUsersActionCreator(totalUsers))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);
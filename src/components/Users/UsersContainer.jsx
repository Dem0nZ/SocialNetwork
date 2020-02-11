import React from 'react';
import {connect} from 'react-redux';
import { follow, setCurrentPage, setFetching, setTotalUsers, setUsers, unfollow } from '../../redux/usersReducer';
import * as axios from 'axios';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsers(response.data.totalCount);
            });
    }

    clickPageChange = (page) => {
        this.props.setCurrentPage(page) ;
        this.props.setFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setFetching(false);
                this.props.setUsers(response.data.items)
            });
    };

    render() {


        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      clickPageChange={this.clickPageChange}
                      unfollow={this.props.unfollow}
                      follow={this.props.follow}
        />
        </>
    }
}



let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

/*let mapDispatchToProps = (dispatch) => {
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
        },
        setFetching: (isFetching) => {
            dispatch(setFetchingActionCreator(isFetching))
        }
    }
}*/


export default connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalUsers, setFetching })(UsersContainer);
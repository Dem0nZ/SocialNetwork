import React from 'react';
import {connect} from 'react-redux';
import { follow, setCurrentPage, setFetching, setTotalUsers, setUsers, unfollow } from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {usersAPI} from '../../api/api';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.setFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsers(data.totalCount);
            });
    }

    clickPageChange = (page) => {
        this.props.setCurrentPage(page) ;
        this.props.setFetching(true);
        usersAPI.getUsers(page, this.props.pageSize).then(data => {
                this.props.setFetching(false);
                this.props.setUsers(data.items)
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



export default connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalUsers, setFetching })(UsersContainer);
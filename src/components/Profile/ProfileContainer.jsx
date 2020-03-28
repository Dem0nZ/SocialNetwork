import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserInfo, setUserProfile} from '../../redux/profileReducer';
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getUserInfo(this.props.match.params.userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default compose(
    connect(mapStateToProps, {setUserProfile, getUserInfo}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

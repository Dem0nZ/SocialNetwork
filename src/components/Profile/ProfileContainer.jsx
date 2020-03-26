import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserInfo, setUserProfile} from '../../redux/profileReducer';
import {Redirect, withRouter} from 'react-router-dom';

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getUserInfo(this.props.match.params.userId);
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'} />;

        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

let WithUrlDataComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {setUserProfile, getUserInfo})(WithUrlDataComponent);

import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {MyInput} from '../common/FormsControls/FormsControls';
import {maxLengthCreator, required} from '../../utils/validators/validators';
import {connect} from 'react-redux';
import {login} from '../../redux/authReducer';
import {Redirect} from 'react-router-dom';

const maxLength30 = maxLengthCreator(30);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field placeholder={'Email'}
                       validate={[required, maxLength30]}
                       name={'email'}
                       component={MyInput} />
            </div>
            <div>
                <Field placeholder={'Password'}
                       validate={[required]}
                       name={'password'}
                       type={'password'}
                       component={MyInput} />
            </div>
            <div>
                <Field component={MyInput}
                       name={'rememberMe'}
                       type={'checkbox'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'}) (LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>


}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})


export default connect( mapStateToProps, {login} )(Login);
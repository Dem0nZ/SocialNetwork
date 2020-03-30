import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import {TextArea} from '../common/FormsControls/FormsControls';
import {maxLengthCreator, required} from '../../utils/validators/validators';


const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} isCurrentUser={m.userId === props.userId}/>);


    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Redirect to={'/login'} />;

    return (<div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={classes.messages}>{messagesElements} </div>
                <AddMessageFormRedux onSubmit={addNewMessage} />
                </div>
            </div>
    )
}

let maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field component={TextArea}
                       validate={[required, maxLength100]}
                       name={'newMessageBody'}
                       placeholder='Введите сообщение'/>
            </div>
            <div>
                <button>Message</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form:'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;
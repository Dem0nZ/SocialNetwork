import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';


const mapStateToProps =(state) =>{
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps =(dispatch)=>{
    return {
        addMessage: ()=>{
            dispatch(addMessageActionCreator());
        },
        updateNewMessage: (text)=>{
            dispatch(updateNewMessageActionCreator(text));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Dialogs);
import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../utils/validators/validators';
import {TextArea} from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10)

const MyPosts = (props) => {
    let postElements = props.posts.map(p => <Post message={p.message} likeCounts={p.likeCounts} key={p.id}/>);

    let addPost = (values) => {
        props.addPost(values.newPostText);
    }


    return <div className={classes.postBlock}>
        <h2>My posts</h2>
        <PostReduxForm onSubmit={addPost}/>
        <div className={classes.posts}>
            {postElements}
        </div>
    </div>;
}

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'newPost'} name={'newPostText'} component={TextArea} validate={[required, maxLength10]} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
const PostReduxForm = reduxForm({form: 'profileAddNewPostForm'})(PostForm)

export default MyPosts;

import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';


const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field placeholder = {'newPost'} name={'newPost'} component={'textarea'} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )}
const PostReduxForm = reduxForm({form: 'newPost'}) (PostForm)


const MyPosts = (props) => {
    let postElements = props.posts.map(p => <Post message={p.message} likeCounts={p.likeCounts} key={p.id}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        if (newPostElement.current.value) {
            props.addPost();
        }
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    const onSubmit = (formData) => {
        console.log(formData);
    }

    return <div className={classes.postBlock}>
        <h2>My posts</h2>
        <div>
            <div>
                <textarea placeholder='Что нового амиго?' onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <button onClick={addPost}>Add post</button>
            <button>Remove</button>
        </div>

        <PostReduxForm onSubmit={onSubmit}/>

        <div className={classes.posts}>
            {postElements}
        </div>
    </div>;
}

export default MyPosts;
MyPosts.propTypes = {
    posts: PropTypes.array
}

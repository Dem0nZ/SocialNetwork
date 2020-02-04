import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import PropTypes from 'prop-types';


const MyPosts = (props) => {
    let postElements = props.posts.map(p => <Post message={p.message} likeCounts={p.likeCounts}/>);

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

    return <div className={classes.postBlock}>
        <h2>My posts</h2>
        <div>
            <div>
                <textarea placeholder='Что нового амиго?' onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <button onClick={addPost}>Add post</button>
            <button>Remove</button>
        </div>
        <div className={classes.posts}>
            {postElements}
        </div>
    </div>;
}

export default MyPosts;
MyPosts.propTypes = {
    posts: PropTypes.array
}

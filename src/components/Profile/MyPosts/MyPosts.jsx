import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import PropTypes from 'prop-types';

const MyPosts = (props) => {

    let postElements = props.posts.map(p => <Post message={p.message} likeCounts={p.likeCounts}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
       props.addPost(text);
    }

    return <div className={classes.postBlock}>
        <h2>My posts</h2>
        <div>
            <div>
                <textarea ref={newPostElement}></textarea>
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
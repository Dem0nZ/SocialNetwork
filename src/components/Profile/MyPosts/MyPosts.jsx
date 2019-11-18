import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postElements = props.posts.map(p => <Post message={p.message} likeCounts={p.likeCounts}/>);

    return <div className={classes.postBlock}>
        <h2>My posts</h2>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <button>Add post</button>
            <button>Remove</button>
        </div>
        <div className={classes.posts}>
            {postElements}
        </div>
    </div>;
}

export default MyPosts;
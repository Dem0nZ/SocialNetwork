import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let posts = [
        {id: 1, message: 'Hi, how are you?', likeCounts: '14'},
        {id: 2, message: 'It\'s my first post', likeCounts: '2'},
        {id: 3, message: 'pepegaaaa', likeCounts: '18'},
        {id: 4, message: 'Maks pes', likeCounts: '99'}
    ]

    let postElements = posts.map(p => <Post message={p.message} likeCounts={p.likeCounts}/>);

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
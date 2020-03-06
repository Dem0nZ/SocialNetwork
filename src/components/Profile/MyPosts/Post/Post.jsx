import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return <div className={classes.item}>
          <img alt='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVWG-uRlCt9H4gLGu8vNMQCHbYllbsW2RYbGYYIz0wgPPXC4J&s'></img>
          { props.message }
          <div> <span>Like</span> { props.likeCounts }</div>         

        </div>;
}

export default Post;
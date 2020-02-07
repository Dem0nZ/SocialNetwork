import React from 'react';
import styles from './Users.module.css';

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {id:1, followed: true, avatar: 'https://placeit-assets1.s3-accelerate.amazonaws.com/custom-pages/avatar-maker/twitch-avatar-maker-for-a-gaming-channel-1458c.png',
                fullName: 'Aleksey', status: 'I\'m in your mind', location: {city: 'St.Petersburg', country: 'Russia'}  },
            {id:2, followed: false, avatar: 'https://placeit-assets1.s3-accelerate.amazonaws.com/custom-pages/avatar-maker/twitch-avatar-maker-for-a-gaming-channel-1458c.png',
                fullName: 'Iliya', status: 'The best in all', location: {city: 'Orel', country: 'Russia'}  },
            {id:3, followed: true, avatar: 'https://placeit-assets1.s3-accelerate.amazonaws.com/custom-pages/avatar-maker/twitch-avatar-maker-for-a-gaming-channel-1458c.png',
                fullName: 'Misha K.', status: 'Do you listen me?', location: {city: 'Minsk', country: 'Belarus'}  }
           ]
        )
    }


    return <div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <img className={styles.avatar} src={user.avatar}/>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={ () => { props.unfollow(user.id) } }>Unfollow</button>
                                : <button onClick={ () => { props.follow(user.id) } }>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.fullName}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{user.location.country}</div>
                            <div>{user.location.city}</div>
                        </span>
                    </span>
                </div>)
            }

    </div>;
}

export default Users;
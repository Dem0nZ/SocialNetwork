import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img alt=''
                    src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'/>
            </div>
            <div className={classes.descriptionBlock}>
                <img alt='' src={props.profile.photos.large}/>
                <div>Полное имя: {props.profile.fullName}</div>
                <div>Обо мне:{props.profile.aboutMe}</div>
                <div>Ищу работу: {props.profile.lookingForAJob?'да':'нет'}</div>
            </div>
        </div>
    )
}

export default ProfileInfo;
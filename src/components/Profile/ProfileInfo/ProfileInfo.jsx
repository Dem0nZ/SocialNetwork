import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={classes.descriptionBlock}>
                <div>
                    <img alt='' src={props.profile.photos.large}/>
                </div>
                <div>
                    <div>
                    <ProfileStatus status={props.status} />
                    </div>
                    <div>
                        Полное имя: {props.profile.fullName}
                    </div>
                    <div>
                        Обо мне:{props.profile.aboutMe}
                    </div>
                    <div>
                        Ищу работу: {props.profile.lookingForAJob ? 'да' : 'нет' }
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ProfileInfo;
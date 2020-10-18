import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img className={s.profimg} src={props.profile.photos.large}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
                <div>{props.profile.contacts.vk}</div>
            </div>
        </div>
    )
}

export default ProfileInfo;
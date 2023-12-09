import React from 'react';
import s from './ProfilePhoto.module.css'
import defaultPhoto from "../../../../../assets/images/user-avatar-default.jpg";
import {EditPhoto} from "./EditPhoto/EditPhoto";
import {useSelector} from "react-redux";
import {selectProfile} from "../../../../../store/profile/profile-selectors";

type ProfilePhotoPropsType = {
    isOwner: boolean
}

const ProfilePhoto: React.FC<ProfilePhotoPropsType> = ({
                                                           isOwner
                                                       }) => {
    const profile = useSelector(selectProfile)
    if (!profile) return <></>
    return (
        <div>
            <img src={profile.photos.large || defaultPhoto}
                 alt="user_photo"
                 className={s.photo}
            />
            {isOwner
                &&
                <EditPhoto/>
            }
        </div>
    );
};

export default ProfilePhoto;
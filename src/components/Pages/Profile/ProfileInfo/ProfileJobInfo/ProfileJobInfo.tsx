import React from 'react';
import s from './ProfileJobInfo.module.css'
import {useSelector} from "react-redux";
import {selectProfile} from "../../../../../store/profile/profile-selectors";

const ProfileJobInfo = () => {
    const profile = useSelector(selectProfile)
    if (!profile) return <></>
    return (
        <div className={s.container}>
            <span>Looking for a job:
                <span className={s.empty}>
                    {profile.lookingForAJob || ' empty'}
                </span>
            </span>
            <span>Looking for a job description:
                <span>
                    {profile.lookingForAJobDescription || <span className={s.empty}> empty</span>}
                </span>
            </span>
        </div>
    );
};

export default ProfileJobInfo;
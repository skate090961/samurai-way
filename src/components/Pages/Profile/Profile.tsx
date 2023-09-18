import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import MyProfile from "./MyProfile/MyProfile";
import {ProfilePageType} from "../../../state/state";

type ProfilePropsType = {
    profileData: ProfilePageType
}

const Profile: React.FC<ProfilePropsType> = ({
                                                 profileData
                                             }) => {
    return (
        <main className={s.main}>
            <MyProfile/>
            <MyPosts postsData={profileData.posts}/>
        </main>
    );
};

export default Profile;
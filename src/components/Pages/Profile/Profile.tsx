import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import MyProfile from "./MyProfile/MyProfile";
import {ProfilePageType} from "../../../store/reducers/profile-reducer/profile-reducer";

type ProfilePropsType = {
    profileData: ProfilePageType
    dispatch: (action: any) => void
}

const Profile: React.FC<ProfilePropsType> = ({
                                                 profileData,
                                                 dispatch
                                             }) => {
    return (
        <main className={s.main}>
            <MyProfile/>
            <MyPosts
                postsData={profileData.posts}
                newPostText={profileData.newPostText}
                dispatch={dispatch}
            />
        </main>
    );
};

export default Profile;
import React from 'react';
import s from './Profile.module.css'
import MyProfile from "./MyProfile/MyProfile";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {
    return (
        <main className={s.main}>
            <MyProfile/>
            <MyPostsContainer />
        </main>
    );
};

export default Profile;
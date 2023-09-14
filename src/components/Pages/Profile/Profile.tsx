import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import MyProfile from "./MyProfile/MyProfile";

const Profile = () => {
    return (
        <main className={s.main}>
            <MyProfile/>
            <MyPosts/>
        </main>
    );
};

export default Profile;
import React from 'react';
import s from './Profile.module.css'
import MyProfile from "./MyProfile/MyProfile";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <main className={s.main}>
            <MyProfile/>
            <MyPosts/>
        </main>
    );
};

export default Profile;
import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import MyProfile from "./MyProfile/MyProfile";
import {ProfilePageType} from "../../../state/state";

type ProfilePropsType = {
    profileData: ProfilePageType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

const Profile: React.FC<ProfilePropsType> = ({
                                                 profileData,
                                                 addPost,
                                                 updateNewPostText
                                             }) => {
    return (
        <main className={s.main}>
            <MyProfile/>
            <MyPosts
                postsData={profileData.posts}
                newPostText={profileData.newPostText}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
            />
        </main>
    );
};

export default Profile;
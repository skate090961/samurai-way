import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {v1} from "uuid";

const MyPosts = () => {
    const myPosts = [
        {
            id: v1(),
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            likes: 17
        },
        {
            id: v1(),
            message: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            likes: 9
        },
    ]
    const myPostsList = myPosts.map(mp => <Post key={mp.id} id={mp.id} message={mp.message} likesCount={mp.likes}/>)

    return (
        <div className={s.myPosts}>
            <div className={s.myPosts__form}>
                <div className={s.myPosts__fill}>
                    <img className={s.myPosts__avatar}
                         src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Prescription02&hairColor=Platinum&facialHairType=BeardMajestic&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Tanned'
                         alt="profile_avatar"/>
                    <textarea className={s.myPosts__textArea} placeholder={'Write something...'} rows={5}></textarea>
                </div>
                <button className={s.myPosts__addPost}>
                    <img className={s.myPosts__icon} src="https://www.svgrepo.com/show/522407/forward.svg" alt="add_post"/>
                    <span className={s.myPosts__text}>Add Post</span>
                </button>
            </div>
            {myPostsList}
        </div>
    );
};

export default MyPosts;
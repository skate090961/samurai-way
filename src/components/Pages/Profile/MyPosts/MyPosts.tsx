import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsType} from "../../../../state/state";

type MyPostsPropsType = {
    postsData: PostsType[]
}

const MyPosts: React.FC<MyPostsPropsType> = ({
                                                 postsData
                                             }) => {

    const postsList = postsData.map(mp => <Post key={mp.id} id={mp.id} message={mp.text} likesCount={mp.likesCount}/>)

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
                    <img className={s.myPosts__icon} src="https://www.svgrepo.com/show/522407/forward.svg"
                         alt="add_post"/>
                    <span className={s.myPosts__text}>Add Post</span>
                </button>
            </div>
            {postsList}
        </div>
    );
};

export default MyPosts;
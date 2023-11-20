import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {
    addPostCreator,
    PostsType,
    updateNewPostTextCreator
} from "../../../../store/reducers/profile-reducer/profile-reducer";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../../../store/reducers/rootReducer";

const MyPosts = () => {
    const dispatch = useDispatch()
    const posts = useSelector<RootStateType, PostsType[]>(state => state.profilePage.posts)
    const newPostText = useSelector<RootStateType, string>(state => state.profilePage.newPostText)

    const addPostHandler = () => {
        dispatch(addPostCreator())
    }
    const changePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewPostTextCreator(e.currentTarget.value))
    }
    const postsList = posts.map(mp =>
        <Post
            key={mp.id}
            id={mp.id}
            message={mp.text}
            likesCount={mp.likesCount}
            date={mp.date}
        />
    )

    return (
        <div className={s.myPosts}>
            <div className={s.myPosts__form}>
                <div className={s.myPosts__fill}>
                    <img className={s.myPosts__avatar}
                         src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Prescription02&hairColor=Platinum&facialHairType=BeardMajestic&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Tanned'
                         alt="profile_avatar"/>
                    <textarea
                        className={s.myPosts__textArea}
                        placeholder={'Write something...'}
                        rows={3}
                        value={newPostText}
                        onChange={changePostHandler}
                    />
                </div>
                <button className={s.myPosts__addPost} onClick={addPostHandler}>
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
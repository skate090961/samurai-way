import React from "react"
import s from "./Post.module.css"

type PostPropsType = {
  id: string
  message: string
  likesCount: number
  date: string
}

const Post: React.FC<PostPropsType> = ({ id, message, likesCount, date }) => {
  return (
    <div className={s.post}>
      <div className={s.post__wrapper}>
        <img
          className={s.post__avatar}
          src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Prescription02&hairColor=Platinum&facialHairType=BeardMajestic&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Tanned"
        />
        <div className={s.post__main}>
          <div className={s.post__text}>{message}</div>
          <div className={s.post__info}>
            <span className={s.post__date}>{date}</span>
            <span className={s.post__likes}>Likes: {likesCount}</span>
          </div>
        </div>
      </div>
      <button className={s.post__button_like}>
        <img className={s.post_icon} src="https://www.svgrepo.com/show/522408/heart.svg" alt="button_like" />
        Like
      </button>
    </div>
  )
}

export default Post

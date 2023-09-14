import React from 'react';
import s from "./MyProfile.module.css";

const MyProfile = () => {
    return (
        <div className={s.MyProfile}>
        <img className={s.MyProfile__img}
             src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
             alt="img"/>
    <div>
        ava + description
    </div>
        </div>
)
    ;
};

export default MyProfile;
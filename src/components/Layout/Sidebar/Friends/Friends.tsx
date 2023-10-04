import React from 'react';
import s from './Friends.module.css'
import Friend from "./Friend/Friend";
import {FriendsType} from "../../../../store/reducers/sidebar-reducer/sidebar-reducer";

type FriendsPropsType = {
    friendsData: FriendsType[]
}

const Friends: React.FC<FriendsPropsType> = ({
                                                 friendsData
                                             }) => {
    const friendsList = friendsData.map(f =>
        <Friend
            key={f.id}
            id={f.id}
            name={f.name}
            avatar={f.avatar}
        />
    )
    return (
        <div className={s.friends}>
            <span className={s.friends__title}>Friends</span>
            <ul className={s.friends__container}>
                {friendsList}
            </ul>
        </div>
    );
};

export default Friends;
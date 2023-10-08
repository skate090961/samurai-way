import React from 'react';
import s from './Friends.module.css'
import Friend from "./Friend/Friend";
import {useSelector} from "react-redux";
import {FriendsType} from "../../../../store/reducers/sidebar-reducer/sidebar-reducer";
import {RootReducerType} from "../../../../store/reducers/rootReducer";

type FriendsPropsType = {}

const Friends: React.FC<FriendsPropsType> = ({}) => {
    const friends = useSelector<RootReducerType, FriendsType[]>(state => state.sidebar.friends)

    const friendsList = friends.map(f =>
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
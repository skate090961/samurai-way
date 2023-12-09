import React, {useState} from 'react';
import s from './ProfileActions.module.css'
import FollowButton from "../../../../UI/FollowButton/FollowButton";
import MessageButton from "../../../../UI/MessageButton/MessageButton";
import {toggleFollowTC} from "../../../../../store/users/users-thunks";
import {useAppDispatch} from "../../../../../store/store";
import {ProfileResponseType} from "../../../../../api/profile-api";
import {useSelector} from "react-redux";
import {selectIsFollow, selectProfile} from "../../../../../store/profile/profile-selectors";

type ProfileActionsPropsType = {
    isOwner: boolean
    userId: string | undefined
}

const ProfileActions: React.FC<ProfileActionsPropsType> = ({
                                                               isOwner,
                                                               userId
                                                           }) => {
    const dispatch = useAppDispatch()
    const profile = useSelector(selectProfile)
    const isFollow = useSelector(selectIsFollow)
    const [isFollowDisable, setIsFollowDisable] = useState<boolean>(false)
    const changeSubscriptionStatus = () => {
        setIsFollowDisable(true)
        profile && dispatch(toggleFollowTC(profile.userId))
            .finally(() => setIsFollowDisable(false))
    }

    return (
        <>
            {isOwner || !userId
                ?
                null
                :
                <div className={s.buttons}>
                    <FollowButton
                        followed={isFollow}
                        callback={changeSubscriptionStatus}
                        disabled={isFollowDisable}/>
                    <MessageButton userId={userId}/>
                </div>
            }
        </>
    );
};

export default ProfileActions;
import {useEffect} from "react";
import {fetchStatusTC, getUserProfileTC} from "../../../../store/profile/profile-thunk";
import {useAppDispatch} from "../../../../store/store";
import {useSelector} from "react-redux";
import {selectIsFollow, selectProfile, selectStatus} from "../../../../store/profile/profile-selectors";
import {selectAuthUserData} from "../../../../store/auth/auth-selectors";
import {getIsFollowTC} from "../../../../store/users/users-thunks";

export const useFetchProfile = <T>(userId: T) => {
    const profile = useSelector(selectProfile)
    const authUser = useSelector(selectAuthUserData)
    const status = useSelector(selectStatus)
    const isFollow = useSelector(selectIsFollow)
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (!userId) {
            dispatch(fetchStatusTC(Number(authUser.id)))
            dispatch(getUserProfileTC(Number(authUser.id)))
        } else {
            dispatch(fetchStatusTC(Number(userId)))
            dispatch(getUserProfileTC(Number(userId)))
            dispatch(getIsFollowTC(Number(userId)))
        }
    }, [userId])
    return {profile, status, isFollow}
}
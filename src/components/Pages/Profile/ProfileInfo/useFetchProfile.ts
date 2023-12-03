import {useEffect} from "react";
import {getUserProfileTC} from "../../../../store/profile/profile-thunk";
import {useAppDispatch} from "../../../../store/store";
import {useSelector} from "react-redux";
import {selectProfile} from "../../../../store/profile/profile-selectors";
import {selectAuthUserData} from "../../../../store/auth/auth-selectors";

export const useFetchProfile = <T>(userId: T) => {
    const profile = useSelector(selectProfile)
    const authUser = useSelector(selectAuthUserData)
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (!userId) {
            dispatch(getUserProfileTC(Number(authUser.id)))
        } else {
            dispatch(getUserProfileTC(Number(userId)))
        }
    }, [userId])
    return {profile}
}
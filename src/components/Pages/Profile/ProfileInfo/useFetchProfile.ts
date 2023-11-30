import {useEffect} from "react";
import {getUserProfileTC} from "../../../../store/profile/profile-thunk";
import {getAuthUserDataTC} from "../../../../store/auth/auth-thunk";
import {useAppDispatch} from "../../../../store/store";
import {useSelector} from "react-redux";
import {selectProfile} from "../../../../store/profile/profile-selectors";

export const useFetchProfile = <T>(userId: T) => {
    const profile = useSelector(selectProfile)
    const dispatch = useAppDispatch()
    useEffect(() => {
        userId
            ? dispatch(getUserProfileTC(Number(userId)))
            : dispatch(getAuthUserDataTC())
    }, [userId])
    return { profile }
}
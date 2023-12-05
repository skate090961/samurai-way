import {useEffect, useState} from "react";
import {setUsersTC} from "../../../store/users/users-thunks";
import {useAppDispatch} from "../../../store/store";
import {useSelector} from "react-redux";
import {selectUsers} from "../../../store/users/users-selectors";

export const useFetchUsers = (currentPage: number) => {
    const [isShowPagination, setIsShowPagination] = useState<boolean>(false)
    const users = useSelector(selectUsers)

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(setUsersTC())
            .then(() => setIsShowPagination(true))
    }, [currentPage])

    return { users, isShowPagination }
}
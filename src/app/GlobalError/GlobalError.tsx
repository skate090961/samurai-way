import { useEffect } from 'react'
import {selectErrorMessage} from "../../store/app/app-selectors"
import {setAppErrorAC} from "../../store/app/app-reducer"
import {useSelector} from "react-redux"
import {useAppDispatch} from "../../store/store"
import {toast, ToastContainer} from "react-toastify"

export const GlobalError = () => {
    const errorMessage = useSelector(selectErrorMessage)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage)
            dispatch(setAppErrorAC(null))
        }
    }, [errorMessage])

    return <ToastContainer theme="dark" autoClose={3000} />
}


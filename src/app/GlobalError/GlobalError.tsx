import {selectErrorMessage} from "../../store/app/app-selectors";
import {useSelector} from "react-redux";
import {useAppDispatch} from "../../store/store";
import {useEffect} from "react";
import {toast, ToastContainer} from "react-toastify";
import {setAppErrorAC} from "../../store/app/app-reducer";
import 'react-toastify/dist/ReactToastify.css';

export const GlobalError = () => {
    const errorMessage = useSelector(selectErrorMessage)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage)
            dispatch(setAppErrorAC(null))
        }
    }, [errorMessage])

    return <ToastContainer theme="colored" autoClose={5000} position="bottom-left"/>
}


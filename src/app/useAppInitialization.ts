import { useAppDispatch } from "../store/store"
import { useSelector } from "react-redux"
import { selectIsInitialized } from "../store/app/app-selectors"
import { useEffect } from "react"
import { setAppInitializedTC } from "../store/app/app-thunk"

export const useAppInitialization = () => {
  const dispatch = useAppDispatch()
  const isInitialized = useSelector(selectIsInitialized)
  useEffect(() => {
    dispatch(setAppInitializedTC())
  }, [])
  return { isInitialized }
}

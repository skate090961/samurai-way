import { useEffect } from "react"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

type GlobalDoneType = {
  text: string
  isShow: boolean
  setIsShow: (isShow: boolean) => void
}

export const GlobalDone: React.FC<GlobalDoneType> = ({ text, isShow, setIsShow }) => {
  useEffect(() => {
    if (isShow) {
      toast.info(text)
      setIsShow(false)
    }
  }, [isShow])

  return <ToastContainer theme="colored" autoClose={5000} position="bottom-left" />
}

import React, { useEffect } from "react"
import Layout from "../components/Layout/Layout"
import Pages from "../components/Pages/Pages"
import { useAppDispatch } from "../store/store"
import { setAppInitializedTC } from "../store/app/app-thunk"
import { useSelector } from "react-redux"
import { selectIsInitialized } from "../store/app/app-selectors"
import { GlobalError } from "./GlobalError/GlobalError"
import TailSpinLoader from "../components/Loaders/TailSpinLoader/TailSpinLoader"
import s from "./App.module.css"

const App = () => {
  const dispatch = useAppDispatch()
  const isInitialized = useSelector(selectIsInitialized)
  useEffect(() => {
    dispatch(setAppInitializedTC())
  }, [])

  return (
    <>
      {isInitialized ? (
        <>
          <Layout>
            <Pages />
          </Layout>
          <GlobalError />
        </>
      ) : (
        <div className={s.loading}>
          <TailSpinLoader />
        </div>
      )}
    </>
  )
}

export default App

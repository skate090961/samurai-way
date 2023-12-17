import React from "react"
import { AppContent } from "./AppContent/AppContent"
import { useAppInitialization } from "./useAppInitialization"
import { TailSpinLoader } from "../components/Loaders/TailSpinLoader/TailSpinLoader"

const App = () => {
  const { isInitialized } = useAppInitialization()
  return isInitialized ? <AppContent /> : <TailSpinLoader />
}

export default App

import React from "react"
import { AppContent } from "./AppContent/AppContent"
import { LoadingScreen } from "./LoadingScreen/LoadingScreen"
import { useAppInitialization } from "./useAppInitialization"

const App = () => {
  const { isInitialized } = useAppInitialization()
  return isInitialized ? <AppContent /> : <LoadingScreen />
}

export default App

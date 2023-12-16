import { appReducer, AppStateType, setAppErrorAC, setAppInitializedAC, setAppStatusAC } from "./app-reducer"

const startState: AppStateType = {
  status: "idle",
  error: null,
  isInitialized: false,
}

test("status should be set", () => {
  const endState = appReducer(startState, setAppStatusAC("loading"))
  expect(endState.status).toBe("loading")
})
test("error should be set", () => {
  const endState = appReducer(startState, setAppErrorAC("error"))
  expect(endState.error).toBe("error")
})
test("initialize status should be set", () => {
  const endState = appReducer(startState, setAppInitializedAC(true))
  expect(endState.isInitialized).toBeTruthy()
})

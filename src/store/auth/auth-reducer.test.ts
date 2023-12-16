import {
  authReducer,
  AuthStateType,
  setAuthUserDataAC,
  setCaptchaAC,
  setIsAuthAC,
  setNewMessagesCountAC,
} from "./auth-reducer"
import { updatePhotosAC } from "../profile/profile-reducer"

const startState: AuthStateType = {
  authUserData: {
    id: null,
    email: null,
    login: null,
    photos: null,
    newMessagesCount: 0,
  },
  isAuth: false,
  captcha: "",
}

test("auth user should be set", () => {
  const authUser = {
    id: 1,
    email: "test.com",
    login: "test",
  }
  const endState = authReducer(startState, setAuthUserDataAC(authUser))
  expect(endState.authUserData.photos).toBe(null)
  expect(endState.authUserData.newMessagesCount).toBe(0)
  expect(endState.authUserData.id).toBe(1)
  expect(endState.authUserData.email).toBe("test.com")
  expect(endState.authUserData.login).toBe("test")
  expect(endState.isAuth).toBeTruthy()
})
test("auth status should be set", () => {
  const endState = authReducer(startState, setIsAuthAC(true))
  expect(endState.isAuth).toBeTruthy()
})
test("captcha image should be set", () => {
  const endState = authReducer(startState, setCaptchaAC("url.test"))
  expect(endState.captcha).toBe("url.test")
})
test("photos should be updated", () => {
  const photos = {
    small: "small",
    large: "large",
  }
  const endState = authReducer(startState, updatePhotosAC(photos))
  expect(endState.authUserData.photos?.small).toBe("small")
  expect(endState.authUserData.photos?.large).toBe("large")
  expect(endState.authUserData.id).toBe(null)
})
test("new messages count should be set", () => {
  const endState = authReducer(startState, setNewMessagesCountAC(100))
  expect(endState.authUserData.newMessagesCount).toBe(100)
  expect(endState.authUserData.id).toBe(null)
})

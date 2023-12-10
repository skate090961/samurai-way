import { addPostAC, profileReducer, updateNewPostTextAC } from "./profile-reducer"

test("post should be added to the array correctly", () => {
  const startState = {
    posts: [
      { id: "1", text: "text1", likesCount: 1, date: "01.02.2023" },
      { id: "2", text: "text2", likesCount: 2, date: "02.02.2023" },
      { id: "3", text: "text3", likesCount: 3, date: "03.02.2023" },
    ],
    newPostText: "text4",
    profile: null,
    isLoading: false,
    status: "",
    isFollow: false,
  }
  const endState = profileReducer(startState, addPostAC())

  expect(endState.posts.length).toBe(4)
  expect(endState.posts[0].text).toBe("text4")
  expect(endState.posts[0].id).toBeDefined()
  expect(endState.posts[0].likesCount).toBe(0)
  expect(endState.posts[0].date).toBeDefined()
  expect(endState.newPostText).toBe("")
})

test("post should be changed correct", () => {
  const text = "NEW POST TEXT"
  const startState = {
    posts: [
      { id: "1", text: "text1", likesCount: 1, date: "01.02.2023" },
      { id: "2", text: "text2", likesCount: 2, date: "02.02.2023" },
      { id: "3", text: "text3", likesCount: 3, date: "03.02.2023" },
    ],
    newPostText: "",
    profile: null,
    isLoading: false,
    status: "",
    isFollow: false,
  }
  const endState = profileReducer(startState, updateNewPostTextAC(text))

  expect(endState.newPostText).toBe(text)
})

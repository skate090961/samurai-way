import {
  addPostAC,
  decrementLikeCountAC,
  incrementLikeCountAC,
  ProfilePageType,
  profileReducer,
  removePostAC,
  setIsFollowAC,
  setStatusAC,
  setUserProfileAC,
  toggleProfileLoadingAC,
  updatePhotosAC,
  updatePostTC,
} from "./profile-reducer"

const startState: ProfilePageType = {
  posts: [
    {
      id: "1",
      likesCount: 9,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "11 Dec at 7:09 pm",
    },
  ],
  profile: null,
  isLoading: false,
  status: "",
  isFollow: false,
}

test("post should be added", () => {
  const endState = profileReducer(startState, addPostAC("text"))
  expect(endState.posts.length).toBe(2)
  expect(endState.posts[0].text).toBe("text")
})
test("user profile should be set", () => {
  const profile = {
    aboutMe: "me",
    contacts: {
      facebook: "facebook",
      website: "website",
      vk: "vk",
      twitter: "twitter",
      instagram: "instagram",
      youtube: "youtube",
      github: "github",
      mainLink: "mainLink",
    },
    lookingForAJob: true,
    lookingForAJobDescription: "job",
    userId: 1,
    photos: {
      large: "large photo",
      small: "small photo",
    },
    fullName: "Name",
  }
  const endState = profileReducer(startState, setUserProfileAC(profile))
  expect(endState.profile?.userId).toBe(1)
  expect(endState.profile?.contacts.facebook).toBe("facebook")
  expect(endState.profile?.photos.small).toBe("small photo")
})

test("loading status should be changed", () => {
  const endState = profileReducer(startState, toggleProfileLoadingAC(true))
  expect(endState.isLoading).toBe(true)
})
test("status should be updated", () => {
  const endState = profileReducer(startState, setStatusAC("status"))
  expect(endState.status).toBe("status")
})

test("followed status should be updated", () => {
  const endState = profileReducer(startState, setIsFollowAC(true))
  expect(endState.isFollow).toBe(true)
})

test("like should be incremented", () => {
  const endState = profileReducer(startState, incrementLikeCountAC("1"))
  expect(endState.posts[0].likesCount).toBe(10)
})
test("like should be decremented", () => {
  const endState = profileReducer(startState, decrementLikeCountAC("1"))
  expect(endState.posts[0].likesCount).toBe(8)
})
test("post should be removed", () => {
  const endState = profileReducer(startState, removePostAC("1"))
  expect(endState.posts.length).toBe(0)
})
test("post should be updated", () => {
  const endState = profileReducer(startState, updatePostTC("1", "new text"))
  expect(endState.posts[0].text).toBe("new text")
  expect(endState.posts[0].id).toBe("1")
})

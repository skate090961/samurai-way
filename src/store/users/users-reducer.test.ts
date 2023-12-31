import {
  changeFollowingStatusAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  toggleUserLoadingAC,
  usersReducer,
  UsersType,
} from "./users-reducer"

const startState: UsersType = {
  users: [
    {
      id: 1,
      name: "Max P.",
      photos: {
        small: "",
        large: "",
      },
      followed: false,
      status: "lorem ipsum lorem",
      uniqueUrlName: "",
    },
    {
      id: 2,
      name: "Michael F.",
      photos: {
        small: "",
        large: "",
      },
      followed: true,
      status: "Im a boss",
      uniqueUrlName: "",
    },
    {
      id: 3,
      name: "Viktor P.",
      photos: {
        small: "",
        large: "",
      },
      followed: false,
      status: "Life is like",
      uniqueUrlName: "",
    },
  ],
  pageSize: 6,
  totalUsersCount: 0,
  currentPage: 1,
  isLoading: false,
  followingInProgress: [],
}

test("user should be subscription status changed", () => {
  const endState = usersReducer(startState, changeFollowingStatusAC(1, true))

  expect(endState.users[0].followed).toBeTruthy()
  expect(endState.users[1].followed).toBeTruthy()
  expect(endState.users[2].followed).toBeFalsy()
})

test("users list should be update", () => {
  const users = [
    {
      id: 4,
      name: "Max P.",
      photos: {
        small: "",
        large: "",
      },
      followed: false,
      status: "lorem ipsum lorem",
      uniqueUrlName: "",
    },
    {
      id: 5,
      name: "Michael F.",
      photos: {
        small: "",
        large: "",
      },
      followed: true,
      status: "Im a boss",
      uniqueUrlName: "",
    },
    {
      id: 6,
      name: "Viktor P.",
      photos: {
        small: "",
        large: "",
      },
      followed: false,
      status: "Life is like",
      uniqueUrlName: "",
    },
  ]
  const endState = usersReducer(startState, setUsersAC(users))

  expect(endState.users.length).toBe(3)
  expect(endState.users[0].id).toBe(4)
})

test("total users count should be set", () => {
  const endState = usersReducer(startState, setTotalUsersCountAC(1000))
  expect(endState.totalUsersCount).toBe(1000)
})
test("current page should be set", () => {
  const endState = usersReducer(startState, setCurrentPageAC(4))
  expect(endState.currentPage).toBe(4)
})
test("user loading status should be changed", () => {
  const endState = usersReducer(startState, toggleUserLoadingAC(true))
  expect(endState.isLoading).toBe(true)
})

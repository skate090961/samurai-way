import {
  ChatPageType,
  messageReducer,
  removeMessageAC,
  removeMessagesAC,
  setCurrentPageAC,
  setDialogsAC,
  setMessagesAC,
  setTotalItemsCountAC,
  updateMessagesAC,
} from "./message-reducer"

const startState: ChatPageType = {
  dialogs: [
    {
      id: 1,
      userName: "name1",
      hasNewMessages: false,
      lastDialogActivityDate: new Date(),
      lastUserActivityDate: new Date(),
      newMessagesCount: 100,
      photos: {
        small: "small photo1",
        large: "large photo1",
      },
    },
    {
      id: 2,
      userName: "name2",
      hasNewMessages: true,
      lastDialogActivityDate: new Date(),
      lastUserActivityDate: new Date(),
      newMessagesCount: 0,
      photos: {
        small: "small photo2",
        large: "large photo2",
      },
    },
  ],
  messages: {
    items: [
      {
        id: "1",
        body: "message1",
        translatedBody: null,
        addedAt: new Date(),
        senderId: 1,
        senderName: "name1",
        recipientId: 1,
        viewed: true,
      },
      {
        id: "2",
        body: "message2",
        translatedBody: null,
        addedAt: new Date(),
        senderId: 2,
        senderName: "name2",
        recipientId: 2,
        viewed: true,
      },
      {
        id: "3",
        body: "message3",
        translatedBody: null,
        addedAt: new Date(),
        senderId: 3,
        senderName: "name3",
        recipientId: 3,
        viewed: true,
      },
    ],
    currentPage: 1,
    pageSize: 8,
    totalItemsCount: 0,
  },
}

test("dialogs should be set", () => {
  const dialogs = [
    {
      id: 3,
      userName: "name3",
      hasNewMessages: true,
      lastDialogActivityDate: new Date(),
      lastUserActivityDate: new Date(),
      newMessagesCount: 0,
      photos: {
        small: "small photo3",
        large: "large photo3",
      },
    },
    {
      id: 4,
      userName: "name4",
      hasNewMessages: true,
      lastDialogActivityDate: new Date(),
      lastUserActivityDate: new Date(),
      newMessagesCount: 0,
      photos: {
        small: "small photo4",
        large: "large photo4",
      },
    },
  ]
  const endState = messageReducer(startState, setDialogsAC(dialogs))
  expect(endState.dialogs.length).toBe(2)
  expect(endState.dialogs[0].id).toBe(3)
  expect(endState.dialogs[1].id).toBe(4)
})
test("messages should be set", () => {
  const messages = [
    {
      id: "4",
      body: "message4",
      translatedBody: null,
      addedAt: new Date(),
      senderId: 4,
      senderName: "name4",
      recipientId: 4,
      viewed: true,
    },
    {
      id: "5",
      body: "message5",
      translatedBody: null,
      addedAt: new Date(),
      senderId: 5,
      senderName: "name5",
      recipientId: 5,
      viewed: true,
    },
  ]
  const endState = messageReducer(startState, setMessagesAC(messages))
  expect(endState.messages.items.length).toBe(5)
  expect(endState.messages.items[0].id).toBe("4")
  expect(endState.messages.items[1].id).toBe("5")
  expect(endState.messages.items[2].id).toBe("1")
})
test("messages should be update", () => {
  const message = {
    id: "100",
    body: "message100",
    translatedBody: null,
    addedAt: new Date(),
    senderId: 4,
    senderName: "name100",
    recipientId: 4,
    viewed: true,
  }
  const endState = messageReducer(startState, updateMessagesAC(message))
  expect(endState.messages.items.length).toBe(4)
  expect(endState.messages.items.at(-1)?.id).toBe("100")
  expect(endState.messages.items[0].id).toBe("1")
})
test("messages should be removed", () => {
  const endState = messageReducer(startState, removeMessagesAC())
  expect(endState.messages.items.length).toBe(0)
  expect(endState.messages.items[0]).toBe(undefined)
})
test("message should be removed", () => {
  const endState = messageReducer(startState, removeMessageAC("2"))
  expect(endState.messages.items.length).toBe(2)
  expect(endState.messages.items[0].id).toBe("1")
})

test("current page should be set", () => {
  const endState = messageReducer(startState, setCurrentPageAC(4))
  expect(endState.messages.currentPage).toBe(4)
})
test("total items count should be set", () => {
  const endState = messageReducer(startState, setTotalItemsCountAC(1000))
  expect(endState.messages.totalItemsCount).toBe(1000)
})

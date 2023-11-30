import {addNewMessageCreator, messageReducer, updateNewMessageTextCreator} from "./message-reducer";

test('message should be added to the array correctly', () => {
    const startState = {
        dialogs: [],
        messages: [
            {id: '1', message: 'text1', time: '00.00'},
            {id: '2', message: 'text2', time: '00.00'},
            {id: '3', message: 'text3', time: '00.00'},
        ],
        newMessageText: 'NEW MESSAGE'
    }
    const endState = messageReducer(startState, addNewMessageCreator())

    expect(endState.messages.length).toBe(4)
    expect(endState.messages[3].message).toBe('NEW MESSAGE')
    expect(endState.messages[3].id).toBeDefined()
    expect(endState.messages[3].time).toBeDefined()
    expect(endState.newMessageText).toBe('')
})

test('message text should be changed correct', () => {
    const text = 'NEW MESSAGE TEXT'
    const startState = {
        dialogs: [],
        messages: [
            {id: '1', message: 'text1', time: '00.00'},
            {id: '2', message: 'text2', time: '00.00'},
            {id: '3', message: 'text3', time: '00.00'},
        ],
        newMessageText: ''
    }
    const endState = messageReducer(startState, updateNewMessageTextCreator(text))

    expect(endState.newMessageText).toBe(text)
})
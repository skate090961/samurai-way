import React from 'react';
import {
    addNewMessageCreator,
    updateNewMessageTextCreator
} from "../../../../store/reducers/message-reducer/message-reducer";
import MessageSender from "./MessageSender";
import {connect} from "react-redux";
import {RootReducerType} from "../../../../store/reducers/rootReducer";
import {Action, Dispatch} from "redux";

const mapStateToProps = (state: RootReducerType) => {
    return {
        messageText: state.chatPage.newMessageText,
    }
}
const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
    return {
        addMessage: () => {
            dispatch(addNewMessageCreator())
        },
        updateMessageText: (text: string) => {
            dispatch(updateNewMessageTextCreator(text))
        }
    }
}

const MessageSenderContainer = connect(mapStateToProps, mapDispatchToProps)(MessageSender)

export default MessageSenderContainer;
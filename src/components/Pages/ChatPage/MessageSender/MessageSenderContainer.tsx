import React from 'react';
import {
    addNewMessageCreator,
    updateNewMessageTextCreator
} from "../../../../store/message/message-reducer";
import MessageSender from "./MessageSender";
import {connect} from "react-redux";
import {RootStateType} from "../../../../store/rootReducer";
import {Action, Dispatch} from "redux";

const mapStateToProps = (state: RootStateType) => {
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
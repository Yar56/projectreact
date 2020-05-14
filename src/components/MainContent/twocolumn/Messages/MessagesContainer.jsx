import React from "react";
import './MessagesStyle.sass';
import './../twoColumnStyle.sass';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../../redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageBody: state.dialogsPage.newMessageBody,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        SendMessage: () => {dispatch(sendMessageCreator())},
        NewMessageBody: (body) => {dispatch(updateNewMessageBodyCreator(body))}
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Messages);
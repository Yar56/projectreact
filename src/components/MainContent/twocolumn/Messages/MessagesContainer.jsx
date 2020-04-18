import React from "react";
import './MessagesStyle.sass';
import './../twoColumnStyle.sass';

import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../../redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
// import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
// import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";




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



const MessagesContainer = connect (mapStateToProps, mapDispatchToProps) (Messages);

export default MessagesContainer
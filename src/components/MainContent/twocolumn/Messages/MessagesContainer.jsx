import React from "react";
import './MessagesStyle.sass';
import './../twoColumnStyle.sass';
import Message from "./Message";
import ContentMessage from "./ContentMessage";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../../redux/messagesReducer";
import Messages from "./Messages";


const MessagesContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };
    // e это объект события с помощью него мы можем достучаться до объекта с которым произошло событие
    // target - выбириает html элемент в котором происходит изменение = input

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))

    };

    return <Messages updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>


};
export default MessagesContainer;


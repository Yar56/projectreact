import React from "react";
import './MessagesStyle.sass';
import './../twoColumnStyle.sass';
import Message from "./Message";
import ContentMessage from "./ContentMessage";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../../redux/messagesReducer";


const Messages = (props) => {
    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogsItem
        .map( dialog => <Message name={dialog.name}  id={dialog.id}
                                 avatar={dialog.avatar}/>
        );

    let messagesElements = state.messages
        .map ( m => <ContentMessage message={m.message}/>
        );

    let newMessageBody = state.newMessageBody;


    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };
    // e это объект события с помощью него мы можем достучаться до объекта с которым произошло событие
    // target - выбириает html элемент в котором происходит изменение = input


    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))

    };

    return(
       <>
           <div>
               <div className="main">
                   <div className="messagesItems">
                       {dialogsElements}
                   </div>

                   <div className="message">
                       {messagesElements}
                       <div className="contentWrapper">
                           <input type="text" value={newMessageBody}
                                      onChange={onNewMessageChange}
                                      placeholder="Введите свое сообщение"
                           />
                           <button onClick={onSendMessageClick}>Отправить</button>
                       </div>
                   </div>

               </div>

           </div>

           <div className="tabs">
               <div className="link">
                   <a  className="itemLink active" href="">Все сообщения</a>
                   <a  className="itemLink" href="">Непрочитанные</a>
                   <a  href="#" className="itemLink">Важные</a>
               </div>
           </div>
       </>
    )
};
export default Messages;


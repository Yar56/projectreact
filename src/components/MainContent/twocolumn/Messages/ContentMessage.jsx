import React from "react";
import './MessagesStyle.sass';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../../redux/store";

let ContentMessage = (props) => {
	return (
		<div>
			<div >{props.message}</div>
		</div>
	)
};

export default ContentMessage;
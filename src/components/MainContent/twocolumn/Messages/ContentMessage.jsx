import React from "react";
import './MessagesStyle.sass';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../../redux/state";

let ContentMessage = (props) => {
	return (
		<div>
			<div >{props.message}</div>
		</div>
	)
};

export default ContentMessage;
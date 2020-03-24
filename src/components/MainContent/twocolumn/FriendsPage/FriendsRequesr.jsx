import React from "react";
import './FriendsPageStyle.sass';

const FriendsRequest = (props) => {
	return(
		<div className="friendsRequest">
			<div className="title">
				<div>Заявки в друзья <span>{props.request}</span></div>
			</div>
			<div className="requests">
				<div className="icon">
					<a href="">
						{props.img}
					</a>
				</div>
				<div className="friend">
					<a href="">{props.name}</a>
					<p>{props.descr}</p>
					<div className="buttons">
						<button className="btn">Добавить в друзья</button>
						<button className="btn">Оставить в подписчиках</button>
					</div>
				</div>
			</div>
		</div>
	)
};

export default FriendsRequest;
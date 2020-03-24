import React from "react";
import './../twoColumnStyle.sass';
import './FriendsPageStyle.sass';
import './../News/NewsStyle.sass';
import Friend from "./Friend";
import FriendsRequest from "./FriendsRequesr";

const FriendsPage = (props) => {

	let friendItem = props.state.friendsPage
		.map(friend => <Friend name={friend.name} descr={friend.descr} img={friend.img}/>);

	let requestItem = props.state.friendsRequest
		.map(request => <FriendsRequest name={request.name} descr={request.descr} img={request.img} request={request.request}/>)

	return (
			<>
				<div className="friendsHeader">
					{requestItem}
					<div className="friendsList">
						<div className='wrapper'>
							<div className="tabsAll active">
								Все друзья
								<span>{props.state.countFriends.allFriends}</span>
							</div>
							<div className="tabsOnline">
								Друзья онлайн
								<span>{props.state.countFriends.onlineFriends}</span>
							</div>
						</div>
						<div className="search">
							<form>
								<input className="searchFriends" type="text" placeholder="Поиск друзей"/>
								<a className="params" href="#">
									Параметры
									<img className="Header_menuDown__2B95x"
										 src="https://cdn.iconscout.com/icon/premium/png-512-thumb/dropdown-menu-1614249-1368951.png"
										 alt=""/>
									<div className="searchFilter">
										<div className="city">
											город
										</div>
										<div className="age">
											возраст
										</div>
										<div className="gender">
											пол
										</div>
									</div>
								</a>
							</form>
						</div>
						<div className="wrapperFriends">
							{friendItem}
						</div>
					</div>
				</div>
				<div className="tabs">
					<div className="link">
						<a  className="itemLink active" href="">Мои друзья</a>
						<a  className="itemLink" href="">Заявки в друзья</a>
						<a  href="#" className="itemLink">Важные друзья</a>
					</div>
				</div>
			</>
	)
};

export default FriendsPage;


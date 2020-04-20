import React from "react";
import * as axios from "axios";
import userPng from '../../../assets/image/user.png'

let FindUsers = (props) => {
	let getUsers = () =>
	{
		if (props.users.length === 0) {
			axios.get("https://social-network.samuraijs.com/api/1.0/users")
				.then(response => {
					props.setUsers(response.data.items);
				});
		}
	}


	return <div>
		<button onClick={getUsers}>ggggg</button>
		{
			props.users.map(u => <div key={u.id}>
				<div>
					<div>
						<img src={u.photos.small != null ? u.photos.small : userPng} alt=""/>
					</div>
					<div>
						{u.followed
							? <button onClick={ () => {props.unfollow(u.id)} }>ОТПИСАТЬСЯ</button>
							: <button onClick={ () => {props.follow(u.id)} }>ПОДПИСАТЬСЯ</button>}
					</div>
					<div>
						<div>{u.name}</div>
						<div>{u.status}</div>
					</div>
					<div>
						<div>
							{"u.location.city"}
							{"u.location.country"}
						</div>
					</div>
				</div>
			</div>)
		}
		</div>

};


export default FindUsers;
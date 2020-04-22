import React from "react";
import * as axios from "axios";
import userPng from '../../../assets/image/user.png'



class FindUsers extends React.Component{
		constructor(props) {
			super(props);

			axios.get("https://social-network.samuraijs.com/api/1.0/users")
				.then(response => {
					this.props.setUsers(response.data.items);
				});
		}

		render () {
			return <div>
				{
					this.props.users.map(u => <div key={u.id}>
						<div>
							<div>
								<img src={u.photos.small != null ? u.photos.small : userPng} alt=""/>
							</div>
							<div>
								{u.followed
									? <button onClick={ () => {this.props.unfollow(u.id)} }>ОТПИСАТЬСЯ</button>
									: <button onClick={ () => {this.props.follow(u.id)} }>ПОДПИСАТЬСЯ</button>}
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
		}
}

export default FindUsers;
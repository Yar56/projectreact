import React from "react";
import FindUsersStyle from './FindUsersStyle.module.sass';
import userPng from "../../../assets/image/user.png";

import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {toggleFollowingProgress} from "../../../redux/findUsersReducer";
import {usersAPI} from "../../../api/api";


let FindUsers = (props) => {

	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	return (
		<div>
			<div>
				{
					pages.map(p => {
						return <span className={props.currentPage === p && FindUsersStyle.activeCheckPage}
									 onClick={()=> {return props.onPageChanged(p)}}
						>{p}</span>
					})
				}
			</div>
			{
				props.users.map(u => <div key={u.id}>
					<div>

						<NavLink to={'/profile/' + u.id }>
							<img src={u.photos.small != null ? u.photos.small : userPng} alt=""/>
						</NavLink>
						<div>
							{u.followed
								? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={ () => {
									props.unsubscribe(u.id)} }>ОТПИСАТЬСЯ</button>
								: <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={ () => {
									props.subscribe(u.id)} }>ПОДПИСАТЬСЯ</button>}
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
	)
}

export default FindUsers;
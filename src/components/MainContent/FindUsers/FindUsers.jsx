import React from "react";
import FindUsersStyle from './FindUsersStyle.module.sass';
import userPng from "../../../assets/image/user.png";
import Preloader from "../../common/preloader/Preloader";


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
									 onClick={(e)=> {return props.onPageChanged(p)}}
						>{p}</span>
					})
				}
			</div>
			{
				props.users.map(u => <div key={u.id}>
					<div>

						<div>
							<img src={u.photos.small != null ? u.photos.small : userPng} alt=""/>
						</div>
						<div>
							{u.followed
								? <button onClick={ () => {props.unFollow(u.id)} }>ОТПИСАТЬСЯ</button>
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
	)
}

export default FindUsers;
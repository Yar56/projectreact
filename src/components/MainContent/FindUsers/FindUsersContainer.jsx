import React from "react";
import {connect} from "react-redux";

import {
	follow,
	setUsers,
	unFollow,
	setCurrentPage,
	setUsersTotalCount, toggleIsFetching
} from "../../../redux/findUsersReducer";

import * as axios from "axios";
import FindUsers from "./FindUsers";
import Preloader from "../../common/preloader/Preloader";

class FindUsersAPI extends React.Component{

	componentDidMount() {
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.totalUsersCount}&page=${this.props.pageSize}`)
			.then(response => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(response.data.items);
				this.props.setUsersTotalCount(response.data.totalCount/50);
			});
	}
	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.totalUsersCount}&page=${pageNumber}`)
			.then(response => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(response.data.items);
			});
	}

	render () {
		return<>
			{this.props.isFetching ? <Preloader/> : null}
			<FindUsers users={this.props.users}
							  totalUsersCount={this.props.totalUsersCount}
							  pageSize={this.props.pageSize}
							  currentPage={this.props.currentPage}
							  onPageChanged={this.onPageChanged}
							  follow={this.props.follow}
							  unfollow={this.props.unFollow}
			/>
		</>
	}
}

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		totalUsersCount: state.usersPage.totalUsersCount,
		pageSize: state.usersPage.pageSize,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
	}
}
//
// let mapDispatchToProps = (dispatch) => {
// 	return {
// 		follow: (userId) => {
// 			dispatch(followAC(userId))
// 		},
// 		unfollow: (userId) => {
// 			dispatch(unFollowAC(userId))
// 		},
// 		setUsers: (users) => {
// 			dispatch(setUsersAC(users))
// 		},
// 		setCurrentPage: (currentPage) => {
// 			dispatch(setCurrentPageAC(currentPage))
// 		},
// 		setTotalUsersCount: (totalCount) => {
// 			dispatch(setUsersTotalCountAC(totalCount))
// 		},
// 		toggleIsFetching: (isFetching) => {
// 			dispatch(toggleIsFetchingAC(isFetching))
// 		}
// 	}
// }


export default connect(mapStateToProps, {
	follow, unFollow, setUsers,
	setCurrentPage, setUsersTotalCount, toggleIsFetching})(FindUsersAPI);


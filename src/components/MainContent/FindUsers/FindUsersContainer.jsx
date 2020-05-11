import React from "react";
import {connect} from "react-redux";

import {
	follow,
	setUsers,
	unFollow,
	setCurrentPage,
	toggleIsFetching, setTotalUsersCount
} from "../../../redux/findUsersReducer";


import FindUsers from "./FindUsers";
import Preloader from "../../common/preloader/Preloader";
import {usersAPI} from "../../../api/api";

class FindUsersContainer extends React.Component{

	componentDidMount() {
		this.props.toggleIsFetching(true);

		usersAPI.getUsers(this.props.pageSize, this.props.currentPage)
			.then(data => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(data.items);
				this.props.setTotalUsersCount(data.totalCount/50);
			});
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.toggleIsFetching(true);

		usersAPI.getUsers(this.props.pageSize, pageNumber)
			.then(data => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(data.items);
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
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
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
	setCurrentPage, setTotalUsersCount, toggleIsFetching})(FindUsersContainer);


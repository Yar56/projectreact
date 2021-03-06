import React from "react";
import {connect} from "react-redux";

import {
	setUsers,
	unsubscribe,
	setCurrentPage,
	toggleIsFetching, setTotalUsersCount, toggleFollowingProgress, getUsers, getUsersAndPageChanged, subscribe
} from "../../../redux/findUsersReducer";


import FindUsers from "./FindUsers";
import Preloader from "../../common/preloader/Preloader";
import {usersAPI} from "../../../api/api";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

class FindUsersContainer extends React.Component{

	componentDidMount() {
		this.props.getUsers(this.props.pageSize, this.props.currentPage);
	}

	onPageChanged = (pageNumber) => {
		// this.props.setCurrentPage(pageNumber);
		// this.props.toggleIsFetching(true);
		this.props.getUsersAndPageChanged(this.props.pageSize, pageNumber);
		// usersAPI.getUsers(this.props.pageSize, pageNumber)
		// 	.then(data => {
		// 		this.props.toggleIsFetching(false);
		// 		this.props.setUsers(data.items);
		// 	});
	}

	render () {
		return<>
			{this.props.isFetching ? <Preloader/> : null}
			<FindUsers users={this.props.users}
							  totalUsersCount={this.props.totalUsersCount}
							  pageSize={this.props.pageSize}
							  currentPage={this.props.currentPage}
							  onPageChanged={this.onPageChanged}
					   subscribe={this.props.subscribe}
					   unsubscribe={this.props.unsubscribe}
					   followingInProgress={this.props.followingInProgress}

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
		followingInProgress: state.usersPage.followingInProgress,
	}
}


let withRedirect = withAuthRedirect(FindUsersContainer)

export default compose(
	withAuthRedirect,
	connect(mapStateToProps, {
		subscribe,unsubscribe, setCurrentPage,
		toggleFollowingProgress,getUsers, getUsersAndPageChanged})
)(FindUsersContainer);
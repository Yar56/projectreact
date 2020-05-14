import React from "react";
import MyPage from "./MyPage";
import {connect} from "react-redux";
import {getUserProfile} from "../../../redux/profileReducer";
import withRouter from "react-router-dom/es/withRouter";
import Redirect from "react-router-dom/es/Redirect";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";





class MyPageContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        return (
             <MyPage {...this.props} profile={this.props.profile}/>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}


export default
compose(
    connect(mapStateToProps,{getUserProfile}),
    withRouter,
    withAuthRedirect
)(MyPageContainer);

import React from "react";

import MyPage from "./MyPage";
import * as axios from "axios";
import {connect} from "react-redux";

import {setUserProfile} from "../../../redux/profileReducer";
import withRouter from "react-router-dom/es/withRouter";




class MyPageContainer extends React.Component {


    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            });
    }

    render() {
        return (
             <MyPage {...this.props} profile={this.props.profile}/>
        )
    }
}

let withUrlDataContainerComponent = withRouter(MyPageContainer);

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps,{setUserProfile}) (withUrlDataContainerComponent)
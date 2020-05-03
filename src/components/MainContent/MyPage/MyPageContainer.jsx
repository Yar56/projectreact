import React from "react";

import MyPage from "./MyPage";
import * as axios from "axios";
import {connect} from "react-redux";

import {setUserProfile} from "../../../redux/profileReducer";


class MyPageContainer extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
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



let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps,{setUserProfile}) (MyPageContainer)
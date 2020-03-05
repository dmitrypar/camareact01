import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profilePageReducer";
import {withRouter} from "react-router-dom";






class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId
            // берет URS (которое формируется в navlink users)
        // // и использует id для навигации

        axios.get(`https://reqres.in/api/users/`+ userId).then(response => {
            /*this.props.toogleIsFetching(true);*/
            this.props.setUserProfile(response.data.data);
         console.log(response.data.data)
            console.log(this.props.match)
        });
    }


    render () {

    return (
        <div>
            <Profile
                {...this.props}
                profile={this.props.profile}
            />
        </div>
    )
}

};
debugger;
const mapStateToProps = (state) => ({
profile: state.profilePage.profile
});

/*const mapDispatchToProps = (dispatch) => ({})*/

    export default connect(mapStateToProps,
        // actioncreators (mapDispatchToProps)
        {setUserProfile}
        )(withRouter(ProfileContainer));


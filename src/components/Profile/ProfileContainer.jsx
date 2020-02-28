import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profilePageReducer";






class ProfileContainer extends React.Component {

    componentDidMount() {

        axios.get(`https://randomuser.me/api/?`).then(response => {
            /*this.props.toogleIsFetching(true);*/
            this.props.setUserProfile(response.data.results);
         console.log(response.data.results)
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

const mapStateToProps = (state) => ({
profile: state.profilePage.profile
});

/*const mapDispatchToProps = (dispatch) => ({})*/

    export default connect(mapStateToProps,
        // actioncreators (mapDispatchToProps)
        {setUserProfile}
        )(ProfileContainer);


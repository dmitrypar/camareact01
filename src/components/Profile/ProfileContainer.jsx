import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getStatusProfileCreator,
    setUserProfile,
    updatePhotoCreator,
    updateStatusCreator
} from "../../redux/profilePageReducer";
import { withRouter} from "react-router-dom";
import {withAuthRedirectHoc} from "../../hoc/withRedirectHoc";
import {compose} from "redux";







class ProfileContainer extends React.Component {

    componentDidMount(props) {

        let userId = this.props.match.params.userId;
if(userId===(null||undefined)) {userId=this.props.authIdProfile}
        this.props.setUserProfile(userId);
        this.props.getStatusProfileCreator(userId);
        //debugger;
       // console.log(this.props)
    }

    componentDidUpdate(prevProps, prevState) {
        let userId = this.props.match.params.userId;
        if (this.props.match.params.userId!== prevProps.match.params.userId) {
            this.props.setUserProfile(userId);
            this.props.getStatusProfileCreator(userId);
        }}

    render () {



        //if (this.props.Auth===false) return <Redirect to={'/login'}/>
   return (


            <div>
                <Profile
                    {...this.props}
                    profile={this.props.profile}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    statusMessage={this.props.statusMessage}
                    updateStatusCreator={this.props.updateStatusCreator}
                    userId={this.props.userNotUrlId}
                    authIdProfile={this.props.authIdProfile}
                    updatePhotoCreator={this.props.updatePhotoCreator}
                />
            </div>
        )


}

};
//debugger;
const mapStateToProps = (state) => ({
profile: state.profilePage.profile,
    token: state.auth.acces_token,
    folowed: state.profilePage.followed,
    //Auth: state.auth.isAuth,
    statusMessage: state.profilePage.statusMessage,
    userNotUrlId: state.profilePage.userId,
    authIdProfile: state.auth.authIdProfile

});

/*const mapDispatchToProps = (dispatch) => ({})*/

//const ProfileWithRedirect = withAuthRedirectHoc(ProfileContainer);

/*    export default connect(mapStateToProps,
        // actioncreators (mapDispatchToProps)
        {setUserProfile, follow,
            unfollow}
        )(withRouter(ProfileWithRedirect));*/


export default compose(
    connect(mapStateToProps, {setUserProfile, getStatusProfileCreator,updateStatusCreator, updatePhotoCreator}),
        withRouter,
        withAuthRedirectHoc
    )(ProfileContainer)


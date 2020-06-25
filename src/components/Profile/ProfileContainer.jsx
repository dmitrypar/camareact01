import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatusProfileCreator, setUserProfile, updateStatusCreator} from "../../redux/profilePageReducer";
import { withRouter} from "react-router-dom";
import {withAuthRedirectHoc} from "../../hoc/withRedirectHoc";
import {compose} from "redux";







class ProfileContainer extends React.Component {

   updateDataProfile() {
       let userId = this.props.match.params.userId;
       this.props.setUserProfile(userId);
       this.props.getStatusProfileCreator(userId);
       debugger;

   }

    componentDidMount(props) {

        this.updateDataProfile()
    }

    // решило проблему ошибочного сообщения в статусе после посещения другого профиля - в статусе оставался статус предыдущего профиля
    componentDidUpdate(prevProps, prevState) {
if (this.props.match.params.userId!== prevProps.match.params.userId) {
    this.updateDataProfile()

}
        debugger;
    }


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
    userNotUrlId: state.profilePage.userId

});

/*const mapDispatchToProps = (dispatch) => ({})*/

//const ProfileWithRedirect = withAuthRedirectHoc(ProfileContainer);

/*    export default connect(mapStateToProps,
        // actioncreators (mapDispatchToProps)
        {setUserProfile, follow,
            unfollow}
        )(withRouter(ProfileWithRedirect));*/


export default compose(
    connect(mapStateToProps, {setUserProfile, getStatusProfileCreator,updateStatusCreator}),
        withRouter,
        withAuthRedirectHoc
    )(ProfileContainer)


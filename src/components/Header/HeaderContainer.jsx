import React from 'react';
import Header from "./Header";
import {connect} from "react-redux"
import { toLoginCreator} from "../../redux/auth-reducer";
import {withAuthRedirectHoc} from "../../hoc/withRedirectHoc";
import {compose} from "redux";
import {getStatusProfileCreator, setUserProfile, updateStatusCreator} from "../../redux/profilePageReducer";




class HeaderContainer extends React.Component {


    componentDidMount() {

        this.props.toLoginCreator()

        /*        profileAPI.toLogin()
                .then(response => {

                   // console.log(response.config.data)

                    const {data} = response;
                    this.props.setAuthUserData(data)
                })*/
        /*        axios.patch(
            `http://localhost:8000/folowed/10`,
            {id: "10",
                follow: "false"},

        {headers: {
            Authorization: "Bearer "+access_token
        }}
        )
            .then(response => {
               console.log(response.data);
            });*/

    }

    render() {

            return (<Header {...this.props}/>)

    }
}


const mapStatetoProps = (state) => ({
    auth: state.auth.isAuth,
    token: state.auth.access_token
});



export default compose(
    connect(mapStatetoProps, {toLoginCreator}),
   // withAuthRedirectHoc
)(HeaderContainer)
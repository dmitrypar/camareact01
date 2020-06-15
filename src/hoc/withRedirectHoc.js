import React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

export const withAuthRedirectHoc = (Component) => {


    const mapStatetoPropsAuth = (state) => (
        {
            Auth: state.auth.isAuth
        }
    );

  class withRedirect extends React.Component {

      render() {
          if (this.props.Auth===false)
              return <Redirect to={'/login'}/>

          return <Component {...this.props}/>
      }
  }

  const withAuthRedirectConnect = connect(mapStatetoPropsAuth) (withRedirect)

    return withAuthRedirectConnect

};
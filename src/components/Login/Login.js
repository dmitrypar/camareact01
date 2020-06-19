import React from 'react'
import {Field, reduxForm} from "redux-form";
import {  required} from "../../utils/validators/validators";
import {Input} from "../Commons/FieldControls/Fieldcontrols";
import { toLoginPostCreator} from "../../redux/auth-reducer";
import {connect} from "react-redux"
import {compose} from "redux";
import {Redirect, withRouter} from "react-router-dom";
import styles from "./../Commons/FieldControls/Fieldcontrols.module.css"






//debugger;

const LoginForm = (props) => {



    return (

        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} component={Input} name={'email'} validate = {[required]}/>
            </div>
            <div>
                <Field placeholder={'Password'} component={Input} name={'password'} validate = {[required]}/>
            </div>
            <div>
                <Field  component={Input} name={'rememberMe'} type={'checkbox'} />remember me
            </div>
            <div className={styles.someCommonError}>

            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )

};

const LoginReduxForm = (reduxForm({form: 'loginForm'})(LoginForm));

/*const LoginPost.js = (LoginData) => {
    return         axios.post('http://localhost:8000/auth/login',
        {email:LoginData.email, password: LoginData.password}
    )
        .then(response => {
            this.props.setUsers(response);
            console.log(response)
        })
};*/





const Login = (props) => {

    const onSubmit = (formData) => {
       // console.log(formData)
        props.toLoginPostCreator(formData);

    };

    if(props.Auth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <div>
                <h1>Login</h1>
            </div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}





const mapStatetoProps = (state) => ({
    Auth: state.auth.isAuth,
});



export default compose(
    connect(mapStatetoProps, {toLoginPostCreator}),
    // withAuthRedirectHoc
    withRouter,
)(Login)
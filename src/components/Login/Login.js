import React from 'react'
import {Field, reduxForm} from "redux-form";
import {  required} from "../../utils/validators/validators";
import {Input} from "../Commons/FieldControls/Fieldcontrols";
import {profileAPI} from "../../api/api";
import {toLoginCreator, toLoginPostCreator} from "../../redux/auth-reducer";
import {connect} from "react-redux"
import {compose} from "redux";
import {withRouter} from "react-router-dom";






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

/*const LoginData = (formData) => {
    return formData
}*/



const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData)
        //profileAPI.toLogin(formData.email, formData.password)
        //props.toLoginCreator (formData)
        props.toLoginPostCreator(formData);

    };

    return (
        <div>
            <div>
                <h1>Login</h1>
            </div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

//export default Login

/*let mapDispatchToProps = (dispatch) => {
    return {
        toLoginCreator: (formData) => {
            dispatch(toLoginCreator(formData));
        }

    }
};*/

const mapStatetoProps = (state) => ({
    //email: state.auth.email,
    //password: state.auth.password
});



export default compose(
    connect(mapStatetoProps, {toLoginPostCreator}),
    // withAuthRedirectHoc
    withRouter,
)(Login)
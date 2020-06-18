import React from 'react'
import {Field, reduxForm} from "redux-form";
import {  required} from "../../utils/validators/validators";
import {Input} from "../Commons/FieldControls/Fieldcontrols";
import {profileAPI} from "../../api/api";
import { toLoginCreator} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {addPostActionCreator} from "../../redux/profilePageReducer";




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



const Login = (props) => {

    const onSubmit = (formData) => {
       // console.log(formData)
        profileAPI.toLogin(formData.email, formData.password)
        //props.toLoginCreator (formData)

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

export default Login

/*let mapDispatchToProps = (dispatch) => {
    return {
        toLoginCreator: (formData) => {
            dispatch(toLoginCreator(formData));
        }

    }
};*/

/*const mapStateToProps = (state) => ({
    //email: state.auth.email,
    //password: state.auth.password
});*/

//export default connect(null, mapDispatchToProps)(Login)

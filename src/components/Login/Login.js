import React from 'react'
import {Field, reduxForm} from "redux-form";
import {  required} from "../../utils/validators/validators";
import {Input} from "../Commons/FieldControls/Fieldcontrols";
//debugger;
const LoginForm = (props) => {



    return (

        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} component={Input} name={'login'} validate = {[required]}/>
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
        console.log(formData)
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

export default Login
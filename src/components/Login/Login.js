import React from 'react'
import {Field, reduxForm} from "redux-form";

//debugger;
const LoginForm = (props) => {

    return (

        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} component={'input'} name={'login'}/>
            </div>
            <div>
                <Field placeholder={'Password'} component={'input'} name={'password'}/>
            </div>
            <div>
                <Field  component={'input'} name={'rememberMe'} type={'checkbox'}/>remember me
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
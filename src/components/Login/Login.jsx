import React from 'react';
import {Field, reduxForm} from 'redux-form';
import s from './Login.module.css';

const LoginForm = (props) => {
    return (//onSubmit вызовет handleSubmit
        <form onSubmit={props.handleSubmit}>
            <div>
               <Field placeholder={"login"} name={'login'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={"password"} name={'password'} component={'input'}/>
            </div>
            <div>
                <Field name={'rememberMe'} component={'input'} type={'checkbox'}/>Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm) //hoc создал оболочку контейнерную компоненту

const Login = (props) => {

    const onSubmitFormData = (formData) => {// сюда собираются данные
        console.log(formData);
    }

    return <div className={s.allLogin}>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmitFormData}/>
    </div>
}

export default Login;
import React from 'react';
import {Field, reduxForm} from 'redux-form';
import s from './Login.module.css';
import style from '../common/FormsControls/FormsControls.module.css'
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
    return (//onSubmit вызовет handleSubmit
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"email"} name={'email'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={"password"} name={'password'} component={Input} validate={[required]}
                       type={'password'}/>
            </div>
            <div>
                Remember me<Field name={'rememberMe'} component={Input} validate={[required]} type={'checkbox'}/>
            </div>
            { props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm) //hoc создал оболочку контейнерную компоненту

const Login = (props) => {

    const onSubmitFormData = (formData) => {// сюда собираются данные
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div className={s.allLogin}>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmitFormData}/>
    </div>
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});
export default connect(mapStateToProps, {login})(Login);
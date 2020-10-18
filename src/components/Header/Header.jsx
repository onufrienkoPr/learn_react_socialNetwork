import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <div className={s.headercont}>
            <img src='https://cdn0.iconfinder.com/data/icons/social-media-2092/100/social-62-512.png' alt='#'/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login}<button onClick={props.logout}>Logout</button></div>
                    : <NavLink to={'/login'} className={s.login}>Login</NavLink>// кнопка login
                }
            </div>
        </div>
    </header>
}

export default Header;
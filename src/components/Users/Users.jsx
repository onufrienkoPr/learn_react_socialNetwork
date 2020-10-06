import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import NavLink from "react-router-dom/NavLink";
import {usersAPI} from "../../api/api";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize); // получаем общее количество страниц
    let pages = []; // создаем массив страниц
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i); // заполняем массив
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span
                        className={props.currentPage === p && s.selectedPage} // задаем стиль для текущей страницы
                        onClick={() => {
                            props.onPageChanged(p)
                        }}>{p}</span> // передаем новую страницу в oPC
                })}
            </div>
            { // ниже мапим юзеров и даем ключи
                props.users.map(u =>
                    <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userphoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    usersAPI.unfollow(u.id)
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.unfollow(u.id)
                                            }
                                        });
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    usersAPI.follow(u.id)
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.follow(u.id)
                                            }
                                        });
                                }}>Follow</button>}
                        </div>
                    </span>

                        <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                    </div>)
            }
        </div>
    )
}

export default Users;
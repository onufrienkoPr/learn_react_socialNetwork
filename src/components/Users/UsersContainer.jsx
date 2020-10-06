import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}  // выполняется условие если у нас получен isFetching то рисуем Preloader иначе пустое значение, передаем общее количество пользователей
                pageSize={this.props.pageSize} // передаем размер одной страницы
                currentPage={this.props.currentPage} // передаем текущую страницу
                onPageChanged={this.onPageChanged} // передаем функцию изменения страницы
                users={this.props.users} // передаем пользователей
                follow={this.props.follow} // передаем подписку
                unfollow={this.props.unfollow} // передаем отписку
            />
        </>
    }
}

let mapStateToProps = (state) => { // передаем значения в стейт
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersContainer)
// follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching диспатчим в редусер
import React from 'react';
import {setAuthUserData} from "../../redux/auth-reducer";
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";


class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) { // если получены данные то
                    let {id, email, login} = response.data.data; // данные из data
                    this.props.setAuthUserData(id, email, login); //херячим через экшкреатор в редусер
                }
            });
    }

    render() {
        return <Header {...this.props}/>
    }
}
const MapStateToProps = (state) => ({
    isAuth: state.auth.isAuth, // залогинился тру/фолс
    login: state.auth.login // перекидываем логин
});

export default connect(MapStateToProps, {setAuthUserData})(HeaderContainer)
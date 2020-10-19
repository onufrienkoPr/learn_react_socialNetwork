import React from 'react';
import {logout} from "../../redux/auth-reducer";
import Header from "./Header";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props}/>
    }
}

const MapStateToProps = (state) => ({
    isAuth: state.auth.isAuth, // bool
    login: state.auth.login // перекидываем логин
});

export default connect(MapStateToProps, {logout})(HeaderContainer)
import React from 'react';
import {getAuthUserData} from "../../redux/auth-reducer";
import Header from "./Header";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {
    componentDidMount() {
       this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props}/>
    }
}
const MapStateToProps = (state) => ({
    isAuth: state.auth.isAuth, // bool
    login: state.auth.login // перекидываем логин
});

export default connect(MapStateToProps, {getAuthUserData})(HeaderContainer)
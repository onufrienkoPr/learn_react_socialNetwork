import React from 'react';
import {addMessage, updateNewMessageBody} from "../../redux/messages-reducer.js";
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}

export default compose(
    connect(mapStateToProps, {addMessage, updateNewMessageBody}),
    WithAuthRedirect
)(Dialogs);
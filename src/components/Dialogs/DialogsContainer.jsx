import React from 'react';
import { addMessage, updateNewMessageBody } from "../../redux/messages-reducer.js";
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}

const DialogsContainer = connect(mapStateToProps, {addMessage, updateNewMessageBody}) (Dialogs);

export default DialogsContainer;
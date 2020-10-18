import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLenght50 = maxLengthCreator(50);

const Dialogs = (props) => {
    let state = props.messagesPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem id={d.id} icon={d.icon} name={d.name} key={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);

   let addNewMessage = (values) => {
            props.addMessage(values.newMessageBody);

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
            <Field component={Textarea} validate={[required, maxLenght50]} name='newMessageBody' placeholder='Введите сообщение...'/>
                </div>
                <div>
                    <button className={s.butmess}>Send message</button>
                </div>
            </form>
        )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;
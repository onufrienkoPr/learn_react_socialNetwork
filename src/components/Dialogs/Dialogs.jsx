import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";

const Dialogs = (props) => {
    let state = props.messagesPage;
    
    let dialogsElements = state.dialogs.map(d => <DialogItem id={d.id} icon={d.icon} name={d.name} key={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);
    let newMessageBody = state.newMessageBody;

    let onAddMessageClick = () => {
        props.addMessage();
    }

    let onMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body);

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea placeholder='Введите сообщение ...' value={newMessageBody} onChange={onMessageChange} />
                </div>
                <div>
                    <button className={s.butmess} onClick={onAddMessageClick}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
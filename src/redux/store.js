import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 15 },
                { id: 2, message: 'It`s my first post.', likesCount: 20 },
                { id: 3, message: 'It`s my first post.', likesCount: 20 },
                { id: 4, message: 'It`s my first post.', likesCount: 20 }
            ],
            newPostText: ''
        },
        messagesPage: {
            dialogs: [
                { id: 1, icon: 'https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-128.png', name: 'Dima' },
                { id: 2, icon: 'https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-128.png', name: 'Andrey' },
                { id: 3, icon: 'https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-128.png', name: 'Sveta' },
                { id: 4, icon: 'https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-128.png', name: 'Sasha' },
                { id: 5, icon: 'https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-128.png', name: 'Viktor' },
                { id: 6, icon: 'https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-128.png', name: 'Valera' }
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How is your fdssfsdf?' },
                { id: 3, message: 'Yo' }
            ],
            newMessageText: ''
        }
    },

    getState() {
        return this._state; //захватываем стэйт
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer; // observer паттерн наблюдатель
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._rerenderEntireTree(this._state);
    } 
}

export default store;
window.store = store;
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, icon: 'https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-128.png', name: 'Dima'},
        {id: 2, icon: 'https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-128.png', name: 'Andrey'},
        {id: 3, icon: 'https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-128.png', name: 'Sveta'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your fdccg?'},
        {id: 3, message: 'Yo'}
    ]
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: body}]
            };
        default:
            return state;
    }
}

export const addMessage = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody})
export default messagesReducer;
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 15 },
        { id: 2, message: 'It`s my first post.', likesCount: 20 },
        { id: 3, message: 'It`s my first post.', likesCount: 20 },
        { id: 4, message: 'It`s my first post.', likesCount: 20 }
    ],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let text = state.newPostText;
            return {
                ...state,
                posts: [...state.posts, { id: 4, message: text, likesCount: 0 }],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
            };
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
            ;
        default:
            return state;
    }
}

export const addPost = () => ({ type: ADD_POST })
export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile})

export default profileReducer;





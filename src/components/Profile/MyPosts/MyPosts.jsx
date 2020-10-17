import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
  let state = props.profilePage;
  let postsElements = state.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>);

    let addNewPost = (values) => {
        props.addPost(values.newPostText);

    }

  return (
    <div className={s.postBlock}>
      <p>My posts :</p>
        <AddPostFormRedux onSubmit={addNewPost}/>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

const AddPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newPostText' placeholder='Введите сообщение...' />
            </div>
            <div>
                <button>Add postik</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: 'profileAddPostForm'})(AddPostForm)

export default MyPosts;
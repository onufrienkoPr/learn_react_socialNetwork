import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let state = props.profilePage;
  
  let postsElements = state.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>);
  let newPostText = state.newPostText;

  let addPostik = () => {
    props.addPost();
  }

  let onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={s.postBlock}>
      <p>My posts :</p>
      <div>
        <div>
          <textarea placeholder='Напишите пост ...' onChange={onPostChange} value={newPostText} />
        </div>
        <div>
          <button onClick={addPostik}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;
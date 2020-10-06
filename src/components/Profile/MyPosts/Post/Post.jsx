import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://sun1-25.userapi.com/impg/c850608/v850608164/13ac03/9i11kiX51LQ.jpg?size=200x0&quality=90&crop=0,75,1620,1620&sign=b74d04bf99f57fc75af3afd6bb440acd&ava=1' alt='#'/>
      {props.message}
      <div>
        <span>Like</span> {props.likesCount}
      </div>
    </div>
  )
}
export default Post;
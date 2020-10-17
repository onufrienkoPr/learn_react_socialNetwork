import React from 'react';
import { addPost } from "../../../redux/profile-reducer.js"
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}

const MyPostsContainer = connect(mapStateToProps,{addPost}) (MyPosts);

export default MyPostsContainer;
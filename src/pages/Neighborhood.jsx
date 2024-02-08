import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import WritePost from './neighborhood/WritePost';
import MyPosts from './neighborhood/MyPosts';
import MyPostView from './neighborhood/MyPostView';
import MyEdit from './neighborhood/MyEdit';

const Neighborhood = () => {
  return (
    <Container>
      <Routes>
        <Route path='/writePost' element={<WritePost />} />
        <Route path='/myPosts' element={<MyPosts />} />
        <Route path='/myPosts/myPostView/:postId' element={<MyPostView />} />
        <Route path='/myPosts/myEdit/:postId' element={<MyEdit />} />
      </Routes>
    </Container>
  );
};

export default Neighborhood;

const Container = styled.div`
  box-sizing: border-box;
`;

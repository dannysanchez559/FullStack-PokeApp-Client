import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Card from '../../components/card';
import { HomeListContainer, HeaderContainer, Heading } from './styles';

const HomeScreen = () => {
  const url = 'http://localhost:3001';

  const [imgList, setImgList] = useState([]);

  useEffect(() => {
    Axios.get(url).then((res) => {
      setImgList(res.data.posts);
    });
  }, []);

  return (
    <HomeListContainer>
      <HeaderContainer>
        <Heading>All Pokemon</Heading>{' '}
      </HeaderContainer>
      {imgList.isEmpty ? (
        <>Loading...</>
      ) : (
        imgList.map((post) => {
          return (
            <Card
              url={post.url}
              _id={post._id}
              key={`key-${post._id}`}
              buttonType={'Save'}
            />
          );
        })
      )}
    </HomeListContainer>
  );
};

export default HomeScreen;

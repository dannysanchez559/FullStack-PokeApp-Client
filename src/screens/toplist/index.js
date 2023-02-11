import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { TopListContainer, HeaderContainer, Heading } from './styles';
import Card from '../../components/card';

const TopListScreen = () => {
  const url = 'http://localhost:3001/toplist';

  const [imgList, setImgList] = useState([]);

  useEffect(() => {
    Axios.get(url).then((res) => {
      setImgList(res.data);
    });
  }, []);

  return (
    <TopListContainer>
      <HeaderContainer>
        <Heading>My Pokemon</Heading>{' '}
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
              imgList={imgList}
              setImgList={setImgList}
              buttonType={'Delete'}
              name={post.name ? post.name : ''}
              age={post.age ? post.age : null}
            />
          );
        })
      )}
    </TopListContainer>
  );
};

export default TopListScreen;

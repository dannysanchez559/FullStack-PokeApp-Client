import React, { useState } from 'react';
import Axios from 'axios';
import {
  CardContainer,
  CardName,
  CardImage,
  InputContainer,
  BottomCardContainer,
  NameInputField,
  UpdateButton,
  DeleteButton,
  AgeInputField,
  ButtonContainer,
  CardAge,
} from './styles';

const Card = ({ url, _id, imgList, setImgList, buttonType, name, age }) => {
  const baseUrl = 'http://localhost:3001';
  const createListUrl = baseUrl + '/createlist';
  const deleteListUrl = baseUrl + '/delete';
  const updateCardUrl = baseUrl + '/updatecard';

  const [disableSaveButton, setDisableSaveButton] = useState(false);
  const [cardName, setCardName] = useState(name);
  const [cardAge, setCardAge] = useState(age);

  // saves card to mongodb in /toplist
  const saveCard = (url, _id) => {
    Axios.post(createListUrl, {
      _id: _id,
      url: url,
    });

    setDisableSaveButton(!disableSaveButton);
  };

  // update cardname from /toplist
  const updateCard = (_id) => {
    // update card in DB
    Axios.post(updateCardUrl, {
      _id: _id,
      cardName: cardName,
      cardAge: cardAge,
    });

    // update card in imgList state
    let tempCard = imgList.filter((card) => card._id === _id)[0];
    tempCard.name = cardName;
    tempCard.age = cardAge;

    let tempArray = [...imgList, tempCard];

    // replace card from img list state
    const updatedList = imgList.map(
      (img) => tempArray.find((obj) => obj._id === img._id) || img
    );
    setImgList(updatedList);
  };

  // delete card from /toplist
  const deleteCard = (url, _id) => {
    // removes card from state
    setImgList(imgList.filter((card) => card._id !== _id));

    Axios.post(deleteListUrl, {
      _id: _id,
      url: url,
    });
  };

  return (
    <CardContainer>
      <CardName>{name}</CardName>
      <CardAge>{age ? `${age} years old` : ''}</CardAge>
      <CardImage src={url} alt="tat" key={`pokemon-${url}`} />
      {buttonType === 'Save' ? (
        <UpdateButton
          onClick={() => saveCard(url, _id)}
          disabled={disableSaveButton}
        >
          Save
        </UpdateButton>
      ) : (
        <BottomCardContainer>
          <InputContainer>
            <NameInputField
              placeholder="name me!"
              type="text"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
            />
            <AgeInputField
              placeholder="age"
              type="number"
              value={cardAge}
              onChange={(e) => setCardAge(e.target.value)}
            />
          </InputContainer>
          <ButtonContainer>
            <UpdateButton onClick={() => updateCard(_id)}>Update</UpdateButton>
            <DeleteButton onClick={() => deleteCard(url, _id)}>
              Delete
            </DeleteButton>
          </ButtonContainer>
        </BottomCardContainer>
      )}
    </CardContainer>
  );
};

export default Card;

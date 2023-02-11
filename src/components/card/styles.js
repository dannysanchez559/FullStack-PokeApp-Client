import styled from 'styled-components';

export const CardContainer = styled.div`
  border: 1px solid whitesmoke;
  width: 350px;
  height: 425px;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 45px;
  margin: 25px;
  padding: 10px;
  background-color: white;
  box-shadow: 0 4px 2px -2px gray;
`;

export const CardName = styled.h2`
  font-size: 24px;
  font-family: 'Raleway', sans-serif;
  padding: 0;
  margin: 0;
`;

export const CardAge = styled.h4`
  font-size: 16px;
  font-family: 'Raleway', sans-serif;
  padding: 0;
  margin: 0;
`;

export const CardImage = styled.img`
  width: 250px;
  height: auto;
  border-radius: 30px;
  background-color: whitesmoke;
  margin: 10px;
`;

export const BottomCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const InputContainer = styled.div`
  width: 250px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: 'Raleway', sans-serif;
`;

export const NameInputField = styled.input`
  height: 25px;
  margin-right: 10px;
  text-align: center;
  font-size: 16px;
  border-radius: 10px;
  border: none;
  background-color: whitesmoke;
  width: 170px;
  font-family: 'Raleway', sans-serif;

  :focus {
    outline: none;
  }
`;
export const AgeInputField = styled.input`
  height: 25px;
  margin-right: 10px;
  text-align: center;
  font-size: 16px;
  border-radius: 10px;
  border: none;
  background-color: whitesmoke;
  width: 50px;
  font-family: 'Raleway', sans-serif;

  :focus {
    outline: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 150px;
  justify-content: space-between;
  margin: 0 auto;
`;

export const UpdateButton = styled.button`
  width: auto;
  height: 30px;
  background-color: #27ae60;
  color: white;
  font-size: 14px;
  border: none;
  padding: 3px 9px;
  border-radius: 7px;
  text-align: center;
  font-family: 'Raleway', sans-serif;
  font-weight: 600;

  :hover {
    background-color: #2ecc71;
    cursor: pointer;
  }
`;

export const DeleteButton = styled.button`
  width: auto;
  height: 30px;
  background-color: #c0392b;
  color: white;
  font-size: 14px;
  border: none;
  padding: 3px 9px;
  border-radius: 10px;
  text-align: center;
  font-family: 'Raleway', sans-serif;
  font-weight: 600;

  :hover {
    background-color: #e74c3c;
    cursor: pointer;
  }
`;

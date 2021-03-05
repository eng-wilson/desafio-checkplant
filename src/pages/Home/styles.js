import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ButtonsContainer = styled.View`
  position: absolute;
  z-index: 1;

  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 100%;

  bottom: 4%;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;

export const ActionButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  border-radius: 10px;

  padding: 0px 20px;

  height: 40px;
  ${(props) => {
    switch (props.action) {
      case 'back':
        return css`
          background-color: #FA7F72;
        `;

      case 'forward':
        return css`
          background-color: #6CC164;
        `;
      default:
        return css`
          background-color: #00BFFF;
        `;
    }
  }}
`;

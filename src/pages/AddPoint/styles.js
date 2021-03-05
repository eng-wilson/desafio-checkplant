import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 20px;

  align-items: center;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-top: 20px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;

export const ActionButton = styled.TouchableOpacity`
  width: 40%;

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

export const Label = styled.Text`
  color: #333;
  text-align: left;
  font-size: 14px;
  padding-bottom: 4px;
`;

export const StrongTitle = styled.Text`
  color: #333;
  text-align: center;
  font-size: 24px;
  font-weight: 800;

  padding: 20px 0px;
`;

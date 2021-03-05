import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;

  justify-content: center;
  align-items: center;
`;

export const StrongTitle = styled.Text`
  color: #333;
  text-align: center;
  font-size: 24px;
  font-weight: 800;

  padding-bottom: 10px;
`;

export const SubTitle = styled.Text`
  color: #333;
  text-align: center;
  font-size: 14px;
  padding-bottom: 4px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;

export const ActionButton = styled.TouchableOpacity`
  width: 80%;
  height: 40px;

  align-items: center;
  justify-content: center;

  border-radius: 10px;

  padding: 0px 20px;
  margin: 20px 0px;

  background-color: #6CC164;

`;

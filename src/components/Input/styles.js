import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 30%;
  padding: 10px 16px;
  background: #eee;
  
  border-radius: 10px;

  ${(props) => props.isErrored
    && css`
      border: 2px #ff6961;
    `}

  ${(props) => props.isFocused
    && css`
      border: 2px #0077ff;
    `}


  flex-direction: row;
  align-items: flex-start;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #000;
  font-size: 14px;
  
`;

import React from 'react';
import { Image } from 'react-native';

import AddSuccess from '../../assets/addSuccess.png';

import {
  Container, StrongTitle, SubTitle, ActionButton, Title,
} from './styles';

const Success = ({ navigation }) => (
  <Container>
    <Image
      source={AddSuccess}
      resizeMode="contain"
      style={{
        width: '90%',
        height: undefined,
        aspectRatio: 1,
      }}
    />

    <StrongTitle>Concluído!</StrongTitle>

    <SubTitle>Seu novo ponto foi adicionado com sucesso</SubTitle>

    <ActionButton onPress={() => navigation.popToTop()}>
      <Title>Voltar à tela de início</Title>
    </ActionButton>
  </Container>
);

export default Success;

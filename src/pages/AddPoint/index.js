import React, { useRef } from 'react';
import { Image } from 'react-native';
import { Form } from '@unform/mobile';

import NewPoint from '../../assets/newPoint.png';

import Input from '../../components/Input';

import {
  Container, ButtonsContainer, Title, ActionButton, Label, StrongTitle,
} from './styles';

const AddPoint = ({ route, navigation }) => {
  const formRef = useRef(null);

  function handleSubmit(data) {
    console.tron.log({
      latitude: route.params.coords.latitude,
      longitude: route.params.coords.longitude,
      annotation: data.annotation,
    });
  }

  return (
    <Container>

      <StrongTitle>Adicionando novo ponto</StrongTitle>

      <Image
        source={NewPoint}
        resizeMode="contain"
        style={{
          width: '90%',
          height: undefined,
          aspectRatio: 1,
          marginVertical: 20,

        }}
      />

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Label>Anotações</Label>
        <Input name="annotation" label="Anotação" />

        <ButtonsContainer>
          <ActionButton action="back" onPress={() => navigation.goBack()}>
            <Title>Voltar</Title>
          </ActionButton>

          <ActionButton action="forward" onPress={() => formRef.current.submitForm()}>
            <Title>Concluir</Title>
          </ActionButton>
        </ButtonsContainer>
      </Form>

    </Container>
  );
};

export default AddPoint;

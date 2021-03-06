import React, { useRef } from 'react';
import { Image, KeyboardAvoidingView, Platform } from 'react-native';
import { Form } from '@unform/mobile';
import AsyncStorage from '@react-native-async-storage/async-storage';

import NewPoint from '../../assets/newPoint.png';

import Input from '../../components/Input';

import {
  Container, ButtonsContainer, Title, ActionButton, Label, StrongTitle,
} from './styles';

const AddPoint = ({ route, navigation }) => {
  const formRef = useRef(null);

  const getMyMarkers = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@location');
      return jsonValue !== null ? JSON.parse(jsonValue) : [];
    } catch (e) {
      return [];
    }
  };

  async function handleSubmit(data) {
    try {
      const storagedLocations = await getMyMarkers();

      const jsonValue = JSON.stringify([...storagedLocations, {
        latitude: route.params.coords.latitude,
        longitude: route.params.coords.longitude,
        annotation: data.annotation,
        datetime: `${(new Date()).toISOString().split('T')[0]} ${(new Date()).toTimeString().split(' ')[0]}`,
        sync: false,
      }]);

      await AsyncStorage.setItem('@location', jsonValue);
      navigation.replace('Success');
    } catch (e) {
      // saving error
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
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
    </KeyboardAvoidingView>
  );
};

export default AddPoint;

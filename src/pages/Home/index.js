import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import {
  Container, Title, ActionButton, ButtonsContainer,
} from './styles';

const Home = ({ navigation }) => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    Geolocation.requestAuthorization();

    Geolocation.watchPosition((info) => {
      setLatitude(info.coords.latitude);
      setLongitude(info.coords.longitude);
    });
  }, []);

  return (
    <Container>
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude,
          longitude,
          latitudeDelta: 0.0068,
          longitudeDelta: 0.0068,
        }}
      >
        <Marker
          key={1}
          coordinate={{ latitude: latitude + 0.001, longitude: longitude + 0.001 }}
        />
        <Marker
          key={2}
          coordinate={{ latitude: latitude - 0.0006, longitude: longitude + 0.0003 }}
        />
        <Marker
          key={3}
          coordinate={{ latitude: latitude + 0.0007, longitude: longitude - 0.001 }}
        />
      </MapView>

      <ButtonsContainer>
        <ActionButton>
          <Title>Sincronizar</Title>
        </ActionButton>

        <ActionButton action="forward" onPress={() => navigation.navigate('AddPoint', { coords: { latitude, longitude } })}>
          <Title>Adicionar</Title>
        </ActionButton>
      </ButtonsContainer>

    </Container>
  );
};

export default Home;

import React, { useEffect, useState } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Container, Title, ActionButton, ButtonsContainer,
} from './styles';

const Home = ({ navigation }) => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [markers, setMarkers] = useState([]);

  const getMyMarkers = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@location');
      if (jsonValue !== null) {
        setMarkers(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.tron.log(e);
    }
  };

  useEffect(() => {
    getMyMarkers();

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
        {markers.map((marker) => (
          <Marker
            title={marker.annotation}
            description={marker.datetime}
            key={markers.indexOf(marker)}
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
            pinColor="green"
          />
        ))}
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

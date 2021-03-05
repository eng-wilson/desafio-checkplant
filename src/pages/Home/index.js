import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import _ from 'lodash';

import api from '../../services/api';

import {
  Container, Title, ActionButton, ButtonsContainer, FetchContainer, FetchTitle,
} from './styles';

const Home = ({ navigation }) => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [markers, setMarkers] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(false);

  const getMyMarkers = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@location');

      if (jsonValue !== null) {
        setMarkers(JSON.parse(jsonValue));
      } else {
        setMarkers([]);
      }
    } catch (e) {
      console.tron.log(e);
    }
  };

  async function handleSync() {
    const markersAux = markers;
    setFetching(true);

    try {
      await Promise.all(markersAux.map(async (marker) => {
        if (!marker.sync) {
          await api.syncMarkers(marker);
          _.find(markersAux, marker).sync = true;
        }
      }));

      await AsyncStorage.setItem('@location', JSON.stringify(markersAux));

      getMyMarkers();

      setTimeout(() => setFetching(false), 2000);
    } catch (e) {
      setError(true);

      setTimeout(() => {
        setError(false);
        setFetching(false);
      }, 2000);
    }
  }

  useEffect(() => {
    navigation.addListener('focus', () => {
      getMyMarkers();
    });

    Geolocation.requestAuthorization();

    Geolocation.watchPosition((info) => {
      setLatitude(info.coords.latitude);
      setLongitude(info.coords.longitude);
    });
  }, []);

  return (
    <Container>
      {fetching && (
      <FetchContainer>
        <FetchTitle>{error ? 'Ocorreu um erro. Tente novamente.' : 'Sincronização em andamento...'}</FetchTitle>
      </FetchContainer>
      )}
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
            pinColor={marker.sync ? 'gray' : 'green'}
          />
        ))}
      </MapView>

      <ButtonsContainer>
        <ActionButton onPress={() => handleSync()}>
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

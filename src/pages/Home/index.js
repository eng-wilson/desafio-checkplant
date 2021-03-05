import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import { Container } from './styles';

const Home = () => {
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
      </MapView>
    </Container>
  );
};

export default Home;

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';

import Routes from './src/routes';

import('./src/config/ReactotronConfig');

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <Routes />
      </SafeAreaView>
    </NavigationContainer>
  );
}

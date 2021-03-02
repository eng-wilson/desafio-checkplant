import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import AddPoint from '../pages/AddPoint';
import Success from '../pages/Success';

const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddPoint" component={AddPoint} />
      <Stack.Screen name="Success" component={Success} />
    </Stack.Navigator>
  );
}

export default Routes;

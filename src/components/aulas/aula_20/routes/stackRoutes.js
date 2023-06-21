import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Detalhes from '../pages/Details';

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detalhes"
        component={Detalhes}
        options={{
          headerShown: true
        }}
      />
    </Stack.Navigator>
  )
}

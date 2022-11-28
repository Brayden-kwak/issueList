import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListDetailScreen from './screens/ListDetailScreen';
import ListScreen from './screens/ListScreen';

export type RootStackParams = {
  ListScreen: undefined;
  ListDetailScreen: {
    item: object;
  };
};

const Stack = createNativeStackNavigator<RootStackParams>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ListScreen"
        screenOptions={() => ({headerShown: false})}>
        <Stack.Screen name="ListScreen" component={ListScreen} />
        <Stack.Screen name="ListDetailScreen" component={ListDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

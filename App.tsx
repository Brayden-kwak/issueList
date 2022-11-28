import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from './Context/Provider';
import ListDetailScreen from './screens/ListDetailScreen';
import ListScreen from './screens/ListScreen';
import {IssueList} from './api/IssueApi';

export type RootStackParams = {
  ListScreen: undefined;
  ListDetailScreen: {
    item: IssueList;
  };
};

const Stack = createNativeStackNavigator<RootStackParams>();
const App = () => {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="ListScreen"
          screenOptions={() => ({headerShown: false})}>
          <Stack.Screen name="ListScreen" component={ListScreen} />
          <Stack.Screen name="ListDetailScreen" component={ListDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

import * as React from 'react';
//import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import loginPage from './yes_shop/module/login/loginPage';
import DealerHome from '././yes_shop/module/home/Dealer/DealerHome';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="loginPage">
        <Stack.Screen name="loginPage" component={loginPage} />
        <Stack.Screen name="Dealer Home" component={DealerHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
//        <Stack.Screen name="Details" component={DetailsScreen} />
export default App;

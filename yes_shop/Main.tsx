import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackView} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      {/* Rest of your app code */
      <Stack.Navigator>
      <Stack.Screen name="Login" component={loginPage}  options={{title: 'Welcome'}}  />
      <Stack.Screen name="DealerHome" component={DealerHome} />
    </Stack.Navigator>
    }
    </NavigationContainer>
  );
};

export default App;
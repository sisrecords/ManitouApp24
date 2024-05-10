import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/CategoriesScreen.tsx';
import SongListScreen from './screens/LessonsScreen.tsx';
import NewLoginScreen from './screens/NewLoginScreen.tsx';
import {I18nManager, Text, View} from 'react-native';
import ConfirmOTPScreen from './screens/ConfirmOTPScreen.tsx';

const Stack = createStackNavigator();

I18nManager.forceRTL(true);

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CategoryDetails"
          component={SongListScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Login" component={NewLoginScreen} />
        <Stack.Screen name="ConfirmOTP" component={ConfirmOTPScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

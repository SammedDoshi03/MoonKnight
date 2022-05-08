/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Chats from './src/components/screens/Chats';
import StarredMessages from './src/components/StarredMessages';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';


import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './src/Redux/store';

//Native Navigation
import { NavigationContainer } from '@react-navigation/native';
// Stack Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GroupProfile from './src/components/screens/GroupProfile';

const Stack = createNativeStackNavigator();


const ChatScreens = (props) => (
  // <SafeAreaView  style={{ flex: 1 }}>
  <Stack.Navigator initialRouteName='Chats'>
     {/* <Stack.Screen name='Chats Screen' component={ChatScreen}   initialParams={{ ...props }} options={{ headerShown: false }}  /> */}
     <Stack.Screen name='Chats' component={Chats}   initialParams={{ ...props }} options={{ headerShown: false }}  />
     <Stack.Screen name='Starred Messages' component={StarredMessages} initialParams={{ ...props }}  options={{ headerShown: false }}  />
     <Stack.Screen name='Group Profile' component={GroupProfile} initialParams={{ ...props }}  options={{ headerShown: false }}  />
   </Stack.Navigator>
  // </SafeAreaView>
)


const AppNavigator = () => (
  <NavigationContainer>
    <ChatScreens/>
  </NavigationContainer>
);


const App = () =>  {
  return (
    <>
      <IconRegistry icons={EvaIconsPack}/>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ApplicationProvider {...eva} theme={eva.light}>
                <AppNavigator/>
          </ApplicationProvider>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;

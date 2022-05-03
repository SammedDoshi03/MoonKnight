/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { SafeAreaView, ScrollView, StatusBar,StyleSheet, Text,useColorScheme,View,} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

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
     <Stack.Screen name='Chats' component={Chats}   initialParams={{ ...props }} options={{ headerShown: false }}  />
     <Stack.Screen name='Starred Messages' component={StarredMessages} initialParams={{ ...props }}  options={{ headerShown: false }}  />
     <Stack.Screen name='Group Profile' component={GroupProfile} initialParams={{ ...props }}  options={{ headerShown: false }}  />
   </Stack.Navigator>
  // </SafeAreaView>
)


const Start = () => {

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

     return (
      
       <NavigationContainer>
        
          {/* <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={backgroundStyle}> */}
              {/* <Header /> */}
              {/* <ChatScreen/> */}
                <ChatScreens/> :
            {/* </ScrollView>
          </SafeAreaView> */}
         
       </NavigationContainer>
       
     );
}

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

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

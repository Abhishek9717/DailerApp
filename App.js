import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StyleSheet, View } from 'react-native';

import { Provider } from 'react-redux';
import store from './src/redux/store/store'

import Main from './src/Screens/Main';
import Details from './src/Screens/Details';

const Stack = createStackNavigator();

class App extends React.Component{
  
  render(){
    return(
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Main" screenOptions={{
              headerStyle:{
                backgroundColor:'#009387',
              },
              headerTintColor:'#ffff',
              headerTitleStyle:{
                fontWeight:'900',
                alignSelf:'center'
              }
          }}>  
            <Stack.Screen name="Main" component={Main} options={{ title: 'ENQUIRIES' }} />
            
            <Stack.Screen name="Details" component={Details} />
        
        </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
};

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
});



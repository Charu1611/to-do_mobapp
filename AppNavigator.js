import { NavigationContainer } from '@react-navigation/native';
import  {View,Button, StatusBar,} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from './Home';
import App from './App';
const Stack = createNativeStackNavigator();

export default function AppNavigator(){
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName='App' screenOptions={{
            title: 'To-Doo',
            headerTintColor: 'rgb(31,60,136)',
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 23
              },
              headerShadowVisible: false,
            
          }}>
          <Stack.Screen name='Home' component={Home} options={{
            title: 'Home',
          }}  />
          <Stack.Screen name='App' component={App}/>
        </Stack.Navigator>
        <StatusBar backgroundColor={'red'}/>
      </NavigationContainer>
    )
}
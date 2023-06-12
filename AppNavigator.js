import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import  {View,Button, StatusBar,} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import App from './App';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerRoutes(){
  return(
    
      <Drawer.Navigator initialRouteName='App'>
      <Drawer.Screen name='App' component={App} options={{ headerShown: false }} />
        <Drawer.Screen name='Home' component={Home} />
        
      </Drawer.Navigator>
    
  )
}

export default function AppNavigator(){
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName='App1' screenOptions={{
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
          <Stack.Screen name='App1' component={DrawerRoutes}/>
        </Stack.Navigator>
        <StatusBar backgroundColor={'red'}/>
      </NavigationContainer>
    )
}
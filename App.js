import {View,Text,StyleSheet,
  Image,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import TypeWriter from 'react-native-typewriter'

export default function App(props) {
  const SvgImg1 = require('./Play').default;
  console.log('props----',props.navigation);
  return (
    
    <View style={styles.container}>

    <StatusBar hidden backgroundColor={'blue'}/>
    
      <Text style={styles.headerText}>
        Manage your {'\n'}team and everything {'\n'}with{' '}
        <TypeWriter typing={1}><Text style={styles.todoText}>To-Doo</Text>{' '}</TypeWriter>
      </Text>
      <View style={{flex: 1, alignItems: 'center', padding: 30}}>
        <Image
          style={styles.svgImage}
          source={{
            uri: 'https://img.freepik.com/free-vector/businessman-holding-pencil-big-complete-checklist-with-tick-marks_1150-35019.jpg?w=1480&t=st=1686284956~exp=1686285556~hmac=4a4c8dd0630bc52468197f526c3b388e7d58317e2c930ab463e0a66b29e3fca2',
          }}
        />
      </View>
      <View>
        <Text style={{color: '#a6a6a6', fontSize: 18, fontStyle: 'italic'}}>
          When you're overwhelmed by work {' '}
          {'\n'}plate, top and rethink.
          
        </Text>
        
        <SvgImg1 style={styles.svgImg} />
      </View>
      <TouchableOpacity 
      activeOpacity={0.5}
      style={{padding: 10}} 
      onPress={()=>props.navigation.navigate("Home")}>
        <View style={styles.startBtn}>
          <Text style={{color: 'white', fontSize: 17, fontWeight: '600'}}>
            Let's Start
          </Text>

        </View>
      </TouchableOpacity>
    </View>

  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
  },
  headerText: {
    fontSize: 38,
    fontWeight: 'bold',
    color: 'rgb(31,60,136)',
    fontFamily: 'BagelFatOne-Regular',
    marginTop: 10,
  },
  svgImage: {
    height: '100%',
    width: '100%',
  },
  todoText: {
    color: 'rgb(112,140,213)',
    textDecorationLine: 'underline',
  },
  startBtn: {
    backgroundColor: 'rgb(31,60,136)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    // borderShadow: 'rgb(31,60,136 )',
    // elevation: 5,
  },
  svgImg: {
    alignSelf: 'center',
    marginVertical: 25,
  },
});

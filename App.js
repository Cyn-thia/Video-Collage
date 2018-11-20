import React from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';
import { RNCamera, FaceDetector } from 'react-native-camera';


export default class App extends React.Component{
  render(){
    return(
        <Text style={styles.title}>Hi</Text>
      )
  }
}


const styles = StyleSheet.create({
  title: {
    color: 'red',
    fontSize: 50,
    textAlign: 'center',
    top: 50
  }
});

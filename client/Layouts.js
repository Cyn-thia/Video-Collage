import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions,
  TouchableHighlight,
  TouchableNativeFeedback,
  AsyncStorage } from 'react-native';
import Collage from './Collage';
import SwipeCards from './SwipeCards';

export default class Layouts extends React.Component{
  state = {
    layout: 2,
  }

  selectLayout = () => {
    // console.log("this is identifier",evt.nativeEvent.identifier)
    // this.props.navigation.navigate('Collage')
    this.retrieveData()
    console.log('test')
  }

  storeData = async () => {
    console.log('store!')
    AsyncStorage.setItem('layout', this.state.layout)
    try {
      await AsyncStorage.setItem('layout', this.state.layout);
      console.log('store!')
    } catch (error) {
      // Error saving data
    }
  }

  retrieveData = async () => {
  try {
    console.log('retrieve')
    const value = await AsyncStorage.getItem('layout');
    console.log('this is data',value)
    if (value !== null) {
      // We have data!!
      console.log('this is data',value);
    }
   } catch (error) {
     // Error retrieving data
   }
}

  swipe = () => {
    console.log('clicky')
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Layouts!</Text>
        <View style={styles.body}>
          <TouchableNativeFeedback onPress={() => this.swipe()}>
            <Image style={styles.leftArrow}source={require('./assets/left-chevron.png')}></Image>
          </TouchableNativeFeedback>
          <View style={styles.boxContainer}>
            <TouchableHighlight testID="1" onPress={() => this.storeData()}>
              <Image
              style={styles.box1}></Image>
            </TouchableHighlight>
            <TouchableHighlight id={"1"} onPress={() => this.retrieveData()}>
              <Image
              style={styles.box2}></Image>
            </TouchableHighlight>
            <Image style={styles.box}></Image>
            <Image style={styles.box}></Image>
            <Image style={styles.box}></Image>
            <Image style={styles.box}></Image>
            <Image style={styles.box}></Image>
            <Image style={styles.box8}></Image>
          </View>
          <Image style={styles.rightArrow}source={require('./assets/right-chevron.png')}></Image>
        </View>
        <Button
          title="Select this layout"
          onPress={() => this.props.navigation.navigate('Collage')}
        />
      </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#B2DFDB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 50,
    color: "#00BFA5",
  },
  body:{
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxContainer:{
    height: Dimensions.get("window").height - 200,
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderWidth:2,
    borderColor: 'white',
  },
  leftArrow:{
    width: 50,
    height: 50,
    borderWidth:2,
    borderColor: 'white',
  },
  rightArrow:{
    width: 50,
    height: 50,
    borderWidth:2,
    borderColor: 'white',
  },
  box:{
    height: 100,
    backgroundColor: '#E0F2F1',
    borderWidth:2,
    borderColor: 'white',
    margin: 15,
    alignItems: 'center',
  },
  box1:{
    width: 100,
    height: 100,
    backgroundColor: '#00BFA5',
    borderWidth:2,
    borderColor: 'white',
    margin: 15,
    alignItems: 'center',
  },
  box2:{
    width: 100,
    height: 100,
    backgroundColor: 'pink',
    borderWidth:2,
    borderColor: 'white',
    margin: 15,
    alignItems: 'center',
  },
  box8:{
    width: 100,
    height: 100,
    backgroundColor: 'white',
    borderWidth:2,
    borderColor: 'white',
    margin: 15,
    alignItems: 'center',
  }
})

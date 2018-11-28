import React from 'react';
import { Text, StyleSheet, Image, View, ImageBackground, Dimensions } from 'react-native';
import * as Expo from "expo";

export default class Home extends React.Component {

  // async componentDidMount() {
  //   //to load font. must have ttf file in assests folder
  //   Expo.font.loadAsync({
  //     'indieFlower': require('./assets/IndieFlower.ttf')
  //   })
  // }

  render() {
    setTimeout(() => {
      this.props.navigation.navigate('Layouts')
    }, 1000);
    return(
      <View style={styles.container}>
        <Text style={styles.splash}>Splash!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B2DFDB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splash: {
    fontSize: 50,
    color: "#00BFA5",
  },
  ImageBackground: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },
  logo: {
    height: 300,
    width: Dimensions.get("window").width,
    justifyContent: 'center',
  }
});

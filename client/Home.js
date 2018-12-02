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
    }, 6000);
    return(
      <View style={styles.container}>
          <Image
            source={require("./assets/coollogo_com-26292471.png")}
            style={styles.splash} />
          <Image
            source={require("./assets/loader-alt.gif")}
            style={styles.gif} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splash: {
    zIndex: 5,
    marginTop: 100,
    resizeMode: 'contain',
    width: Dimensions.get("window").width - 100,
  },
  gif: {
    resizeMode: 'contain',
    width: Dimensions.get("window").width + 200
  },
});

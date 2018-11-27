import React from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions } from 'react-native';
import Collage from './Collage'

export default class Layouts extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Layouts!</Text>
        <View style={styles.body}>
          <View style={styles.boxContainer}>
            <Image style={styles.box}></Image>
            <Image style={styles.box}></Image>
            <Image style={styles.box}></Image>
            <Image style={styles.box}></Image>
            <Image style={styles.box}></Image>
            <Image style={styles.box}></Image>
            <Image style={styles.box}></Image>
            <Image style={styles.box}></Image>
          </View>
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
    backgroundColor: '#B2DFDB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 50,
    color: "#00BFA5",
  },
  body:{
    justifyContent: 'center'
  },
  boxContainer:{
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 200,
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  box:{
    width: 100,
    height: 100,
    backgroundColor: '#E0F2F1',
    borderWidth:2,
    borderColor: 'white',
    margin: 20,
    alignItems: 'center',
  }
})

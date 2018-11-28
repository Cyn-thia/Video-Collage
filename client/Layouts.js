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
            <Image style={styles.box1}></Image>
            <Image style={styles.box2}></Image>
            <Image style={styles.box}></Image>
            <Image style={styles.box}></Image>
            <Image style={styles.box}></Image>
            <Image style={styles.box}></Image>
            <Image style={styles.box}></Image>
            <Image style={styles.box8}></Image>
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
    justifyContent: 'center',
  },
  boxContainer:{
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 200,
    flexWrap: 'wrap',
    paddingLeft: 70,
    paddingTop: 35,
  },
  box:{
    width: 100,
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

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  AsyncStorage,
  ReactNativeComponentTree } from 'react-native';
import Collage from './Collage';
// import Carousel from './Carousel';
import axios from 'axios'

export default class Layouts extends React.Component{
  state = {
    apiDataLoaded:null,
    apiData:[],
    layout: '',
    collage_id: 9,
  }

  selectLayout = async (e) => {
    const layout = e.target
    await this.setState({
        layout: layout
      })
    // this.storeData()
    this.props.navigation.navigate('Collage', { collage_id: this.state.collage_id })
  }

  storeData = () => {
    axios.post(`http://173.2.1.190:3001/layout`, {
      layout: this.state.layout
    })
    console.log('STATE',this.state)
    // .then(res =>
      this.setState({
        apiDataLoaded: true,
        apiData: res.data.data,
        collage_id: res.data.data.collage_id,
    //     layout: e.target
      })

    // )

   // .then(data => this.props.navigation.navigate('Collage',
   //  {collage_id: collage_id }))
    // this.setState({
    //   layout: this.state.layout,
    //   collage_id: this.state.collage_id
    // })
  }

  // retrieveData = async () => {
  //  await
//   try {
//     console.log('retrieve')
//     const value = await AsyncStorage.getItem('layout');
//     console.log('this is data',value)
//     if (value !== null) {
//       // We have data!!
//       console.log('this is data',value);
//     }
//    } catch (error) {
//      // Error retrieving data
//    }
// }

//   swipe = () => {
//     console.log('clicky')
//   }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>select a layout</Text>
        <View style={styles.body}>
          <View style={styles.boxContainer}>
            <TouchableOpacity onPress={(e) => this.selectLayout(e)}>
              <Image
                source={require("./assets/layout1.png")}
                style={styles.box}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={(e) => this.selectLayout(e)}>
              <Image
                source={require("./assets/layout3.png")}
                style={styles.box}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={(e) => this.selectLayout(e)}>
              <Image
                source={require("./assets/layout3.2.png")}
                style={styles.box}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={(e) => this.selectLayout(e)}>
              <Image
                source={require("./assets/layout4.1.png")}
                style={styles.box}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={(e) => this.selectLayout(e)}>
              <Image
                source={require("./assets/layout2.png")}
                style={styles.box}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={(e) => this.selectLayout(e)}>
              <Image
                source={require("./assets/layout3.1.png")}
                style={styles.box}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={(e) => this.selectLayout(e)}>
              <Image
                source={require("./assets/layout4.png")}
                style={styles.box}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={(e) => this.selectLayout(e)}>
              <Image
                source={require("./assets/layout4.2.png")}
                style={styles.box}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 30,
    color: "#00BFA5",
  },
  body:{
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxContainer:{
    flexWrap:'wrap',
    height: Dimensions.get("window").height - 200,
    justifyContent: 'center',
    borderWidth:2,
    borderColor: 'white',
  },
  box:{
    height: 100,
    width: 100,
    backgroundColor: '#E0F2F1',
    borderWidth:2,
    borderColor: 'white',
    margin: 25,
    alignItems: 'center',
  }
})

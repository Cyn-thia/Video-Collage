import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Dimensions, Image } from 'react-native';
import Cam from './Camera'
import Vid from './Vid'
import { Video } from 'expo'
import * as firebase from 'firebase'
import axios from 'axios';


const firebaseConfig = {
  apiKey: "AIzaSyB5nd8SxT_px0lN41kCPRRtzbVsPgpz1HM",
  authDomain: "video-collage-f93f5.firebaseapp.com",
  databaseURL: "https://video-collage-f93f5.firebaseio.com",
  storageBucket: "gs://video-collage-f93f5.appspot.com"
};
firebase.initializeApp(firebaseConfig)
// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();

// Create a storage reference from our storage service
var storageRef = storage.ref();


export default class Collage extends React.Component {
  state = {
    currentVid: '',
    apiDataLoaded: false,
    apiData: null,
    collage_id: '',
    position: 2,
    plusSign1:'',
    plusSign2: '',
    plusSign3: '',
    ipAddress: '',
  }

  componentDidMount() {
    axios.get(`http://${this.props.navigation.getParam('ipAddress')}:3001/collage/14`)
    .then( res => {
      this.setState({
        apiDataLoaded: true,
        apiData: res.data.data,
        collage_id: this.props.navigation.getParam('collage_id'),
        ipAddress: this.props.navigation.getParam('ipAddress')
      })
      // console.log('this is my log', Object.keys(res.data.data))
      console.log('this.props in collage',this.props.navigation.getParam('ipAddress'))
    })
  }

  renderVideos() {
    if(this.state.apiDataLoaded) {
      return this.state.apiData.map(d => {
        return(
          <Vid key={d.video_id} video={d} />
        )
      })
    } else return <Text>Loading...</Text>
  }

  selectPosition = async (e) =>{

    const position = e.target
    await this.setState({
      position: position
    })
    console.log()
    this.props.navigation.navigate('Cam',
      {position: this.state.position,
       collage_id: this.props.navigation.getParam('collage_id'),
       ipAddress: this.props.navigation.getParam('ipAddress'),
     })
  }

  render() {
    console.log('COLLAGE ID passed from Layout', this.props.navigation.getParam('collage_id'))
    console.log('COLLAGE Layout passed from Layout', this.props.navigation.getParam('layout'))
    console.log('COLLAGE ip passed from Layout', this.props.navigation.getParam('ipAddress'))
    console.log('COLLAGE passed from camera', this.props.navigation.getParam('file_name'))
    console.log('COLLAGE state', this.state.apiData)
    // let vid;
    // storageRef.child('file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FProject-4-654a6ef7-c827-4005-b901-bcd95ed4cf40/Camera/2dea1104-c5d1-40aa-8d3b-087fc6325df4.mp4').getDownloadURL().then(function(url) {
    // console.log('this is url', url)
    // return vid = url
  // })

    return (
      <View style={styles.container}>
      <Expo.LinearGradient
        style={styles.gradient}
        colors={['#08e6a6', "#05edfe", "#4ba5f2"]}>
      </Expo.LinearGradient>
        <View style={styles.topBar}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Layouts')}
            style={styles.xTouch}
          >
            <Image
            source={require('./assets/cancel-white.png')}
            style={styles.xPic} />
          </TouchableOpacity>
        </View>
        <View style={styles.videoContainer}>
          <View style={styles.plusSignContainer}>
            <View>
              <Text style={styles.plusSign}>+</Text>
            </View>
            <View>
              <Text style={styles.plusSign}>+</Text>
            </View>
            <View>
              <Text style={styles.plusSign}>+</Text>
            </View>
            <View>
              <Text style={styles.plusSign}>+</Text>
            </View>
          </View>
          <View style={styles.vidContainer}>
            {this.renderVideos()}
          </View>
          <View style={styles.box1}>
            <TouchableOpacity
              style={styles.touch}
              onPress={(e) => this.selectPosition(e)}>
            </TouchableOpacity>
          </View>
          <View style={styles.box2}>
            <TouchableOpacity
              style={styles.touch}
              onPress={(e) => this.selectPosition(e)}>
            </TouchableOpacity>
          </View>
          <View style={styles.box3}>
            <TouchableOpacity
              style={styles.touch}
              onPress={(e) => this.selectPosition(e)}>
            </TouchableOpacity>
          </View>
          <View style={styles.box4}>
            <TouchableOpacity
              style={styles.touch}
              onPress={(e) => this.selectPosition(e)}>
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
    backgroundColor: 'white',
    alignItems: 'center',
  },
  gradient: {
    position: 'absolute',
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    opacity: .3,
  },
  topBar: {
    flex:.25,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    width: Dimensions.get("window").width,
    padding: 20,
  },
  xTouch:{
    height: 50,
    width: 50,
  },
  xPic: {
    resizeMode: 'contain',
    height: 30,
    width: 30,
  },
  vidContainer:{
    position:'absolute',
    flexWrap: 'wrap',
    width: Dimensions.get("window").width-20,
    height: Dimensions.get("window").width,
  },
  plusSignContainer:{
    position:'absolute',
    flexWrap: 'wrap',
    width: Dimensions.get("window").width-20,
    height: Dimensions.get("window").width-20,
  },
  plusSign:{
    position:'relative',
    color: 'white',
    fontSize: 150,
    width: Dimensions.get("window").width/2 - 10,
    height: Dimensions.get("window").width/2 - 10,
    textAlignVertical: 'center',
    justifyContent:'center',
    textAlign: 'center',
    alignContent: 'center',
  },
  videoContainer: {
    flexWrap:'wrap',
    justifyContent:'center',
    margin: 10,
    width: Dimensions.get("window").width-20,
    height: Dimensions.get("window").width,
  },
  box1:{
    width: Dimensions.get("window").width/2 - 8,
    height: Dimensions.get("window").width/2,
    borderWidth: 10,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent:'center',
  },
  box2:{
    width: Dimensions.get("window").width/2 - 8,
    height: Dimensions.get("window").width/2 -10,
    borderRightWidth: 10,
    borderBottomWidth: 10,
    borderLeftWidth: 10,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent:'center',
  },
  box3:{
    width: Dimensions.get("window").width/2 - 8,
    height: Dimensions.get("window").width/2,
    borderTopWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 10,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent:'center',
  },
  box4:{
    width: Dimensions.get("window").width/2 - 8,
    height: Dimensions.get("window").width/2 - 10,
    borderRightWidth: 10,
    borderBottomWidth: 10,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent:'center',
  },
  touch:{
    width: Dimensions.get("window").width/2 - 10,
    height: Dimensions.get("window").width/2 - 10,
    },
  video: {
    position: 'absolute',
    flexWrap: 'wrap',
    width: Dimensions.get("window").width/2 - 8,
    height: Dimensions.get("window").width/2 - 8,
    borderWidth: 10,
    borderColor: 'white',
  }
})

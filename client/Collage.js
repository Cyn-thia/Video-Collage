import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Dimensions } from 'react-native';
import Cam from './Camera'
import { Video } from 'expo'
import * as firebase from 'firebase'


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
    currentVid: ''
  }

  render() {
      let vid;
      storageRef.child('file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FProject-4-654a6ef7-c827-4005-b901-bcd95ed4cf40/Camera/2dea1104-c5d1-40aa-8d3b-087fc6325df4.mp4').getDownloadURL().then(function(url) {
console.log(url)
return vid = url

})

    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Layouts')}>
              <Text style={styles.backButton}> Back </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}> yay collage!</Text>
        <View style={styles.videoContainer}>
            <Video
              source={{ uri: 'file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FProject-4-654a6ef7-c827-4005-b901-bcd95ed4cf40/Camera/2fabbdac-1535-47b4-9b93-bbf193389fd9.mp4' }}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode='contain'
              shouldPlay
              isLooping
              style={styles.video}
            />
            <Video
              source={{ uri: 'file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FProject-4-654a6ef7-c827-4005-b901-bcd95ed4cf40/Camera/521652e5-fde7-4a9d-a216-f9953b2a751b.mp4' }}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode='contain'
              shouldPlay
              isLooping
              style={styles.video}
            />
            <Video
              source={{ uri: 'file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FProject-4-654a6ef7-c827-4005-b901-bcd95ed4cf40/Camera/4bea576c-84b9-4cde-bb04-92ddd0498cab.mp4' }}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode='contain'
              shouldPlay
              isLooping
              style={styles.video}
            />
            <Video
              source={{ uri: 'file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FProject-4-654a6ef7-c827-4005-b901-bcd95ed4cf40/Camera/0b0656bd-29ed-4d74-825e-2a2c0138e2ff.mp4' }}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode='contain'
              shouldPlay
              isLooping
              style={styles.video}
            />
            <Video
              source={{ uri: 'file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FProject-4-654a6ef7-c827-4005-b901-bcd95ed4cf40/Camera/36ac6457-c97d-4c5e-b2e8-cb4cec9d4c67.mp4' }}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode='contain'
              shouldPlay
              isLooping
              style={styles.video}
            />
          </View>
        <Button title='Go to Camera' onPress={() => this.props.navigation.navigate('Cam', {currentVid: this.state.currentVid})}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B2DFDB',
    alignItems: 'center',
    borderWidth:2,
    borderColor: 'black',
  },
  topBar: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    width: Dimensions.get("window").width,
  },
  backButton: {
    color: "#00BFA5",
    fontSize:20,
    margin: 20,
  },
  title:{
    fontSize: 50,
    color: "#00BFA5",
  },
  videoContainer: {
    flexWrap: 'wrap',
    width: 300,
    flexDirection: 'row',
    justifyContent:'center',
    margin: 10,
  },
  video: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: 'white',
  },
})

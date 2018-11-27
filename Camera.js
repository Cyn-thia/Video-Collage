import React from 'react';
import { View, TouchableOpacity, Text, Button, StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation';
import { Camera, Permissions, FileSystem } from 'expo';
import * as Expo from "expo";
import Collage from './Collage'
import * as firebase from 'firebase'
import Config from './Config'
import uuid from 'uuid'

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

export default class Cam extends React.Component {
    state = {
      hasCameraPermission: null,
      hasAudioPermission: null,
      type: Camera.Constants.Type.front,
      record: 'Record',
    };

    async componentDidMount() {
      const { status } = await Permissions.askAsync(Permissions.CAMERA, Permissions.AUDIO_RECORDING);
      this.setState({
        hasCameraPermission: status === 'granted',
        hasAudioPermission: status === 'granted'
      });
    }

    recVid = () => {
      if (this.camera) {
        this.camera.recordAsync({ maxDuration: 100000, mute: false })
          .then(response => { this.uploadVidAsync(response) });
        // this.props.currentVid = response.uri
      }
      // else {() => { this.stopRecording() } }
      // this.setState({
      //   record: this.state.record === 'Record'
      //     ? 'Stop Recording'
      //     : 'Record'
      // });
    }

    stopRecording = (response) => {
      this.camera.stopRecording();
      this.camera.pausePreview()
    }

    uploadVidAsync = async (photo) => {
      const response = await `${photo.uri}`;
      console.log(response)
      const blob = await new Blob([response], { type: `video/mp4` });
      console.log(blob)
      var vidRef = await storageRef.child(photo.uri);
      const snapshot = await vidRef.put(blob);
      console.log('sanity check')
      return snapshot.downloadURL;
    }

    renderTopBar = () =>
      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => { this.props.navigation.navigate('Collage') }}>
          <Text
            style={{ fontSize: 18, marginTop: 0, color: 'white' }}>
            {' '}Back{' '}
          </Text>
        </TouchableOpacity>
      </View>

    renderBottomBar = () =>
      <View
        style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.flipButton}
          onPress={() => {
            this.setState({
              type: this.state.type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back,
            });
          }}>
          <Text
            style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
            {' '}Flip{' '}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: .2,
            alignSelf: 'flex-end',
            alignItems: 'center',
          }}
          onPress={ this.recVid }
          >
          <Text
            style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
            Record
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: .2,
            alignSelf: 'flex-end',
            alignItems: 'center',
          }}
          onPress={ this.stopRecording }
          >
          <Text
            style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
            Stop
          </Text>
        </TouchableOpacity>
      </View>


  render() {;

    if (this.state.hasCameraPermission === null) {
      return <View />;
    } else if (this.state.hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type}
            ref={ref => { this.camera = ref; }}>
            {this.renderTopBar()}
            {this.renderBottomBar()}
          </Camera>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  topBar: {
    flex: 0.1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  backButton: {
    flex: 0.2,
    alignSelf: 'flex-end',
    alignItems: 'center',
    fontSize: 18,
    marginTop: 0,
    color: 'white'
  },
  bottomBar: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  flipButton: {
    flex: .2,
    alignSelf: 'flex-end',
    alignItems: 'center',
  }
  })

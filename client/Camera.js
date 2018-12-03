import React from 'react';
import { View, TouchableOpacity, Text, Button, StyleSheet, Dimensions, Image } from 'react-native'
import { withNavigation } from 'react-navigation';
import { Camera, Permissions, FileSystem } from 'expo';
import * as Expo from "expo";
import Collage from './Collage'
import * as firebase from 'firebase'
import Config from './Config'
import uuid from 'uuid'
import axios from 'axios'


// const firebaseConfig = {
//   apiKey: "AIzaSyB5nd8SxT_px0lN41kCPRRtzbVsPgpz1HM",
//   authDomain: "video-collage-f93f5.firebaseapp.com",
//   databaseURL: "https://video-collage-f93f5.firebaseio.com",
//   storageBucket: "gs://video-collage-f93f5.appspot.com"
// };
// firebase.initializeApp(firebaseConfig)
// Get a reference to the storage service, which is used to create references in your storage bucket
// var storage = firebase.storage();

// Create a storage reference from our storage service
// var storageRef = storage.ref();

export default class Cam extends React.Component {
  state = {
    hasCameraPermission: null,
    hasAudioPermission: null,
    type: Camera.Constants.Type.front,
    record: 'Record',
    file_name:'',
    ipAddress: '',
    timer: 0,
  }

  async componentDidMount() {
    console.log('ipaddress',this.props.navigation.getParam('ipAddress'))
    const { status } = await Permissions.askAsync(Permissions.CAMERA, Permissions.AUDIO_RECORDING);
    this.setState({
      hasCameraPermission: status === 'granted',
      hasAudioPermission: status === 'granted',
      ipAddress: this.props.navigation.getParam('ipAddress'),
      collage_id: '',
    });
  }



  recVid = () => {
    if (this.camera) {
      this.camera.recordAsync({ maxDuration: 6000, mute: false })
        .then(async response => {
          console.log('CAM this is response.uri', response.uri)
          const file_name = response.uri
          // this.uploadVidAsync(response),
          await this.setState(prevState => ({
            file_name:file_name,
            collage_id:this.props.navigation.getParam('collage_id')
          }))
          // console.log('CAM STATE after set file', this.state)
        })
        .then(() => {
          let collage_id = this.props.navigation.getParam('collage_id')
          let position = this.props.navigation.getParam('position')
          let file_name = this.state.file_name
          let ipAddress = this.props.navigation.getParam('ipAddress')
          console.log('CAM state.file_name', this.state.file_name)

          axios.post(`http://173.2.1.190:3001/recVideo`, {
            collage_id: collage_id,
            position: position,
            file_name: file_name
              })
           .then(data => this.props.navigation.navigate('Collage',
            { file_name: this.state.file_name,
              collage_id: this.state.collage_id,
              ipAddress: ipAddress }),
           )
        })
        setInterval(() => this.timer(), 1000);

      // else {() => { this.stopRecording() } }
      // this.setState({
      //   record: this.state.record === 'Record'
      //     ? 'Stop Recording'
      //     : 'Record'
      // });
   } // console.log('this is state',this.state)
  }

  stopRecording = () => {
    this.camera.stopRecording();
    this.camera.pausePreview();
  }

  uploadVidAsync = async (video) => {
    const response = await `${video.uri}`;
    // console.log(response.slice(132, 200))
    // console.log('this is response', response)
    const blob = await new Blob([response], { type: `video/mp4` });
    console.log('this is blob', blob)
    var vidRef = await storageRef.child(video.uri);
    const snapshot = await vidRef.put(blob);
    console.log('sanity check')
    let vidUrl = snapshot.metadata.contentDisposition
    shortUrl = vidUrl.slice(28)
    return snapshot.downloadURL;
  }

  timer() {
    this.setState({
    timer: this.state.timer + 1
  })
    }

  renderTopBar = () =>
    <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.xTouch}
          onPress={() => { this.props.navigation.navigate('Collage') }}>
          <Image
            source={require('./assets/cancel-white.png')}
            style={styles.xPic} />
        </TouchableOpacity>
        <Text style={styles.timer}>{this.state.timer}</Text>
        <TouchableOpacity
          style={styles.flipTouch}
          onPress={() => {
            this.setState({
              type: this.state.type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back,
            });
          }}>
           <Image
            source={require('./assets/flip-white.png')}
            style={styles.flipPic} />
        </TouchableOpacity>
      </View>

  renderBottomBar = () =>
    <View
        style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.recordTouch}
          onPress={ this.recVid }
          >
          <Text style={styles.recordText}>
            Record
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.camTouch}
          onPress={ this.recVid }>
          <Image
            source={require('./assets/camcorder.png')}
            style={styles.cam} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.stopTouch}
          onPress={ this.stopRecording }
          >
          <Text style={styles.stopText}>
            Stop
          </Text>
        </TouchableOpacity>
      </View>

  render() {
    console.log('CAM POSITOPN passed from collage', this.props.navigation.getParam('position'))
    console.log('CAM COLLAGEID passed from collage', this.props.navigation.getParam('collage_id'))
    console.log('CAM ip passed from collage', this.props.navigation.getParam('ipAddress'))


    if (this.state.hasCameraPermission === null) {
      return <View />;
    } else if (this.state.hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1, backgroundColor: 'black'}}>
          {this.renderTopBar()}
          <Camera
            style={ styles.camera }
            type={this.state.type}
            ref={ref => { this.camera = ref; }}
            ratio='1:1'>
          </Camera>
          {this.renderBottomBar()}
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  camera: {
    height: Dimensions.get("window").height-200,

  },
  // gradient: {
  //   position: 'absolute',
  //   width: Dimensions.get("window").width,
  //   height: Dimensions.get("window").height,

  // },
  topBar: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop:50,
    paddingBottom:20,
    // borderWidth:1,
    // borderColor:'red'
  },
  xTouch:{
    flex:1,
    alignItems:'center',
    padding: 15,

  },
  xPic: {
    resizeMode: 'contain',
    height: 25,
    width: 25,
  },
  timer:{
    flex: 2,
    textAlign:'center',
    fontSize: 18,
    color: 'white',
  },
  flipTouch: {
    flex:1,
    height: 50,
    width: 50,
    alignItems:'center',
    padding: 15,
  },
  flipPic: {
    resizeMode: 'contain',
    height: 40,
    width: 40,
  },

  bottomBar: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom:50,
    paddingTop:20,
    // borderWidth:1,
    // borderColor:'blue'
  },
  recordTouch:{
    flex: 1,
    alignItems: 'center',
    // borderWidth:1,
    // borderColor:'red'
  },
  recordText:{
    fontSize: 18,
    color: 'white',
    // borderWidth:1,
    // borderColor:'blue'
  },
  camTouch:{
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:3,
    borderColor: 'white',
    borderRadius: 100,
    height: 75,
    width: 75,
  },
  cam:{
    resizeMode: 'contain',
    width: 30,
    height: 30,
  },
  stopTouch:{
    flex: 1,
    alignItems: 'center',
    // borderWidth:1,
    // borderColor:'red'
  },
  stopText:{
    fontSize: 18,
    color: 'white',
    // borderWidth:1,
    // borderColor:'blue'
  }
})

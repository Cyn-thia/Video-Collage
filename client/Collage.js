import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Dimensions } from 'react-native';
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
  }

  componentDidMount() {
    axios.get(`http://173.2.1.190:3001/collage/9`)
    .then( res => {
      this.setState({
        apiDataLoaded: true,
        apiData: res.data.data,
        collage_id: this.props.navigation.getParam('collage_id')
      })
      // console.log('this is my log', Object.keys(res.data.data))
      console.log('this.props in collage',this.props.navigation.getParam('collage_id'))
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

  // selectPosition(){
  //   this.setState({
  //     position:
  //   })
  // }

  render() {
    console.log('passed from camera', this.props.navigation.getParam('file_name'))
    console.log('state', this.state.apiData)
    let vid;
    storageRef.child('file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FProject-4-654a6ef7-c827-4005-b901-bcd95ed4cf40/Camera/2dea1104-c5d1-40aa-8d3b-087fc6325df4.mp4').getDownloadURL().then(function(url) {
    // console.log('this is url', url)
    return vid = url
  })

    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Layouts')}>
            <Text style={styles.backButton}>Back</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}></Text>
        <View style={styles.videoContainer}>

          {this.renderVideos()}
        </View>
        <Button
        title='Go to Camera'
        onPress={() => this.props.navigation.navigate('Cam',
          {position: this.state.position, collage_id: this.state.collage_id})}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
    flexDirection: 'row',
    justifyContent:'center',
    margin: 10,
    width: Dimensions.get("window").width
  },
  subVidContainer:{
    flexDirection: 'column',
  },
})

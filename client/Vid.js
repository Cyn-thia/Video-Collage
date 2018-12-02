import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Dimensions } from 'react-native';
import { Video } from 'expo';

export default class Vid extends React.Component {

  componentDidMount() {
    this.setState({
      apiDataLoaded: true,
      apiData: this.props.video
    })
    console.log('this is my position in Vid', this.props.video.position)
  }

  render(){
    return(
      <Video
        source={{ uri: this.props.video.file_name }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode={Video.RESIZE_MODE_CONTAIN}
        shouldPlay
        isLooping
        style={styles.video}
      />
    )
  }
}

const styles = StyleSheet.create({

  video: {
    width: Dimensions.get("window").width/2 - 2,
    height: Dimensions.get("window").height/2 - 2,
    borderWidth: 2,
    borderColor: 'white',

  }
})

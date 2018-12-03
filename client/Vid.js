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
        resizeMode='contain'
        shouldPlay
        isLooping
        style={styles.video}
      />
    )
  }
}

const styles = StyleSheet.create({

  video: {
    width: Dimensions.get("window").width/2 - 8,
    height: Dimensions.get("window").width/2 - 3,
    borderTopWidth: 5,
    borderColor: 'transparent'
  }
})

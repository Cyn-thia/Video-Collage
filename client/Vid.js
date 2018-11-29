import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Dimensions } from 'react-native';
import { Video } from 'expo';

export default class Vid extends React.Component {

  componentDidMount() {
        this.setState({
          apiDataLoaded: true,
          apiData: this.props.video
        })
        console.log('this is my prop', this.props.video.position)
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
        style={styles.video1}
      />
    )
  }
}

const styles = StyleSheet.create({
  videoContainer: {
    flexWrap: 'wrap',
    width: 300,
    flexDirection: 'row',
    justifyContent:'center',
    margin: 10
  },
  video: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: 'white',
  },
  video1: {
    width: 150,
    height: 300,
    borderWidth: 2,
    borderColor: 'white',
  },
  video2: {
    width: 150,
    height: 150,
    borderWidth: 2,
    borderColor: 'white',
  },
  video3: {
    width: 150,
    height: 150,
    borderWidth: 2,
    borderColor: 'white',
  }
})

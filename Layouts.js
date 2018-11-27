import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Collage from './Collage'

export default class Layouts extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Layouts!</Text>
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
  }
})

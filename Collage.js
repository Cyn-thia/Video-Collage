import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Cam from './Camera'
import { Video } from 'expo'

export default class Collage extends React.Component {
  state = {
    currentVid: ''
  }
  render() {
    return (
      <View style={styles.container}>
        <Text > yay collage!</Text>
        <Video
          source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/video-collage-f93f5.appspot.com/o/file%3A%2Fdata%2Fuser%2F0%2Fhost.exp.exponent%2Fcache%2FExperienceData%2F%252540anonymous%25252FProject-4-654a6ef7-c827-4005-b901-bcd95ed4cf40%2FCamera%2F80268bd0-353d-4b03-842d-130eb66dbc27.mp4?alt=media&token=4eee3848-6a6b-4965-ac48-74c2427dc322' }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={{ width: 300, height: 300 }}
        />
        <Button title='Go to Camera' onPress={() => this.props.navigation.navigate('Cam', {currentVid: this.state.currentVid})}/>
        <Video source = {{uri: ''}}
        style= {{height: 200, width: 200}}
        shouldPlay
  isLooping volume = {1.0} />
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
  }
})

// import React from 'react';
// import { Image, StyleSheet, View, TouchableOpacity, Text, ScrollView } from 'react-native';
// import { FileSystem, FaceDetector, MediaLibrary, Permissions } from 'expo';
// import { MaterialIcons } from '@expo/vector-icons';
// import Cam from './Camera';

// const PHOTOS_DIR = FileSystem.documentDirectory + 'photos';

// export default class GalleryScreen extends React.Component {
//   state = {
//     faces: {},
//     images: {},
//     photos: [],
//     selected: [],
//   };

//   componentDidMount = async () => {
//     const photos = await FileSystem.readDirectoryAsync(PHOTOS_DIR);
//     this.setState({ photos });
//   };

//   toggleSelection = (uri, isSelected) => {
//     let selected = this.state.selected;
//     if (isSelected) {
//       selected.push(uri);
//     } else {
//       selected = selected.filter(item => item !== uri);
//     }
//     this.setState({ selected });
//   };

//   saveToGallery = async () => {
//     const photos = this.state.selected;

//     if (photos.length > 0) {
//       const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

//       if (status !== 'granted') {
//         throw new Error('Denied CAMERA_ROLL permissions!');
//       }

//       const promises = photos.map(photoUri => {
//         return MediaLibrary.createAssetAsync(photoUri);
//       });

//       await Promise.all(promises);
//       alert('Successfully saved photos to user\'s gallery!');
//     } else {
//       alert('No photos to save!');
//     }
//   };

//   renderPhoto = fileName =>
//     <Photo
//       key={fileName}
//       uri={`${PHOTOS_DIR}/${fileName}`}
//       onSelectionToggle={this.toggleSelection}
//     />;

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.navbar}>
//           <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
//             <MaterialIcons name="arrow-back" size={25} color="white" />
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.button} onPress={this.saveToGallery}>
//             <Text style={styles.whiteText}>Save selected to gallery</Text>
//           </TouchableOpacity>
//         </View>
//         <ScrollView contentComponentStyle={{ flex: 1 }}>
//           <View style={styles.pictures}>
//             {this.state.photos.map(this.renderPhoto)}
//           </View>
//         </ScrollView>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 20,
//     backgroundColor: 'white',
//   },
//   navbar: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     backgroundColor: '#4630EB',
//   },
//   pictures: {
//     flex: 1,
//     flexWrap: 'wrap',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     paddingVertical: 8,
//   },
//   button: {
//     padding: 20,
//   },
//   whiteText: {
//     color: 'white',
//   }
// });

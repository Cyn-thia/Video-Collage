// import { Dimensions } from 'react-native';
// import SideSwipe from 'react-native-sideswipe';

// import CustomComponent from '...'
// import data from '...'

// export default class Carousel extends Component {
//   state = {
//     currentIndex: 0,
//   };

//   render = () => {
//     // center items on screen
//     const { width } = Dimensions.get('window');
//     const contentOffset = (width - CustomComponent.WIDTH) / 2;

//     return (
//       <SideSwipe
//         index={this.state.currentIndex}
//         itemWidth={CustomComponent.WIDTH}
//         style={{ width }}
//         data={data}
//         contentOffset={contentOffset}
//         onIndexChange={index =>
//           this.setState(() => ({ currentIndex: index }))
//         }
//         renderItem={({ itemIndex, currentIndex, item, animatedValue }) => (
//          <CustomComponent
//             {...item}
//             index={itemIndex}
//             currentIndex={currentIndex}
//             animatedValue={animatedValue}
//           />
//         )}
//       />
//     );
//   };
// }

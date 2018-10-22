// import React, {Component} from 'react';
// import {Platform, StyleSheet, TextInput, View, Image, Text, Button} from 'react-native';
// import { fetch, post } from './http.js/index';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// var MOCKED_MOVIES_DATA = [
//   {
//     title: "标题",
//     year: "2015",
//     posters: { thumbnail: "http://i.imgur.com/UePbdph.jpg" }
//   }
// ];

// type Props = {
//   name: 'fucker'
// };
// export default class App extends Component<Props> {
//   state = {
//     pic: {}
//   }
//   onChange = (e) => {
//     console.log(e);
//   }
//   componentDidMount() {
//     console.log(33333)
//     fetch("https://api.github.com/users/solomonxie")
//     .then(res => {
//       console.log(res);
//       this.setState({
//         pic: {
//           uri: res.avatar_url
//         }
//       })
//     })
//   }
//   render() {
//     console.log(this.props);
//     const { pic } = this.state;
//     var movie = MOCKED_MOVIES_DATA[0];
//     return (
//       <View style={styles.container}>
//         <Text>{movie.title}</Text>
//         <Text>{movie.year}</Text>
//         <Image source={{uri: movie.posters.thumbnail}} style={styles.thumbnail} />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F5FCFF"
//   },
//   thumbnail: {
//     width: 53,
//     height: 81
//   }
// });

import React, { Component } from 'react';
import HomeStack from './routes/TabNavigator';

export default class App extends Component {
  render() {
    return (
      <HomeStack />
    );
  }
}

import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default class RepoDetail extends Component {

  state = {
    url: ''
  }
  componentWillMount() {
    
  }



  static navigationOptions = ({ navigation }) => {
    console.log(navigation)
    return {
      title: navigation.state.params.item.item.name,

    };
  };

  render() {
    const { item } = this.props;
    return (
      <View style={styles.container}>

            <Text style={styles.login}>RepoDetail</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({

});
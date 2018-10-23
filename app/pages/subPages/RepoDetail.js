import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default class RepoDetail extends Component {
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
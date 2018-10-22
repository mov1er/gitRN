import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class Mine extends Component {
  static navigationOptions = {
    title: 'mine',
  };
  render() {
    return (
      <Container>
        
        <Text>Mine</Text>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  head: {
    height: 76,
    backgroundColor: "#343434",
    paddingTop: 30
  }
});
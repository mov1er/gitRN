import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class Issues extends Component {
  static navigationOptions = {
    title: 'Issues',
  };
  render() {
    return (
      <Container>
        
        <Text>issues</Text>
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
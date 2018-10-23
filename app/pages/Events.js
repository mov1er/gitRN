import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import pxToDp from '../utils/index';
import EventItem from '../components/EventItem';
import { get } from '../http/index';

let pageNo = 1;
let totalPage = 5;
export default class Events extends Component {
  state = {
    dataArray: []
  }

  static navigationOptions = {
    title: 'Events',
  };
  componentDidMount() {
    console.log('event did mount');
    this.getEventList();
  }
  
  getEventList = () => {
    get(`https://api.github.com/users/mov1er/received_events?page=1&per_page=20`)
    .then((data) => {
      const { isRefreshing, showFoot } = this.state;
      let foot = 0;
      if (pageNo >= totalPage) {
        foot = 1;
      }
      this.setState({
        dataArray: isRefreshing ? data : this.state.dataArray.concat(data),
        isLoading: false,
        showFoot: foot,
        isRefreshing: false
      });
    })
    .catch(err => {
      this.setState({
        error: true,
        isLoading: false,
        showFoot: 1,
        isRefreshing: false
      });
    })
  }

  _keyExtractor = (item, index) => (item.id + '');

  _renderItemView = (item) => (
    <EventItem {...item}></EventItem>
  )

  _separator() {
    return <View style={{ height: pxToDp(1), backgroundColor: '#ccc' }} />;
  }

  render() {
    const { dataArray, isRefreshing } = this.state;
    return (
      <FlatList
        data={dataArray}
        onEndReachedThreshold={1}
        renderItem={this._renderItemView}
        keyExtractor={this._keyExtractor}
        ItemSeparatorComponent={this._separator}
      />
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
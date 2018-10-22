import React, { Component } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import pxToDp from '../utils/index';
import RepoItem from './RepoItem';

export default class FlatListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: this.props.dataArray,
      showFoot: this.props.showFoot, // 控制foot， 0：隐藏footer  1：已加载完成,没有更多数据   2 ：显示加载中
      isRefreshing: this.props.isRefreshing,//下拉控制
      language: 'javascript'
    }
  }

  //加载等待页
  renderLoadingView() {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          animating={true}
          color='#159951'
          size="small"
        />
      </View>
    );
  }

  _keyExtractor = (item, index) => (item.id + '');

  _onRefresh = () => {
    this.setState({
      isRefreshing: true,
    }, () => {
      pageNo = 1;
      this.props.fetchData(pageNo);
    });
  };

  _separator() {
    return <View style={{ height: pxToDp(1), backgroundColor: '#ccc' }} />;
  }
  
  _renderFooter = () => {
    if (this.state.showFoot === 1) {
      return (
        <View style={styles.footer}>
          <Text style={styles.loadmoreTxt}>
            no more data :)
          </Text>
        </View>
      );
    } else if (this.state.showFoot === 2) {
      return (
        <View style={styles.footer}>
          <ActivityIndicator 
            style={styles.loadmore}
            animating={true}
            color='#159951'
            size="small"/>
          <Text style={styles.loadmoreTxt}>loading more...</Text>
        </View>
      );
    } else if (this.state.showFoot === 0) {
      return (
        <View style={styles.footer}>
          <Text></Text>
        </View>
      );
    }
  }

  _onEndReached = () => {
    if (this.state.showFoot != 0) {
      return;
    }
    if ((pageNo != 1) && (pageNo >= totalPage)) {
      return;
    } else {
      pageNo++;
    }
    this.setState({ showFoot: 2 }, () => {
      this.props.fetchData(pageNo);
    });
  }

  render() {
    const { dataArray, isRefreshing } = this.props;

    //加载数据
    return (
      <FlatList
        data={dataArray}
        refreshing={isRefreshing}
        onEndReachedThreshold={1}
        onRefresh={this._onRefresh}
        onEndReached={this._onEndReached}
        renderItem={(item) => (
          <RepoItem {...item}></RepoItem>
        )}
        keyExtractor={this._keyExtractor}
        ListFooterComponent={this._renderFooter.bind(this)}
        ItemSeparatorComponent={this._separator}
      />
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  footer: {
    flexDirection: 'row',
    height: pxToDp(80),
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadmore: {
    marginRight: pxToDp(12)
  },
  loadmoreTxt: {
    fontSize: pxToDp(24),
    color: '#666'
  }
});

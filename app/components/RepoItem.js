import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import pxToDp from '../utils/index';
import { Icon } from 'native-base';
import md5 from '../utils/md5';

export default class RepoItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.head}>
          <View style={styles.flex}>
            <Image style={styles.avatar} source={{uri:item.owner.avatar_url}}/>
            <Text style={styles.login}>{item.owner.login}</Text>
          </View>
          {
            item.language && <View style={styles.flex}>
            <View style={[styles.colorBlock, {backgroundColor: `#${md5(item.language).slice(8, 14)}`}]}></View>
            <Text style={styles.language}>{item.language}</Text>
          </View>
          }
        </View>
        <Text style={styles.full_name}>{item.full_name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.status}>
          <View style={styles.flex}>
            <Icon style={styles.icon} name="star" type="Octicons" />
            <Text style={styles.iconTxt}>{item.stargazers_count}</Text>
          </View>
          <View style={styles.flex}>
            <Icon style={styles.icon} name="issue-opened" type="Octicons" />
            <Text style={styles.iconTxt}>{item.open_issues}</Text>
          </View>
          <View style={styles.flex}>
            <Icon style={styles.icon} name="code-fork" type="FontAwesome" />
            <Text style={styles.iconTxt}>{item.forks_count}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    borderBottomColor: '#e3e3e3',
    paddingHorizontal: pxToDp(30),
    paddingVertical: pxToDp(40),
  },
  avatar: {
    width: pxToDp(36),
    height: pxToDp(36),
    borderRadius: pxToDp(18),
    marginRight: pxToDp(16),
    backgroundColor: '#eee'
  },
  head: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: pxToDp(20),
    justifyContent: 'space-between'
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  login: {
    fontSize: pxToDp(24),
    paddingTop: pxToDp(4),
    color: '#333'
  },
  language: {
    color: '#666',
    fontSize: pxToDp(28)
  },
  full_name: {
    fontSize: pxToDp(32),
    marginBottom: pxToDp(20)
  },
  description: {
    fontSize: pxToDp(28),
    color: '#666',
    lineHeight: pxToDp(40),
    marginBottom: pxToDp(20)
  },
  status: {
    display: 'flex',
    flexDirection: 'row',
    color: '#666'
  },
  iconTxt: {
    fontSize: pxToDp(24),
    color: '#666',
    marginRight: pxToDp(24),
    marginLeft: pxToDp(6)
  },
  icon: {
    color: '#666',
    fontSize: pxToDp(28)
  },
  colorBlock: {
    width: pxToDp(18),
    height: pxToDp(18),
    backgroundColor: '#159951',
    borderRadius: pxToDp(9),
    position: 'relative',
    top: pxToDp(8),
    left: pxToDp(-8)
  }
});
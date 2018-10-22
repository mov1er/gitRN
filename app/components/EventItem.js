import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import pxToDp from '../utils/index';
import { Icon } from 'native-base';
import timeago from 'timeago.js';
export default class EventItem extends Component {
  _renderTitle = (item) => {
    if (item.type === 'WatchEvent') {
      return (
        <View style={styles.wrap}>
          <View style={styles.content}>
            <View style={styles.detail}>
              <Text>
                <Text>{item.actor.login} </Text>
                <Text style={styles.action}>{item.payload.action} </Text>
                <Text>{item.repo.name} </Text>
              </Text>
            </View>
            <View style={styles.actType}>
              <Icon name="star" type="Octicons" style={[styles.icon, { color: '#f8d246' }]} />
            </View>
          </View>
          <View>
            <Text style={styles.created_at}>{timeago().format(item.created_at)}</Text>
          </View>
        </View>
      )
    } else if (item.type === 'IssuesEvent') {
      return (
        <View style={styles.wrap}>
          <View style={styles.content}>
            <View style={styles.detail}>
              <Text>
                <Text>{item.actor.login} </Text>
                <Text style={styles.action}>{item.payload.action} </Text>
                <Text style={styles.action}>issue #{item.payload.issue.number} for </Text>
                <Text>{item.repo.name} </Text>
              </Text>
            </View>
            <View style={styles.actType}>
              {
                item.payload.action === 'opened' ?
                  <Icon name={`issue-opened`} type="Octicons" style={[styles.icon, { color: '#159951' }]} /> :
                  <Icon name={`issue-closed`} type="Octicons" style={[styles.icon, { color: '#e67069' }]} />
              }
            </View>
          </View>
          <View>
            <Text style={styles.created_at}>{timeago().format(item.created_at)}</Text>
          </View>
          {
            item.payload.action === 'opened' &&
            <View>
              <Text style={styles.comment}>{item.payload.issue.title}</Text>
            </View>
          }
        </View>
      )
    } else if (item.type === 'IssueCommentEvent') {
      return (
        <View style={styles.wrap}>
          <View style={styles.content}>
            <View style={styles.detail}>
              <Text>
                <Text>{item.actor.login} </Text>
                <Text style={styles.action}>commented issue #{item.payload.issue.number} </Text>
                <Text>{item.repo.name} </Text>
              </Text>
            </View>
            <View style={styles.actType}>
              <Icon name="comment" type="Octicons" style={[styles.icon, { color: '#159951' }]} />
            </View>
          </View>
          <View>
            <Text style={styles.created_at}>{timeago().format(item.created_at)}</Text>
          </View>
          <View>
            <Text style={styles.comment}>{item.payload.comment.body}</Text>
          </View>
        </View>
      )
    } else if (item.type === 'ForkEvent') {
      return (
        <View style={styles.wrap}>
          <View style={styles.content}>
            <View style={styles.detail}>
              <Text>
                <Text>{item.actor.login} </Text>
                <Text style={styles.action}>forked </Text>
                <Text>{item.repo.name} </Text>
              </Text>
            </View>
            <View style={styles.actType}>
              <Icon name="repo-forked" type="Octicons" style={[styles.icon, { color: '#333' }]} />
            </View>
          </View>
          <View>
            <Text style={styles.created_at}>{timeago().format(item.created_at)}</Text>
          </View>
        </View>
      )
    } else if (item.type === 'PushEvent') {
      return (
        <View style={styles.wrap}>
          <View style={styles.content}>
            <View style={styles.detail}>
              <Text>
                <Text>{item.actor.login} </Text>
                <Text style={styles.action}>pushed </Text>
                <Text>{item.repo.name} </Text>
              </Text>
            </View>
            <View style={styles.actType}>
              <Icon name="repo-push" type="Octicons" style={[styles.icon, { color: '#159951' }]} />
            </View>
          </View>
          <View>
            <Text style={styles.created_at}>{timeago().format(item.created_at)}</Text>
          </View>
        </View>
      )
    } else if (item.type === 'CreateEvent') {
      return (
        <View style={styles.wrap}>
          <View style={styles.content}>
            <View style={styles.detail}>
              <Text>
                <Text>{item.actor.login} </Text>
                <Text style={styles.action}>created a {item.payload.ref_type} for </Text>
                <Text>{item.repo.name} </Text>
              </Text>
            </View>
            <View style={styles.actType}>
              <Icon name="repo-push" type="Octicons" style={[styles.icon, { color: '#159951' }]} />
            </View>
          </View>
          <View>
            <Text style={styles.created_at}>{timeago().format(item.created_at)}</Text>
          </View>
        </View>
      )
    } else {
      console.log(item)
      return (
        <View style={styles.wrap}>

        </View>
      )
    }
  }
  render() {
    const { item } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.avatar}>
          <Image style={styles.avatar} source={{ uri: item.actor.avatar_url }} />
        </View>
        {this._renderTitle(item)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: pxToDp(32),
    paddingVertical: pxToDp(24),
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  avatar: {
    width: pxToDp(72),
    height: pxToDp(72),
    marginRight: pxToDp(26),
    backgroundColor: '#eee',
  },
  wrap: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: pxToDp(12)
  },
  detail: {
    flex: 1,
    paddingRight: pxToDp(10)
  },
  action: {
    color: '#666',
  },
  icon: {
    fontSize: pxToDp(40),
  },
  created_at: {
    fontSize: pxToDp(24),
    color: '#666',
    marginBottom: pxToDp(12)
  },
  comment: {
    fontSize: pxToDp(24),
    color: '#666',
  }
});
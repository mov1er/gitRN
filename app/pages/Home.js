import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import { StyleSheet } from 'react-native';
import { Icon } from 'native-base';

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* other code from before here */}
        <Text>HomeScreen!</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* other code from before here */}
        <Text>SettingsScreen!</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
});

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  Details: DetailsScreen,
});

const Home = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: ({ navigation, screeProps }) => ({
        //这里设置StackNavigator属性和一般情况下Tabbar不同页面可能会不同的属性
  
        //设置StackNavigator属性
        header: null,
        headerTitle: '直播',
        tabBarIcon: ({ focused, tintColor }) => {
          return <Icon name="event" type="MaterialIcons" style={[styles.tabbarImage, { color: tintColor }]} />
        }
      })
    },
    Settings: SettingsStack,
  },
  {
    /* Other configuration remains unchanged */
  }
);

const styles = StyleSheet.create({
  navigatorTitle: {
    fontSize: 17,
    color: '#000',
  },
  navigator: {
    backgroundColor: '#d81e06',
  },
  tabbarImage: {
    fontSize: 20,
    width: 20,
    height: 20,
    marginBottom: -4,
  },
})



export default Home
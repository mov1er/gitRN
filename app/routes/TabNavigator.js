import React from 'react'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import Repos from '../pages/Repos';
import Events from '../pages/Events';
import Issues from '../pages/Issues';
import Mine from '../pages/Mine';
import pxToDp from '../utils/index';

const navigationOptions = {
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#159951',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontSize: pxToDp(36)
    },
  }
}

const ReposStack = createStackNavigator({
  Repos: Repos
}, navigationOptions);

const EventsStack = createStackNavigator({
  Events: Events,
}, navigationOptions);

const IssuesStack = createStackNavigator({
  Issues: Issues,
}, navigationOptions);

const MineStack = createStackNavigator({
  Mine: Mine,
}, navigationOptions);

export default HomeStack = createBottomTabNavigator({
  Repos: {
    screen: ReposStack,
    navigationOptions: ({ navigation, screeProps }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        return <Icon name="repo" type="Octicons" style={[styles.tabbarImage, { color: tintColor }]} />
      }
    })
  },
  Events: {
    screen: EventsStack,
    navigationOptions: ({ navigation, screeProps }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        return <Icon name="event" type="MaterialIcons" style={[styles.tabbarImage, { color: tintColor }]} />
      }
    })
  },
  Issues: {
    screen: IssuesStack,
    navigationOptions: ({ navigation, screeProps }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        return <Icon name="issue-opened" type="Octicons" style={[styles.tabbarImage, { color: tintColor }]} />
      }
    })
  },
  Mine: {
    screen: MineStack,
    navigationOptions: ({ navigation, screeProps }) => ({
      headerTitle: '我的',
      headerStyle: styles.navigator,
      headerTitleStyle: styles.navigatorTitle,
      gesturesEnabled: true,
      tabBarVisible: true,
      tabBarIcon: ({ focused, tintColor }) => {
        return <Icon name="account" type="MaterialCommunityIcons" style={[styles.tabbarImage, { color: tintColor }]} />
      }
    })
  }
},
  {
    //这里设置的是一般情况下Tabbar共同的属性
    tabBarPosition: 'bottom', // 设置tabbar的位置，iOS默认在底部，安卓默认在顶部。（属性值：'top'，'bottom')
    swipeEnabled: false, // 是否允许在标签之间进行滑动。
    animationEnabled: false, // 是否在更改标签时显示动画。
    lazy: true, // 是否根据需要懒惰呈现标签，而不是提前制作，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐改成true哦。
    initialRouteName: '', // 设置默认的页面组件
    backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    
    tabBarOptions: {
      activeTintColor: '#159951', // label和icon的前景色 活跃状态下（选中）。
      inactiveTintColor: '#515151', // label和icon的前景色 不活跃状态下(未选中)。
      labelStyle: {
        fontSize: 12,
        paddingBottom: 4
      }, //label的样式。
    }
  })



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


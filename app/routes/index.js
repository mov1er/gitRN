
import Repos from '../pages/Repos';
import Events from '../pages/Events';
import Issues from '../pages/Issues';
import MainTab from './TabNavigator';
import Mine from '../pages/Mine';
import { StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import { createStackNavigator } from 'react-navigation'
/*
    --- 路由配置 ---
   * 所有组件都必须在这里注册
   * 在这里设置的navigationOptions的权限 > 对应页面里面的 static navigationOptions的设置 > StackNavigator()第二个参数里navigationOptions的设置
   * 该配置文件会在App.js里的StackNavigator(导航组件)里使用。
*/

export const ReposStack = createStackNavigator({
  Repos: Repos,
});

export const EventsStack = createStackNavigator({
  Events: Events,
});

export const IssuesStack = createStackNavigator({
  Issues: Issues,
});

export const MineStack = createStackNavigator({
  Mine: Mine,
});



// const HomeStack = createBottomTabNavigator(
//   {
//     Repos: ReposStack,
//     Settings: SettingsStack,
//   },
//   {
//     /* Other configuration remains unchanged */
//   }
// );

// const RouteConfig = {
//   MainTab: {
//     screen: MainTab,
//     navigationOptions: ({navigation}) => ({title: 'aaaaaaaa'})
//   },
//   // 下面三个页面我需要隐藏导航栏
//   Repos: {
//     screen: Repos,
//     navigationOptions: ({ navigation }) => ({ title: 'asdasd',gesturesEnable: true })
//   },
//   Events: {
//     screen: Events,
//     navigationOptions: ({ navigation }) => ({ gesturesEnable: true })
//   },
//   Issues: {
//     screen: Issues,
//     navigationOptions: ({ navigation }) => ({ gesturesEnable: true })
//   },
//   Mine: {
//     screen: Mine,
//     navigationOptions: ({ navigation }) => ({ gesturesEnable: true })
//   },
// }

// export default RouteConfig;

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